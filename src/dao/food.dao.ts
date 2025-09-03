import { ERRORS } from "../common/constants/errors.constants";
import { IFood } from "../interface/models/food.interface";
import { Food } from "../models/food.model";

export class FoodDao { 
    private static instance: FoodDao;
    public static getInstance(): FoodDao { 
        if (!FoodDao.instance) { 
            FoodDao.instance = new FoodDao(); 
        } 
        return FoodDao.instance; 
    }
    private constructor() { }
    public async createFood(food: IFood): Promise<IFood> { 
        try { 
            const newFood = Food.create(food); 
            return newFood; 
        } catch (error: any) { 
            throw error; 
        } 
    }
    
    public async getFoodById(id: string): Promise<IFood> { 
        try { 
            const food = await Food.findById(id); 
            if (!food) throw new Error(ERRORS.FOOD_NOT_FOUND.key); 
            return food; 
        } catch (error: any) { 
            throw error; 
        } 
    }
}