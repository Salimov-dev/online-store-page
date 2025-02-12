"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtModuleAsyncOptions = void 0;
const config_1 = require("@nestjs/config");
const jwtModuleOptions = (config) => ({
    secret: config.get('JWT_SECRET'),
    signOptions: {
        expiresIn: config.get('JWT_EXPIRES', '5m'),
    },
});
const jwtModuleAsyncOptions = () => ({
    inject: [config_1.ConfigService],
    useFactory: (config) => jwtModuleOptions(config),
});
exports.jwtModuleAsyncOptions = jwtModuleAsyncOptions;
//# sourceMappingURL=jwt-module.config.js.map