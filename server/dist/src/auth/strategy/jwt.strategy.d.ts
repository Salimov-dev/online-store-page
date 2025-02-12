import { Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { JWTPayload } from '@auth/interfaces/interfaces';
import { UserService } from '@user/user.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly configService;
    private readonly userService;
    private readonly logger;
    constructor(configService: ConfigService, userService: UserService);
    validate(jwtPayload: JWTPayload): Promise<import("@auth/interfaces/interfaces").IAccessToken>;
}
export {};
