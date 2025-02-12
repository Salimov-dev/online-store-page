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
var UserService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const bcryptjs_1 = require("bcryptjs");
const prisma_service_1 = require("../prisma/prisma.service");
let UserService = UserService_1 = class UserService {
    constructor(prismaService) {
        this.prismaService = prismaService;
        this.logger = new common_1.Logger(UserService_1.name);
    }
    async create(createUserDto) {
        const hashedPassword = this.hashPassword(createUserDto.password);
        const userData = { ...createUserDto, password: hashedPassword };
        const existingUserByUsername = await this.findByUsername(createUserDto.userName);
        if (existingUserByUsername) {
            const message = 'Пользователь с таким псевдонимом уже существует';
            this.logger.error(message);
            throw new common_1.ConflictException(message);
        }
        const existingUserByEmail = await this.findByEmail(createUserDto.email);
        if (existingUserByEmail) {
            const message = 'Пользователь с таким email уже существует';
            this.logger.error(message);
            throw new common_1.ConflictException(message);
        }
        const existingUserByPhone = await this.findByPhone(createUserDto.phone);
        if (existingUserByPhone) {
            const message = 'Пользователь с таким телефоном уже существует';
            this.logger.error(message);
            throw new common_1.ConflictException(message);
        }
        const newUser = await this.prismaService.user
            .create({
            data: userData,
        })
            .catch((err) => {
            const message = 'Ошибка при создании нового пользователя';
            this.logger.error(message, err);
            throw new common_1.BadRequestException(message);
        });
        delete newUser.password;
        return newUser;
    }
    findAll() {
        return this.prismaService.user.findMany();
    }
    async findById(id) {
        return this.prismaService.user
            .findUnique({
            where: { id },
        })
            .then((foundedUser) => {
            if (!foundedUser) {
                return null;
            }
            return foundedUser;
        })
            .catch((err) => {
            this.logger.error('Ошибка при поиске пользователя по ID', err);
            throw new common_1.NotFoundException('Пользователь по ID не найден');
        });
    }
    async findByUsername(userName) {
        return this.prismaService.user
            .findUnique({
            where: { userName },
        })
            .then((foundedUser) => {
            if (!foundedUser) {
                return null;
            }
            return foundedUser;
        })
            .catch((err) => {
            this.logger.error('Ошибка при поиске пользователя по псевдониму', err);
            throw new common_1.NotFoundException('Пользователь по псевдониму не найден');
        });
    }
    async findByEmail(email) {
        return this.prismaService.user
            .findUnique({
            where: { email },
        })
            .then((foundedUser) => {
            if (!foundedUser) {
                return null;
            }
            return foundedUser;
        })
            .catch((err) => {
            this.logger.error('Ошибка при поиске пользователя по почте', err);
            throw new common_1.NotFoundException('Пользователь по email не найден');
        });
    }
    async findByPhone(phone) {
        return this.prismaService.user
            .findUnique({
            where: { phone },
        })
            .then((foundedUser) => {
            if (!foundedUser) {
                return null;
            }
            return foundedUser;
        })
            .catch((err) => {
            this.logger.error('Ошибка при поиске пользователя по номеру телефона', err);
            throw new common_1.NotFoundException('Пользователь по номеру телефона не найден');
        });
    }
    async update(id, updateUserDto) {
        return this.prismaService.user.update({
            where: { id },
            data: updateUserDto,
        });
    }
    async remove(id) {
        return this.prismaService.user
            .delete({
            where: { id },
        })
            .then((deletedUser) => {
            return { message: 'Пользователь успешно удален', deletedUser };
        })
            .catch((err) => {
            throw new Error(`Ошибка при удалении пользователя ${err.message}`);
        });
    }
    hashPassword(password) {
        return (0, bcryptjs_1.hashSync)(password, (0, bcryptjs_1.genSaltSync)(10));
    }
};
exports.UserService = UserService;
exports.UserService = UserService = UserService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UserService);
//# sourceMappingURL=user.service.js.map