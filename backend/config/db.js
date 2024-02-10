import { MongoClient } from 'mongodb';

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    const client = new MongoClient(uri, {
     
    });

    await client.connect();

    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

export default connectDB;
