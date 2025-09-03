import { Router } from "express";
import { FoodController } from "../controller/food.controller";

export class FoodRoute { 
    private static instance: FoodRoute;
    public router: Router;
    public foodController: FoodController;

    public static getInstance(): FoodRoute { 
        if (!FoodRoute.instance) { 
            FoodRoute.instance = new FoodRoute(); 
        } 
        return FoodRoute.instance; 
    }

    private constructor() { 
        this.router = Router(); 
        this.foodController = FoodController.getInstance(); 
        this.setupRoutes(); 
    }
    
    private setupRoutes(): void { 
        this.router.post("/", this.foodController.createFood); 
    }
}