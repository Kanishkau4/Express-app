import mongoose from "mongoose";
import { APP_CONFIG } from "../config/app.config";

export class MongoLoader {

    private MONGODB_URI: string = APP_CONFIG.MONGODB_URI || "";
    
    public async connect() {
        try{
            await mongoose.connect(this.MONGODB_URI);
            console.log("MongoDB connected");
        }catch(error){
            console.error("MongoDB connection error:", error);
        }
    }
}