"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadService = void 0;
const common_1 = require("@nestjs/common");
const multer_1 = require("multer");
const path_1 = require("path");
const fs_1 = require("fs");
let UploadService = class UploadService {
    getMulterConfig() {
        return {
            storage: (0, multer_1.diskStorage)({
                destination: './uploads',
                filename: (req, file, callback) => {
                    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                    const ext = (0, path_1.extname)(file.originalname);
                    callback(null, `${uniqueSuffix}${ext}`);
                },
            }),
            fileFilter: (req, file, callback) => {
                if (!file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
                    return callback(new Error('Только изображения (jpg, jpeg, png, gif)!'), false);
                }
                callback(null, true);
            },
            limits: { fileSize: 5 * 1024 * 1024 },
        };
    }
    async deleteFile(fileUrl) {
        return new Promise((resolve, reject) => {
            (0, fs_1.unlink)(fileUrl, (err) => {
                if (err) {
                    reject(new Error('Ошибка при удалении файла.'));
                }
                else {
                    resolve({ fileUrl, message: 'Файл удален успешно.' });
                }
            });
        });
    }
};
exports.UploadService = UploadService;
exports.UploadService = UploadService = __decorate([
    (0, common_1.Injectable)()
], UploadService);
//# sourceMappingURL=upload.service.js.map