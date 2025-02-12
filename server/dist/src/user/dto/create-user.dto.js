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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserDto = void 0;
const class_validator_1 = require("class-validator");
class CreateUserDto {
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, class_validator_1.IsEmail)({}, {
        message: 'Введите email корректно',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsStrongPassword)({}, {
        message: 'Пароль должен содержать цифры, заглавные и строчные буквы, а также специальные символы',
    }),
    (0, class_validator_1.MinLength)(8, { message: 'Пароль должен содержать минимум 8 символов' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Псевдоним должен быть строкой' }),
    (0, class_validator_1.Length)(2, 20, {
        message: 'Длина псевдонима должна быть от 2 до 20 символов',
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "userName", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Телефон должен быть строкой' }),
    (0, class_validator_1.Length)(6, 20, { message: 'Длина телефона должна быть от 6 до 20 символов' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Имя должно быть строкой' }),
    (0, class_validator_1.Length)(2, 20, { message: 'Длина имени должна быть от 2 до 20 символов' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Фамилия должно быть строкой' }),
    (0, class_validator_1.Length)(2, 20, { message: 'Длина фамилии должна быть от 2 до 20 символов' }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "lastName", void 0);
//# sourceMappingURL=create-user.dto.js.map