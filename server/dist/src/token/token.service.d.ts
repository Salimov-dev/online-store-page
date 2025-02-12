import { UserService } from '@user/user.service';
import { User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '@prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { ITokens } from './interfaces/interfaces';
import { Response } from 'express';
export declare class TokenService {
    private readonly userService;
    private readonly jwtService;
    private readonly prismaService;
    private readonly configService;
    constructor(userService: UserService, jwtService: JwtService, prismaService: PrismaService, configService: ConfigService);
    refreshTokens(refreshToken: string): Promise<ITokens>;
    generateTokens: (user: User) => Promise<ITokens>;
    private getRefreshToken;
    setRefreshTokenToCookies(tokens: ITokens, res: Response): void;
}
