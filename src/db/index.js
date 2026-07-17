import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB = async () => {
    try {
        const baseUri = process.env.MONGODB_URI;
        if (!baseUri) {
            throw new Error("MONGODB_URI is not defined");
        }

        const uri = baseUri.endsWith(`/${DB_NAME}`) ? baseUri : `${baseUri}/${DB_NAME}`;
        const connection = await mongoose.connect(uri);
        console.log(`MongoDB connected !! DB HOST : ${connection.connection.host}`);
    } catch (error) {
        console.error("MONGODB connection error:", error);
        process.exit(1);
    }
};

export default connectDB;