"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cors_options_config_1 = require("../config/cors-options.config");
const common_1 = require("@nestjs/common");
const cookieParser = require("cookie-parser");
const PORT = process.env.PORT ?? 3000;
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors(cors_options_config_1.corsOptions);
    app.setGlobalPrefix('api');
    app.use(cookieParser());
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(PORT);
    common_1.Logger.log(`Server started on port = ${PORT}`);
}
bootstrap();
//# sourceMappingURL=main.js.map