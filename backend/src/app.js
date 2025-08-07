// 1️⃣ Core Imports
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';


// 2️⃣ Security Middlewares

import rateLimit from 'express-rate-limit';
import hpp from 'hpp';

const app = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN || '*',
        credentials: true,
    }));


// 8️⃣ Rate Limiting
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests
});
app.use(limiter);

morgan.token('host',(req,res)=>{
    return req.hostname;
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms - :host'));

app.use(helmet());
app.use(hpp());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.static("public"));
app.use(cookieParser());

import userRoute from "./routes/user.route.js"
import userProfileRoute from './routes/userProfile.route.js'

app.use("/api/v1/users",userRoute)
app.use("/api/v1/userprofile",userProfileRoute)


export {app}