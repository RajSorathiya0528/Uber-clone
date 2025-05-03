import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './Database/db.js';
import userRouter from './Routes/User.route.js';
import cookieParser from "cookie-parser";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


connectDB();

app.use('/api/v1/users', userRouter);

app.get('/',(req, res) => {
    res.send("hello world");
})


export default app;