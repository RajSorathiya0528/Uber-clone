import express from 'express';
import {authUser} from '../Middelwares/Auth.middelware.js';
import {getCoordinates, getDistenceAndTime, getAutocompliteSuggetions} from '../Controllers/maps.controller.js'; 

import { query } from 'express-validator';
const router = express.Router();

router.get('/get-coordinates', 
    query('address').isString().isLength({ min: 1}),
    authUser, getCoordinates)

router.get('/get-destence-time',query('origin').isString().isLength({ min: 3}),
    query('destination').isString().isLength({ min : 3}), getDistenceAndTime)

router.get('/get-suggetion',query('input').isString().isLength({ min : 3}), getAutocompliteSuggetions)

export default router;