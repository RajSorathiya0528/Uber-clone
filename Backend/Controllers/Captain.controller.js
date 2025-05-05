import BlackListToken from "../models/BlacklistToken.model.js";
import Captain from "../models/Captain.model.js";
import createCaptain from '../Services/Captain.service.js';
import { validationResult } from "express-validator";

const registerCaptain = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return res.status(401).json({
            success : false,
            errors : errors.array()
        })
    }
    const { email, password, fullName, vehicle} = req.body;
    const isCaptainAlreadyExist = await Captain.findOne({ email });
    if(isCaptainAlreadyExist) {
        return res.status(400).json({
            success : false,
            message : "Captain already exist with this email"
        })
    }
    const newhashPassword = await Captain.hashPassword(password);
    const captain = await createCaptain({
        fullName : {
            firstname : fullName.firstname,
            lastname : fullName.lastname
        },
        email,
        password : newhashPassword,
        vehicle : {
            color : vehicle.color,
            numberPlate : vehicle.numberPlate,
            capacity : vehicle.capacity,
            vehicleType : vehicle.vehicleType,
            model : vehicle.model,
        }
    })
    await captain.save()
    console.log(captain._id);
    const token = await captain.generateToken();

    res.status(201).json({
        success : true,
        message : "Captain registered successfully", 
        captain,
        token
    })
}

const captainLogin = async(req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(401).json({
            message : "Invalid email or password",
            success : false
        })
    }

    const { email, password } = req.body;
    const captain = await Captain.findOne({ email });
    
    if(!captain) {
        return res.status(401).json({
            message : "Invalid email or password",
            success : false
        })
    }

    const isPasswordMatched = await captain.comparePassword(password)
    if(!isPasswordMatched){
        return res.status(401).json({
            message : "Invalid email or password",
            success : false
        })
    }

    const token = await captain.generateToken();
    res.cookie("captainToken", token)
    res.status(200).json({
        message : "captain login successfully",
        success : true,
        captain,
        token,
    })
}

const captainProfile = async (req, res, next) => {
    const captain = req.captain;
    if(!captain){
        return res.status(401).json({
            success : false,
            message : "Unauthorize access"
        })
    }
    res.status(200).json({
        success : true,
        message : "captain profile",
        captain
    })
}

const captainLogout = async (req, res, next) => {
    const token = req.cookies.captainToken
    if(!token){
        return res.status(401).json({
            message : "Unauthorize access",
            success : false
        })
    }
    await BlackListToken.create({ token });
    res.clearCookie("token")
    res.status(200).json({
        message : "captain logout successfully",
        success : true
    })
}
export {
    registerCaptain,
    captainLogin,
    captainProfile,
    captainLogout
}