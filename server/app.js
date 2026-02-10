// Import express framework to create backend server
import express from "express";

// Import dotenv config to read environment variables from config.env file
import { config } from "dotenv";

// Import cookie-parser to read cookies from browser requests
import cookieParser from "cookie-parser";

// Import cors to allow frontend and backend communication
import cors from "cors";
import { connectDB } from "./database/db.js";

import {errorMiddleware} from  "./middlewares/errorMiddlewares.js";

// Create an express application (this is your backend server)
export const app = express();


// Load environment variables from config/config.env file
// Now you can use process.env.VARIABLE_NAME
config({ path: "./config/config.env" });


// Enable CORS (Cross-Origin Resource Sharing)
// This allows your frontend to talk to your backend securely
app.use(cors({

    // Allow only this frontend URL (from config.env) to access backend
    origin: [process.env.FRONTEND_URL],

    // Allow only these HTTP request methods
    methods: ["GET", "POST", "PUT", "DELETE"],

    // Allow cookies and authentication data to be sent
    credentials: true
}));


// Enable cookie parser
// This allows you to access cookies using: req.cookies
app.use(cookieParser());


// Allow backend to read JSON data sent from frontend (Axios/Fetch)
app.use(express.json());


// Allow backend to read form data (HTML forms)
// extended: true allows nested objects in forms
app.use(express.urlencoded({ extended: true }));

connectDB();


app.use(errorMiddleware);