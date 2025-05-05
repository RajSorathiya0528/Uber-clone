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

export {
    registerCaptain
}