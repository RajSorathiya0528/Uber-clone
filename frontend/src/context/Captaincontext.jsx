import React, { createContext, useState } from 'react';

const CaptainContext = createContext();

const CaptainProvider = ({ children }) => {
    const [captain, setCaptain] = useState({
        email : "",
        fullname : {
            firstname : "",
            lastname : ""
        },
        vehicle : {
            color : "",
            numberPlate : "",
            capacity : "",
            vehicleType : "",
            model : ""
        }
    })

    return (
        <CaptainContext.Provider value = {{ captain, setCaptain}} >
            {children}
        </CaptainContext.Provider>
    )
}

export { CaptainContext, CaptainProvider };