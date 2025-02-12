import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PrismaService } from '@prisma/prisma.service';
import { Prisma, Product } from '@prisma/client';
import { IProductFindWithFilters } from './interfaces/interfaces';
export declare class ProductService {
    private readonly prismaService;
    private readonly logger;
    constructor(prismaService: PrismaService);
    create(createProductDto: CreateProductDto, userId: string): Promise<{
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
    findAll(): Prisma.PrismaPromise<{
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
    update(id: string, updateProductDto: UpdateProductDto): Prisma.Prisma__ProductClient<{
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
    }, never, import("@prisma/client/runtime/library").DefaultArgs, Prisma.PrismaClientOptions>;
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
    findWithFilters(params: IProductFindWithFilters): Promise<{
        products: Product[];
        total: number;
    }>;
    generateRandomProducts(userId: string, productQuantity: number): Promise<Prisma.ProductCreateManyInput[]>;
}
