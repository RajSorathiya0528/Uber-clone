import Ride from '../models/Ride.model.js';
import crypto from 'crypto';
import { getdestenceTime } from '../Services/Maps.service.js'

const getFare = async (pickup, destination) => {
    if(!pickup || !destination){
        throw new Error("Address are rquired")
    }
    const distanceTime = await getdestenceTime(pickup, destination);
    const baseFare = {
        auto : 30,
        car : 50, 
        motercycle : 20
    }
    const perKmRate = {
        auto : 10,
        car : 15,
        motercycle : 8
    }
    const perMinuiteRate = {
        auto : 2,
        car : 3,
        motercycle : 1.5
    }
    const fare = {
        auto : baseFare.auto + ((distanceTime.distance.value / 1000) * perKmRate.auto) + ((distanceTime.duration.value / 60) * perMinuiteRate.auto),
        car : baseFare.car + ((distanceTime.distance.value / 1000) * perKmRate.car) + ((distanceTime.duration.value / 60) * perMinuiteRate.car),
        motercycle : baseFare.motercycle + ((distanceTime.distance.value / 1000) * perKmRate.motercycle) + ((distanceTime.duration.value / 60) * perMinuiteRate.motercycle)
    }
    return fare;
}

const getOtp = (num) => {
    const otp = crypto.randomInt(Math.pow(10, num-1), Math.pow(10, num)).toString();
    return otp;
}

const createRide = async({user, pickup, destination, vehicleType}) =>  {
    if(!user || !pickup || !destination || !vehicleType){
        throw new Error("All fields are required");
    }
    const fare = await getFare(pickup, destination);

    const ride = Ride.create({
        user, 
        pickup,
        otp : getOtp(6),
        destination,
        fare : fare[vehicleType]
    })

    return ride
}

const confirmRide = async ({
        rideId, captain
    }) => {
    if (!rideId) {
        throw new Error('Ride id is required');
    }
    await rideModel.findOneAndUpdate({
        _id: rideId
    }, {
        status: 'accepted',
        captain: captain._id
    })
    const ride = await rideModel.findOne({
        _id: rideId
    }).populate('user').populate('captain').select('+otp');
    if (!ride) {
        throw new Error('Ride not found');
    }
    return ride;
}

const startRide = async ({ rideId, otp, captain }) => {
    if (!rideId || !otp) {
        throw new Error('Ride id and OTP are required');
    }

    const ride = await rideModel.findOne({
        _id: rideId
    }).populate('user').populate('captain').select('+otp');

    if (!ride) {
        throw new Error('Ride not found');
    }

    if (ride.status !== 'accepted') {
        throw new Error('Ride not accepted');
    }

    if (ride.otp !== otp) {
        throw new Error('Invalid OTP');
    }

    await rideModel.findOneAndUpdate({
        _id: rideId
    }, {
        status: 'ongoing'
    })
    return ride;
}

const endRide = async ({ rideId, captain }) => {
    if (!rideId) {
        throw new Error('Ride id is required');
    }

    const ride = await rideModel.findOne({
        _id: rideId,
        captain: captain._id
    }).populate('user').populate('captain').select('+otp');

    if (!ride) {
        throw new Error('Ride not found');
    }

    if (ride.status !== 'ongoing') {
        throw new Error('Ride not ongoing');
    }

    await rideModel.findOneAndUpdate({
        _id: rideId
    }, {
        status: 'completed'
    })

    return ride;
}

export {
    createRide,
    getFare,
    confirmRide,
    startRide,
    endRide
}