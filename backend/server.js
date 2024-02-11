import express from 'express';
import dotenv from 'dotenv'
dotenv.config();

import connectDB from './config/config.js';


const port =  process.env.PORT || 5000;

connectDB();

const app = express();



app.listen(port,() => console.log(`Server is running on port ${port}`));