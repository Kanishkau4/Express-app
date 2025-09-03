import mongoose, { Schema } from "mongoose";
import { IFood } from "../interface/models/food.interface";

export const foodSchema = new Schema<IFood>(
    {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
},
{ timestamps: true }
);

export const Food = mongoose.model<IFood>('Food', foodSchema);