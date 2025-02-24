"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenModule = void 0;
const common_1 = require("@nestjs/common");
const token_service_1 = require("./token.service");
const token_controller_1 = require("./token.controller");
const prisma_service_1 = require("../prisma/prisma.service");
const user_module_1 = require("../user/user.module");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
const jwt_module_config_1 = require("../../config/jwt-module.config");
let TokenModule = class TokenModule {
};
exports.TokenModule = TokenModule;
exports.TokenModule = TokenModule = __decorate([
    (0, common_1.Module)({
        controllers: [token_controller_1.TokenController],
        providers: [token_service_1.TokenService, prisma_service_1.PrismaService],
        exports: [token_service_1.TokenService],
        imports: [
            user_module_1.UserModule,
            config_1.ConfigModule,
            jwt_1.JwtModule.registerAsync((0, jwt_module_config_1.jwtModuleAsyncOptions)()),
        ],
    })
], TokenModule);
//# sourceMappingURL=token.module.js.map