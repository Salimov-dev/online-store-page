import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<{
        email: string;
        password: string;
        userName: string;
        phone: string;
        firstName: string;
        lastName: string;
        id: string;
        role: import(".prisma/client").$Enums.Role[];
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        email: string;
        password: string;
        userName: string;
        phone: string;
        firstName: string;
        lastName: string;
        id: string;
        role: import(".prisma/client").$Enums.Role[];
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findById(id: string): Promise<{
        email: string;
        password: string;
        userName: string;
        phone: string;
        firstName: string;
        lastName: string;
        id: string;
        role: import(".prisma/client").$Enums.Role[];
        createdAt: Date;
        updatedAt: Date;
    }>;
    findByUsername(userName: string): Promise<{
        email: string;
        password: string;
        userName: string;
        phone: string;
        firstName: string;
        lastName: string;
        id: string;
        role: import(".prisma/client").$Enums.Role[];
        createdAt: Date;
        updatedAt: Date;
    }>;
    findByEmail(email: string): Promise<{
        email: string;
        password: string;
        userName: string;
        phone: string;
        firstName: string;
        lastName: string;
        id: string;
        role: import(".prisma/client").$Enums.Role[];
        createdAt: Date;
        updatedAt: Date;
    }>;
    findByPhone(phone: string): Promise<{
        email: string;
        password: string;
        userName: string;
        phone: string;
        firstName: string;
        lastName: string;
        id: string;
        role: import(".prisma/client").$Enums.Role[];
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<{
        email: string;
        password: string;
        userName: string;
        phone: string;
        firstName: string;
        lastName: string;
        id: string;
        role: import(".prisma/client").$Enums.Role[];
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        message: string;
        deletedUser: {
            email: string;
            password: string;
            userName: string;
            phone: string;
            firstName: string;
            lastName: string;
            id: string;
            role: import(".prisma/client").$Enums.Role[];
            createdAt: Date;
            updatedAt: Date;
        };
    }>;
}
