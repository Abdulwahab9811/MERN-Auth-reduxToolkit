import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';
import connectDB from './config/db.js';
import { errorHandler,notFound } from './middleware/errorMiddleware.js';



const app = express();

const port = process.env.PORT || 5000;

dotenv.config();

connectDB();

app.use('/api/users', userRoutes);


app.get('/',(req,res) => res.send ('Server is ready'));

app.use(notFound);
app.use(errorHandler);

app.listen(port,() => console.log(`Listening to port ${port}`));