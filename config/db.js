import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        console.log('MONGODB_URL', process.env.MONGODB_URL);
        const connection = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDB Connected: ${connection.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to MongoDB: ${error.message}`);
    }
};

export default connectDB;
