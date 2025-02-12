"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCookieOptions = void 0;
const getCookieOptions = (expires) => ({
    httpOnly: true,
    sameSite: 'lax',
    secure: false,
    path: '/',
    expires,
});
exports.getCookieOptions = getCookieOptions;
//# sourceMappingURL=cookie-options.util.js.map