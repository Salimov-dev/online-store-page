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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenController = void 0;
const common_1 = require("@nestjs/common");
const cookies_decorator_1 = require("../../decorators/cookies.decorator");
const token_service_1 = require("./token.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
let TokenController = class TokenController {
    constructor(tokenService) {
        this.tokenService = tokenService;
    }
    async refreshTokens(refreshToken, res) {
        if (!refreshToken) {
            throw new common_1.UnauthorizedException();
        }
        const tokens = await this.tokenService.refreshTokens(refreshToken);
        if (!tokens) {
            throw new common_1.UnauthorizedException();
        }
        this.tokenService.setRefreshTokenToCookies(tokens, res);
    }
};
exports.TokenController = TokenController;
__decorate([
    (0, common_1.Get)('refresh-tokens'),
    __param(0, (0, cookies_decorator_1.Cookies)(REFRESH_TOKEN)),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TokenController.prototype, "refreshTokens", null);
exports.TokenController = TokenController = __decorate([
    (0, jwt_auth_guard_1.Public)(),
    (0, common_1.Controller)('token'),
    __metadata("design:paramtypes", [token_service_1.TokenService])
], TokenController);
//# sourceMappingURL=token.controller.js.map