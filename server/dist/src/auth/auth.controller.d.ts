import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { Response } from 'express';
import { TokenService } from '@token/token.service';
import { ConfigService } from '@nestjs/config';
export declare class AuthController {
    private readonly authService;
    private readonly tokenService;
    private readonly configService;
    private readonly logger;
    constructor(authService: AuthService, tokenService: TokenService, configService: ConfigService);
    register(registerDto: RegisterDto): Promise<{
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
    login(loginDto: LoginDto, res: Response): Promise<void>;
    logout(refreshToken: string, res: Response): Promise<void>;
}
