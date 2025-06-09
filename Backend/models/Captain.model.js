import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const captainSchema = new mongoose.Schema({
    fullName : {
        firstname : {
            type : String,
            required : true,
            minLength : [3, "firstname length should be grater then three characters"]
        },
        lastname : {
            type : String,
            minLength : [3, "lastname length should be grater then three characters"]
        },
    },
    email : {
        type : String,
        required : true,
        unique : true,
        lowercase : true,
        match : [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "please enter valid email"]
    },
    password : {
        type : String,
        required : true,
        minLength : [8, "password length should be grater then 8 chatacters"]
    },
    status : {
        type : String,
        enum : ["available", "unavailable"],
        default : "unavailable"
    },
    vehicle : {
        color : {
            type : String,
            required : true
        },
        numberPlate : {
            type : String,
            required : true,
            unique : true
        },
        capacity : {
            type : Number,
            required : true,
            min : [1, "capicity should be grater then 0"]
        },
        vehicleType : {
            type : String,
            enum : ["Car", "Motorcycle", "Auto"],
            required : true,
        },
        model : {
            type : String,
            required : true
        }
    },
    location : {
        leti : {
            type : Number,
            required : false,
        },
        long : {
            type : Number,
            required : false,
        }
    }
})


captainSchema.methods.generateToken = function() {
    return jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: "24h" });
};

captainSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async(password) => {
    return await bcrypt.hash(password, 10);
}

const Captain = mongoose.model("Captain", captainSchema)

export default Captain;