import { createRide, getFare } from '../Services/Ride.service.js';
import { validationResult } from 'express-validator'
import rideModel from '../models/Ride.model.js'

const { sendMessageToSocketId } = require('../socket');


const CreateRide = async (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(400).json({ errors : errors.array() });
    }

    const {userId, pickup, destination, vehicleType} = req.body;


    try {
        const ride = await createRide({ user : req.user._id, pickup, destination, vehicleType});
        return res.status(200).json(ride);
    } catch (error) {
        return res.status(500).json({ message : error.message })
    }
}

const GetFare = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json({ errors : errors.array()})
    }

    const {pickup, destination} = req.query;
    try {
        const response = await getFare(pickup, destination);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ message : error.message }) 
    }
}

const confirmRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { rideId } = req.body;

    try {
        const ride = await rideService.confirmRide({ rideId, captain: req.captain });

        sendMessageToSocketId(ride.user.socketId, {
            event: 'ride-confirmed',
            data: ride
        })

        return res.status(200).json(ride);
    } catch (err) {

        console.log(err);
        return res.status(500).json({ message: err.message });
    }
}

const startRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { rideId, otp } = req.query;

    try {
        const ride = await rideService.startRide({ rideId, otp, captain: req.captain });

        console.log(ride);

        sendMessageToSocketId(ride.user.socketId, {
            event: 'ride-started',
            data: ride
        })

        return res.status(200).json(ride);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

const endRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { rideId } = req.body;

    try {
        const ride = await rideService.endRide({ rideId, captain: req.captain });

        sendMessageToSocketId(ride.user.socketId, {
            event: 'ride-ended',
            data: ride
        })
        return res.status(200).json(ride);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    } s
}

export {
    CreateRide,
    GetFare,
    confirmRide,
    startRide,
    endRide
}