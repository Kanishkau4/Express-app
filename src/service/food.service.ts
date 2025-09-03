import { FoodDao } from "../dao/food.dao";
import { CreateFoodDto } from "../dto/food/createFood.dto";
import { IFood } from "../interface/models/food.interface";

export class FoodService { 
    private static instance: FoodService;
    private foodDao: FoodDao;
    public static getInstance(): FoodService { 
        if (!FoodService.instance) { 
            FoodService.instance = new FoodService(); 
        } 
        return FoodService.instance; 
    }
    private constructor() { 
        this.foodDao = FoodDao.getInstance(); 
    }
    public async createFood(food:CreateFoodDto): Promise<IFood> { 
        try { 
            const newFood = await this.foodDao.createFood(food); 
            return newFood; 
        } catch (error: any) { 
            throw error; 
        } 
    }
}