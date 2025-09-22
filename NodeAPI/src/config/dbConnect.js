import mongoose, { mongo } from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const dbUser = process.env.DB_USER
const dbPass = process.env.DB_PASSWORD

async function connectDatabase() {
    mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.2ws93bt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);

    return mongoose.connection;
};

export default connectDatabase
