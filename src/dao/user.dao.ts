import { ERRORS } from "../common/constants/errors.constants";
import { IUser } from "../interface/models/user.interface";
import { User } from "../models/user.model";

export class UserDao {
    private static instance: UserDao;
    public static getInstance(): UserDao {
        if (!UserDao.instance) {
            UserDao.instance = new UserDao();
        }
        return UserDao.instance;
    }

    private constructor() { }

    public async createUser(user: IUser): Promise<IUser> {
        try {
            const newUser = User.create(user);
            return newUser;
        } catch (error: any) {
            throw error;
        }
    }

    public async getUserByEmail(email: string): Promise<IUser> {
        try {
            const user = await User.findOne({ email });
            if (!user) throw new Error(ERRORS.USER_NOT_FOUND.key);
            return user;
        } catch (error: any) {
            throw error;
        }
    }
}