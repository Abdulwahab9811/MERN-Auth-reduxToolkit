import express from 'express';
import dotenv from 'dotenv'
dotenv.config();
import userRoutes from './routes/userRoutes.js'
import {notFound, errorHandler} from './Middleware/errormiddleware.js'
import cookieParser from 'cookie-parser';



import connectDB from './config/config.js';


const port =  process.env.PORT || 5000;

connectDB();

const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cookieParser());

app.use('/api/users', userRoutes )

app.get('/',(req,res) => res.send('Server is ready'));

app.use(errorHandler);
app.use(notFound);




app.listen(port,() => console.log(`Server is running on port ${port}`));