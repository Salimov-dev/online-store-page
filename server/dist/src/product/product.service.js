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
var ProductService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const prisma_service_1 = require("../prisma/prisma.service");
const faker_1 = require("@faker-js/faker");
let ProductService = ProductService_1 = class ProductService {
    constructor(prismaService) {
        this.prismaService = prismaService;
        this.logger = new common_1.Logger(ProductService_1.name);
    }
    async create(createProductDto, userId) {
        const existingProductByProductName = await this.findByName(createProductDto.name);
        if (existingProductByProductName) {
            const message = 'Товар с таким именем уже существует';
            this.logger.error(message);
            throw new common_1.ConflictException(message);
        }
        const newProduct = this.prismaService.product
            .create({
            data: { ...createProductDto, userId },
        })
            .catch((err) => {
            const message = 'Ошибка при создании нового товара';
            this.logger.error(message, err);
            throw new common_1.BadRequestException(message);
        });
        return newProduct;
    }
    findAll() {
        return this.prismaService.product.findMany();
    }
    async findByName(name) {
        return this.prismaService.product
            .findUnique({
            where: { name },
        })
            .then((foundedProduct) => {
            if (!foundedProduct) {
                return null;
            }
            return foundedProduct;
        })
            .catch((err) => {
            this.logger.error('Ошибка при поиске товара по имени', err);
            throw new common_1.NotFoundException('Товар по имени не найден');
        });
    }
    async findById(id) {
        return this.prismaService.product
            .findUnique({
            where: { id },
        })
            .then((foundedProduct) => {
            if (!foundedProduct) {
                return null;
            }
            return foundedProduct;
        })
            .catch((err) => {
            this.logger.error('Ошибка при поиске товара по ID', err);
            throw new common_1.NotFoundException('Товар по ID не найден');
        });
    }
    update(id, updateProductDto) {
        return this.prismaService.product.update({
            where: { id },
            data: updateProductDto,
        });
    }
    async remove(id) {
        return this.prismaService.product
            .delete({
            where: { id },
        })
            .then((deletedProduct) => {
            return { message: 'Товар успешно удален', deletedProduct };
        })
            .catch((err) => {
            throw new Error(`Ошибка при удалении товара ${err.message}`);
        });
    }
    async findWithFilters(params) {
        const { page, limit, sort, order, filters } = params;
        const whereFilters = {};
        if (filters.name) {
            whereFilters.name = {
                contains: String(filters.name),
                mode: 'insensitive',
            };
        }
        const products = await this.prismaService.product.findMany({
            where: whereFilters,
            orderBy: {
                [sort]: order,
            },
            skip: (page - 1) * limit,
            take: limit,
        });
        const total = await this.prismaService.product.count({
            where: whereFilters,
        });
        return { products, total };
    }
    async generateRandomProducts(userId, productQuantity) {
        const products = [];
        for (let i = 0; i < productQuantity; i++) {
            const product = {
                id: (0, uuid_1.v4)(),
                name: `${faker_1.faker.commerce.productAdjective()} ${faker_1.faker.commerce.product()}`,
                description: faker_1.faker.commerce.productDescription(),
                price: parseFloat(faker_1.faker.commerce.price({ min: 10000, max: 50000, dec: 2 })),
                discountPrice: parseFloat(faker_1.faker.commerce.price({ min: 5000, max: 20000, dec: 2 })),
                sku: (0, uuid_1.v4)().slice(0, 8),
                images: [],
                userId: userId,
                createdAt: new Date(),
                updatedAt: new Date(),
            };
            products.push(product);
        }
        return products;
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = ProductService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ProductService);
//# sourceMappingURL=product.service.js.map