import { Response } from 'express';
import { TokenService } from './token.service';
export declare class TokenController {
    private readonly tokenService;
    constructor(tokenService: TokenService);
    refreshTokens(refreshToken: string, res: Response): Promise<void>;
}
