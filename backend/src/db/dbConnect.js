import mongooese from "mongoose";
import { DB_NAME } from "../constant.js";

const dbConnect = async () => {
    try {
        const connectionInstance = await mongooese.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
        console.log(`Database connected successfully: ${connectionInstance.connection.host}`);

    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1);
    }
}

export default dbConnect;