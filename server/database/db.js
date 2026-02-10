import mongoose from "mongoose";

export const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "MERN STACK LIBRARY MANAGEMENT SYSTEM",
    }).then(() => {
        console.log("Connected to MongoDB successfully");
    }).catch((err) => {
        console.error("Error connecting to MongoDB:", err);
    });
};