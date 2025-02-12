import { Request } from 'express';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '@prisma/prisma.service';
export declare class ProductController {
    private readonly productService;
    private readonly prismaService;
    constructor(productService: ProductService, prismaService: PrismaService);
    create(createProductDto: CreateProductDto, req: Request): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        userId: string;
        price: number;
        description: string;
        discountPrice: number;
        sku: string;
        images: string[];
    }>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        userId: string;
        price: number;
        description: string;
        discountPrice: number;
        sku: string;
        images: string[];
    }[]>;
    findByName(name: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        userId: string;
        price: number;
        description: string;
        discountPrice: number;
        sku: string;
        images: string[];
    }>;
    findById(id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        userId: string;
        price: number;
        description: string;
        discountPrice: number;
        sku: string;
        images: string[];
    }>;
    update(id: string, updateProductDto: UpdateProductDto): import(".prisma/client").Prisma.Prisma__ProductClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        name: string;
        userId: string;
        price: number;
        description: string;
        discountPrice: number;
        sku: string;
        images: string[];
    }, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): Promise<{
        message: string;
        deletedProduct: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            userId: string;
            price: number;
            description: string;
            discountPrice: number;
            sku: string;
            images: string[];
        };
    }>;
    findWithFilters(page: string, limit: string, sort: string, order: string, filters: string): Promise<{
        products: import(".prisma/client").Product[];
        total: number;
    }>;
    generateRandomProducts(req: Request): Promise<{
        newTotalQuantity: number;
        count: number;
        createdProducts: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            name: string;
            userId: string;
            price: number;
            description: string;
            discountPrice: number;
            sku: string;
            images: string[];
        }[];
    }>;
}
