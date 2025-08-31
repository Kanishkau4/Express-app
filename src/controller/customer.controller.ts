import { Request, Response } from "express";
import { errorResponse, SuccessResponse } from "../common/responseHandler";
import { HttpStatus } from "../common/constants/httpStatus.enum";
import { ERRORS } from "../common/constants/errors.constants";

export class CustomerController {
    private static instance: CustomerController;

    public static getInstance(): CustomerController {
        if (!CustomerController.instance) {
            CustomerController.instance = new CustomerController();
        }
        return CustomerController.instance;
    }

    private constructor() {
    }

    getCustomer = async (req: Request, res: Response) => { 
        try { 
            const {id} = req.params;
            const customer = {
                id:1,
                name:"John Doe",
                email:"johndoe@example.com",
                phone:"+91 9876543210",
                address:"123, ABC Street, XYZ City, 123456"
            };
            SuccessResponse(HttpStatus.OK,res,customer);
        } catch (error) {
            errorResponse(HttpStatus.INTERNAL_SERVER_ERROR,res,ERRORS.BAD_REQUEST);
        }
    }   
}