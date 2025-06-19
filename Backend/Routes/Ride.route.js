import express from 'express'
import { body, query } from 'express-validator';
import { CreateRide, GetFare, startRide, endRide, confirmRide } from '../Controllers/Ride.controller.js'
import { authUser } from '../Middelwares/Auth.middelware.js';

const router = express.Router();

router.post('/create',authUser,
    body('pickup').isString().isLength({ min : 3 }).withMessage('pickup location is required'),
    body('destination').isString().isLength({ min : 3}).withMessage('destination location is required'),
    body('vehicleType').isString().isIn(['auto', 'car', 'motercycle']).withMessage('invalid vehicle type'),
    CreateRide
)

router.get('/get-fare',
    query('pickup').isString().isLength({ min : 3 }).withMessage('pickup location is required'),
    query('destination').isString().isLength({ min : 3}).withMessage('destination location is required'),
    GetFare
)

router.post('/confirm',
    authCaptain,
    body('rideId').isMongoId().withMessage('Invalid ride id'),
    confirmRide
)

router.get('/start-ride',
    authCaptain,
    query('rideId').isMongoId().withMessage('Invalid ride id'),
    query('otp').isString().isLength({ min: 6, max: 6 }).withMessage('Invalid OTP'),
    startRide
)

router.post('/end-ride',
    authCaptain,
    body('rideId').isMongoId().withMessage('Invalid ride id'),
    endRide
)

export default router;