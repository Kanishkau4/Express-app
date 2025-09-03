import { Router } from "express";
import { UserController } from "../controller/user.controller";
import { validateRequestBody } from "../middleware/validation.middleware";
import { createUserDtoSchema } from "../dto/createUser.dto";

export class UserRoute {
    private static instance: UserRoute;
    public router: Router;
    public userController: UserController;
    public static getInstance(): UserRoute {
        if (!UserRoute.instance) {
            UserRoute.instance = new UserRoute();
        }
        return UserRoute.instance;
    }

    private constructor() {
        this.router = Router();
        this.userController = UserController.getInstance();
        this.setupRoutes();
    }

    private setupRoutes(): void {
        this.router.post("/", validateRequestBody(createUserDtoSchema), this.userController.createUser);
        this.router.get("/:email", this.userController.getUserByEmail);
    }
}