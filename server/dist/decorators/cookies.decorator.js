"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cookies = void 0;
const common_1 = require("@nestjs/common");
exports.Cookies = (0, common_1.createParamDecorator)((key, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    const cookies = request.cookies;
    return key ? cookies?.[key] : cookies;
});
//# sourceMappingURL=cookies.decorator.js.map