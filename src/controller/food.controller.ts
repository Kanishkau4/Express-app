import { Request, Response } from "express";
import { ERRORS } from "../common/constants/errors.constants";
import { HttpStatus } from "../common/constants/httpStatus.enum";
import { errorResponse, SuccessResponse } from "../common/responseHandler";
import { CreateFoodDto } from "../dto/food/createFood.dto";
import { FoodService } from "../service/food.service";

export class FoodController { 
    private static instance: FoodController;
    private foodService: FoodService;
    public static getInstance(): FoodController { 
        if (!FoodController.instance) { 
            FoodController.instance = new FoodController(); 
        } 
        return FoodController.instance; 
    }

    private constructor() { 
        this.foodService = FoodService.getInstance(); 
    }
    
    createFood = async (req: Request, res: Response) => { 
        try { 
            const food = req.body as CreateFoodDto; 
            const newFood = await this.foodService.createFood(food); 
            return SuccessResponse(HttpStatus.OK,res,newFood); 
        } catch (error) { 
            return errorResponse(HttpStatus.INTERNAL_SERVER_ERROR,res,ERRORS.BAD_REQUEST); 
        }
    }
}