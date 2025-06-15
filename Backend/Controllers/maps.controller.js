import {getAddressCoordinate, getdestenceTime} from '../Services/Maps.service.js'
import { validationResult } from 'express-validator';


const getCoordinates = async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            error: 'Invalid request parameters',
            details: errors.array()
        });
    }
    const { address } = req.query;
    if (!address) {
        return res.status(400).json({
            error: 'Address parameter is required'
        });
    }
    try {
        const coorrdinates = await getAddressCoordinate(address);
        if (!coorrdinates) {
            return res.status(404).json({
                error: 'Coordinates not found for the provided address'
            })
        }
        res.status(200).json(coorrdinates);
    } catch(error) {
        console.error('Error fetching coordinates:', error);
        res.status(404).json({
            error: 'Coordinates not found for the provided address'
        });   
    }
}

const getDistenceAndTime = async(req, res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({ errors : errors.array()});
        }
         const {origin, destination} = req.query;

        const destencetime = await getdestenceTime(origin, destination);

        res.status(200).json(destencetime);
    } catch (error) {
        
    }
}

const getAutocompliteSuggetions = async(req, res) => {

}

export {
    getCoordinates,
    getDistenceAndTime,
    getAutocompliteSuggetions
} 