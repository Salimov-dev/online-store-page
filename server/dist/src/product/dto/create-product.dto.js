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
exports.CreateProductDto = void 0;
const discount_price_validator_1 = require("../../auth/validators/discount-price-validator");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreateProductDto {
}
exports.CreateProductDto = CreateProductDto;
__decorate([
    (0, class_validator_1.IsString)({ message: 'Имя должно быть строкой' }),
    (0, class_validator_1.Length)(2, 25, { message: 'Длина имени должна быть от 2 до 25 символов' }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Описание должно быть строкой' }),
    (0, class_validator_1.Length)(10, 1000, {
        message: 'Длина описания должна быть от 10 до 1000 символов',
    }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "description", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)({}, { message: 'Стоимость должна быть числом' }),
    (0, class_validator_1.Min)(0.01, { message: 'Стоимость должна быть больше 0' }),
    (0, class_validator_1.Max)(1000000, { message: 'Стоимость не должна превышать 1 000 000' }),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "price", void 0);
__decorate([
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)({}, { message: 'Стоимость со скидкой должна быть числом' }),
    (0, class_validator_1.Min)(0.01, { message: 'Стоимость со скидкой должна быть больше 0' }),
    (0, class_validator_1.Max)(1000000, {
        message: 'Стоимость со скидкой не должна превышать 1 000 000',
    }),
    (0, class_validator_1.Validate)(discount_price_validator_1.DiscountPriceValidator),
    __metadata("design:type", Number)
], CreateProductDto.prototype, "discountPrice", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Артикул должно быть строкой' }),
    (0, class_validator_1.Length)(6, 20, {
        message: 'Длина артикула должна быть от 6 до 20 символов',
    }),
    __metadata("design:type", String)
], CreateProductDto.prototype, "sku", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateProductDto.prototype, "images", void 0);
//# sourceMappingURL=create-product.dto.js.map