import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './Database/db.js';
import userRouter from './Routes/User.route.js';
import captainRouter from './Routes/Captain.route.js';
import rideRoutes from './Routes/Ride.route.js';
import cookieParser from "cookie-parser";
import mapsRoutes from './Routes/Maps.route.js'

dotenv.config();
const app = express();

const corsOptions = {
    origin: 'http://localhost:5173', // your frontend URL
    credentials: true, // allow credentials (cookies, etc.)
  };

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


connectDB();

app.use('/api/v1/users', userRouter);
app.use('/api/v1/captains', captainRouter);
app.use('/api/maps', mapsRoutes);
app.use('/api/v1/rides', rideRoutes)

app.get('/',(req, res) => {
    res.send("hello world");
})


export default app;