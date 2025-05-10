import User from "../models/User.model.js";
import mongoose from "mongoose";
import createUser from "../Services/User.service.js"
import { validationResult } from "express-validator"
import  BlackListToken from "../models/BlacklistToken.model.js"

const registerUser = async (req, res, next) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        const errors = validationResult( req );
        if(!errors.isEmpty()){
            await session.abortTransaction();
            session.endSession();
            return res.status(400).json({
                errors : errors.array()
            })
        }

        const { fullname, email, password } = req.body;

        const isUserAlreadyExist = await User.findOne( { email } );
        if(isUserAlreadyExist){
            await session.abortTransaction();
            session.endSession();
            return res.status(400).json({
                message : "User already exist with this email",
                success : false
            })
        }
        
        const hashPasswordValue = await User.hashPassword(password);
        const user = await createUser ({
            fullname,
            email,
            password : hashPasswordValue
        },
        session
        );

        const token = user.generateAuthToken();
        res.status(201).json({
            success : true,
            user,
            token
        })

    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        res.status(500).json({
            success : false,
            message : "internal server error",
            error : error.message
        })
    }
} 

const loginUser = async (req, res, next) => {
    const errors = validationResult( req );
    if(!errors.isEmpty()){
        return  res.status(400).json({
            errors : errors.array(),
            success : false
        })
    }
    const { email, password } = req.body;

    if(!email || !password ){
        return res.status(400).json({
            success : false,
            message : "all fields are required"
        })
    }

    const user = await User.findOne( { email } ).select("+password");
    if(!user){
        return res.status(401).json({
            success : false,
            message : "Invalid email or password"
        })
    }

    const isMatchPassword = await user.comparePassword(password)
    if(!isMatchPassword){
        return res.status(401).json({
            success : false,
            message : "Invalid email or password"
        })
    }

    const token = user.generateAuthToken()
    res.cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // use true in production with HTTPS
        sameSite: "lax", // or 'strict' if needed
    });

    res.status(200).json({
        success : true,
        user : {
            _id : user._id,
            fullname : user.fullname,
            email : user.email
        },
        message : "Login successful",
        token
    })
} 

const getUserProfile = async (req, res, next) => {
    try {
        const user = await User.findById(req.user._id)
        if(!user){
            return res.status(404).json({
                success : false,
                message : "User not found"
            })
        }
        res.status(200).json({
            success : true,
            user
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message : "internal server error",
            error : error.message
        })
    }
}

const logoutUser = async (req, res, next) => {
    // Attempt to get token from cookie or header
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({
            success : false,
            message : "Unauthorized access"
        })
    }
    const blackListToken = await BlackListToken.create({ token });
    if(!blackListToken){
        return res.status(500).json({
            success : false,
            message : "internal server error"
        })
    }
    await blackListToken.save()

    // Clear cookie if exists.
    res.clearCookie('token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax"
    });

    res.status(200).json({
        success : true,
        message : "Logout Successfully"
    })
}

export {
    registerUser, 
    loginUser, 
    getUserProfile, 
    logoutUser
};