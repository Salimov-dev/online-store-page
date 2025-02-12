import { RegisterDto } from './dto/register.dto';
import { UserService } from '@user/user.service';
import { LoginDto } from './dto/login.dto';
import { User } from '@prisma/client';
import { TokenService } from '@token/token.service';
import { ITokens } from '@token/interfaces/interfaces';
import { PrismaService } from '@prisma/prisma.service';
export declare class AuthService {
    private readonly userService;
    private readonly tokenService;
    private readonly prismaService;
    private readonly logger;
    constructor(userService: UserService, tokenService: TokenService, prismaService: PrismaService);
    register(registerDto: RegisterDto): Promise<User>;
    login(loginDto: LoginDto): Promise<ITokens>;
    deleteRefreshToken(refreshToken: string): Promise<void>;
}
