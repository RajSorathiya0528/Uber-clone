import User from "../models/User.model.js";
import createUser from "../Services/User.service.js"
import { validationResult } from "express-validator"
import  BlackListToken from "../models/BlacklistToken.model.js"

const registerUser = async (req, res, next) => {
    try {
        const errors = validationResult( req );
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors : errors.array()
            })
        }

        const { fullname, email, password } = req.body;
        
        const hashPasswordValue = await User.hashPassword(password);
        const user = await createUser ({
            fullname,
            email,
            password : hashPasswordValue
        });

        const token = user.generateAuthToken();
        res.status(201).json({
            success : true,
            user,
            token
        })

    } catch (error) {
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
    res.cookie("token",token)

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
    res.clearCookie('token')
    const token = req.cookies.token;
    const blackListToken = await BlackListToken.create({ token });
    if(!blackListToken){
        return res.status(500).json({
            success : false,
            message : "internal server error"
        })
    }
    await blackListToken.save()

    res.status(200).json({
        success : true,
        message : "logout Successfully"
    })
}

export {
    registerUser, 
    loginUser, 
    getUserProfile, 
    logoutUser
};