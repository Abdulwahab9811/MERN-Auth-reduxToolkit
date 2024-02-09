import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import { errorHandler,notFound } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';



const port = process.env.PORT || 5000;

import userRoutes from './routes/userRoutes.js';

const app = express();

connectDB();

app.use('/api/users', userRoutes);


app.get('/',(req,res) => res.send ('Server is ready'));

app.use(notFound);
app.use(errorHandler);

app.listen(port,() => console.log(`Listening to port ${port}`));