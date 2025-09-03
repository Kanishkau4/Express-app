import { Request, Response } from "express";
import { ERRORS } from "../common/constants/errors.constants";
import { HttpStatus } from "../common/constants/httpStatus.enum";
import { errorResponse, SuccessResponse } from "../common/responseHandler";
import { UserService } from "../service/user.service";
import { CreateUserDto } from "../dto/createUser.dto";

export class UserController { 
    private static instance: UserController;
    private userService: UserService;
    public static getInstance(): UserController {
        if (!UserController.instance) {
            UserController.instance = new UserController();
        }
        return UserController.instance;
    }
    private constructor() { 
        this.userService = UserService.getInstance();
    }

    createUser = async (req: Request, res: Response) => { 
        try { 
            const user = req.body as CreateUserDto;
            const newUseruser = await this.userService.createUser(user);
            return SuccessResponse(HttpStatus.OK,res,user);
        } catch (error) {
            return errorResponse(HttpStatus.INTERNAL_SERVER_ERROR,res,ERRORS.BAD_REQUEST);
        }
    }
    getUserByEmail = async (req: Request, res: Response) => { 
        try { 
            const {email} = req.params;
            const user = await this.userService.getUserByEmail(email);
            return SuccessResponse(HttpStatus.OK,res,user);
        } catch (error: any) {
            if(error.message === ERRORS.USER_NOT_FOUND.key) {
                return errorResponse(HttpStatus.NOT_FOUND,res,ERRORS.USER_NOT_FOUND);
            }
            return errorResponse(HttpStatus.INTERNAL_SERVER_ERROR,res,ERRORS.BAD_REQUEST);
        }
    }
}
