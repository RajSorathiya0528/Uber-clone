import User from "../models/User.model.js";

const createUser = async ({
    fullname, 
    email, 
    password
}) => {
    if(!fullname || !fullname.firstname || !email || !password) {
        throw new Error("All filds are required");
    } 
    const user = await User.create({
        fullname,
        email,
        password,
    })

    return user;
}

export default createUser;