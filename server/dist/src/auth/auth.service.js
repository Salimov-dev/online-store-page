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
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("../user/user.service");
const bcryptjs_1 = require("bcryptjs");
const token_service_1 = require("../token/token.service");
const prisma_service_1 = require("../prisma/prisma.service");
let AuthService = AuthService_1 = class AuthService {
    constructor(userService, tokenService, prismaService) {
        this.userService = userService;
        this.tokenService = tokenService;
        this.prismaService = prismaService;
        this.logger = new common_1.Logger(AuthService_1.name);
    }
    register(registerDto) {
        const createUserDto = registerDto;
        delete createUserDto.repeatPassword;
        const createdUser = this.userService.create(createUserDto);
        return createdUser;
    }
    async login(loginDto) {
        const { userName, password } = loginDto;
        const user = await this.userService
            .findByUsername(userName)
            .catch((err) => {
            this.logger.error(err);
            return null;
        });
        const isPasswordMatch = user && (0, bcryptjs_1.compareSync)(password, user?.password);
        if (!user || !isPasswordMatch) {
            const textError = 'Неверные логин или пароль';
            this.logger.error(textError);
            throw new common_1.UnauthorizedException(textError);
        }
        return this.tokenService.generateTokens(user);
    }
    async deleteRefreshToken(refreshToken) {
        await this.prismaService.token.delete({ where: { token: refreshToken } });
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        token_service_1.TokenService,
        prisma_service_1.PrismaService])
], AuthService);
//# sourceMappingURL=auth.service.js.map