import Captain from "../models/Captain.model.js";

const createCaptain = async ({ fullName, email, password, vehicle }) => {
    if(!fullName.firstname || !email || !password || !vehicle.color || !vehicle.numberPlate || !vehicle.capacity || !vehicle.vehicleType || !vehicle.model) {
        throw new Error("All fields are required");
    }

    const { firstname, lastname } = fullName;
    const { color, numberPlate, capacity, vehicleType, model } = vehicle;

    const captain = await Captain.create({
        fullName : {
            firstname,
            lastname
        },
        email,
        password,
        vehicle : {
            color,
            numberPlate,
            capacity,
            vehicleType,
            model
        }
    });
    return captain;
}

export default createCaptain;
