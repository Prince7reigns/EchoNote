import {User} from '../models/user.model.js';
import { StatusCodes } from 'http-status-codes';
import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/ApiError.js';
import jwt from 'jsonwebtoken';


export const verifyjwt = asyncHandler(async(req, _, next)=>{
    try {
        const accessToken = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
        if (!accessToken) {
            throw new ApiError(StatusCodes.UNAUTHORIZED, "Unauthorized request");
        }

        const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)

        const user = await User.findById(decoded.id)

        if (!user) {
            throw new ApiError(StatusCodes.UNAUTHORIZED, "User not found or invalid token");
        }
        req.user = user;
        next();

    } catch (error) {
        throw new ApiError(StatusCodes.UNAUTHORIZED, error?.message || "Invalid access token");
    }
})