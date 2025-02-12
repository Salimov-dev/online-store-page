"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const jwt_1 = require("@nestjs/jwt");
const prisma_service_1 = require("../prisma/prisma.service");
const uuid_1 = require("uuid");
const dayjs = require("dayjs");
const config_1 = require("@nestjs/config");
const cookie_options_util_1 = require("../utils/cookie-options.util");
let TokenService = class TokenService {
    constructor(userService, jwtService, prismaService, configService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.prismaService = prismaService;
        this.configService = configService;
        this.generateTokens = async (user) => {
            const accessToken = this.jwtService.sign({
                userId: user.id,
                userName: user.userName,
                email: user.email,
                role: user.role,
            });
            const refreshToken = await this.getRefreshToken(user.id);
            const tokens = { accessToken, refreshToken };
            return tokens;
        };
        this.getRefreshToken = async (userId) => {
            const currentDate = dayjs();
            const expirationUnit = this.configService.get('TOKEN_EXPIRATION_UNIT');
            const expirationValue = this.configService.get('TOKEN_EXPIRATION_VALUE');
            const expireDate = currentDate
                .add(expirationValue, expirationUnit)
                .toDate();
            return await this.prismaService.token.create({
                data: {
                    token: (0, uuid_1.v4)(),
                    expires: expireDate,
                    userId,
                },
            });
        };
    }
    async refreshTokens(refreshToken) {
        const token = await this.prismaService.token
            .delete({
            where: { token: refreshToken },
        })
            .catch(() => null);
        if (!token) {
            throw new common_1.UnauthorizedException('Refresh token not found');
        }
        const today = dayjs();
        const expDate = dayjs(token.expires);
        const isExpired = expDate.isBefore(today);
        if (!token.expires || isExpired) {
            throw new common_1.UnauthorizedException('Refresh token expired');
        }
        const user = await this.userService.findById(token.userId);
        return this.generateTokens(user);
    }
    setRefreshTokenToCookies(tokens, res) {
        if (!tokens) {
            throw new common_1.UnauthorizedException();
        }
        const { token, expires } = tokens.refreshToken;
        const cookieExpDate = dayjs(expires).toDate();
        const refreshToken = this.configService.get('REFRESH_TOKEN');
        res.cookie(refreshToken, token, (0, cookie_options_util_1.getCookieOptions)(cookieExpDate));
        res.status(common_1.HttpStatus.CREATED).json({ accessToken: tokens.accessToken });
    }
};
exports.TokenService = TokenService;
exports.TokenService = TokenService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService,
        prisma_service_1.PrismaService,
        config_1.ConfigService])
], TokenService);
//# sourceMappingURL=token.service.js.map