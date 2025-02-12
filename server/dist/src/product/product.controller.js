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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const create_product_dto_1 = require("./dto/create-product.dto");
const update_product_dto_1 = require("./dto/update-product.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const prisma_service_1 = require("../prisma/prisma.service");
let ProductController = class ProductController {
    constructor(productService, prismaService) {
        this.productService = productService;
        this.prismaService = prismaService;
    }
    create(createProductDto, req) {
        const userId = req.user['userId'];
        return this.productService.create(createProductDto, userId);
    }
    findAll() {
        return this.productService.findAll();
    }
    findByName(name) {
        return this.productService.findByName(name);
    }
    findById(id) {
        return this.productService.findById(id);
    }
    update(id, updateProductDto) {
        return this.productService.update(id, updateProductDto);
    }
    remove(id) {
        return this.productService.remove(id);
    }
    async findWithFilters(page = '1', limit = '8', sort = 'createdAt', order = 'desc', filters) {
        const pageNumber = parseInt(page, 10);
        const limitNumber = parseInt(limit, 10);
        const parsedFilters = filters ? JSON.parse(filters) : {};
        return await this.productService.findWithFilters({
            page: pageNumber,
            limit: limitNumber,
            sort,
            order: order,
            filters: parsedFilters,
        });
    }
    async generateRandomProducts(req) {
        const userId = req.user['userId'];
        const { limit } = req.body;
        const productQuantity = 50;
        const products = await this.productService.generateRandomProducts(userId, productQuantity);
        const successesProductQuantity = await this.prismaService.product.createMany({
            data: products,
            skipDuplicates: true,
        });
        const newTotalQuantity = await this.prismaService.product.count({
            where: { userId: userId },
        });
        const userProducts = await this.prismaService.product.findMany({
            where: { userId: userId },
            orderBy: { createdAt: 'desc' },
            take: productQuantity,
        });
        const startIndex = userProducts.length - successesProductQuantity.count;
        const createdProducts = userProducts.slice(startIndex, limit);
        return {
            newTotalQuantity,
            count: successesProductQuantity.count,
            createdProducts,
        };
    }
};
exports.ProductController = ProductController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto, Object]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "create", null);
__decorate([
    (0, jwt_auth_guard_1.Public)(),
    (0, common_1.Get)('find-all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('find-by-name/:name'),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "findByName", null);
__decorate([
    (0, common_1.Get)('find-by-id/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "findById", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_product_dto_1.UpdateProductDto]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProductController.prototype, "remove", null);
__decorate([
    (0, jwt_auth_guard_1.Public)(),
    (0, common_1.Get)('find-with-filters'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('sort')),
    __param(3, (0, common_1.Query)('order')),
    __param(4, (0, common_1.Query)('filters')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object, String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "findWithFilters", null);
__decorate([
    (0, common_1.Post)('generate-random-products'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "generateRandomProducts", null);
exports.ProductController = ProductController = __decorate([
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        prisma_service_1.PrismaService])
], ProductController);
//# sourceMappingURL=product.controller.js.map