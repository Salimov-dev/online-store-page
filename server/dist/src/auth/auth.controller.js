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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var AuthController_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const register_dto_1 = require("./dto/register.dto");
const login_dto_1 = require("./dto/login.dto");
const jwt_auth_guard_1 = require("./guards/jwt-auth.guard");
const token_service_1 = require("../token/token.service");
const cookies_decorator_1 = require("../../decorators/cookies.decorator");
const config_1 = require("@nestjs/config");
const cookie_options_util_1 = require("../utils/cookie-options.util");
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
let AuthController = AuthController_1 = class AuthController {
    constructor(authService, tokenService, configService) {
        this.authService = authService;
        this.tokenService = tokenService;
        this.configService = configService;
        this.logger = new common_1.Logger(AuthController_1.name);
    }
    async register(registerDto) {
        const createdUser = this.authService.register(registerDto);
        if (!createdUser) {
            const textError = 'Ошибка при создании пользователя';
            this.logger.error(textError);
            throw new common_1.BadRequestException(textError);
        }
        return createdUser;
    }
    async login(loginDto, res) {
        const tokens = await this.authService.login(loginDto);
        if (!tokens) {
            const textError = 'Ошибка при попытке входа';
            this.logger.error(textError);
            throw new common_1.BadRequestException(textError);
        }
        this.tokenService.setRefreshTokenToCookies(tokens, res);
    }
    async logout(refreshToken, res) {
        if (!refreshToken) {
            res.sendStatus(common_1.HttpStatus.OK);
            return;
        }
        this.authService.deleteRefreshToken(refreshToken);
        const refreshTokenName = this.configService.get('REFRESH_TOKEN');
        const today = new Date();
        res.cookie(refreshTokenName, '', (0, cookie_options_util_1.getCookieOptions)(today));
        res.sendStatus(common_1.HttpStatus.OK);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_dto_1.RegisterDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('logout'),
    __param(0, (0, cookies_decorator_1.Cookies)(REFRESH_TOKEN)),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
exports.AuthController = AuthController = AuthController_1 = __decorate([
    (0, jwt_auth_guard_1.Public)(),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        token_service_1.TokenService,
        config_1.ConfigService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map