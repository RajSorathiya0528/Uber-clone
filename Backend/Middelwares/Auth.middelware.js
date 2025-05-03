import User from "../models/User.model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";


dotenv.config();

const authUser = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    const token = req.cookies.token || (authHeader ? authHeader.split(' ')[1]: null);
    if(!token) { 
        return res.status(401).json({
            success : false,
            message : "Unauthorized access"
        })
    }

    const isBlacklistedToken = await User.findOne({ token });
    if(isBlacklistedToken) {
        return res.status(401).json({
            success : false,
            message : "Unauthorized access"
        })
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decodedToken._id);
        req.user = user;
        return next();
    } catch (error) {
        return res.status(401).json({
            success : false,
            message : "Unauthorized access",
            error : error.message
        })
    }
}

export default authUser;