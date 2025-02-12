"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountPriceValidator = void 0;
class DiscountPriceValidator {
    validate(discountPrice, validationArguments) {
        const { price } = validationArguments.object;
        return discountPrice < price;
    }
    defaultMessage() {
        return 'Стоимость со скидкой не может быть выше начальной стоимости';
    }
}
exports.DiscountPriceValidator = DiscountPriceValidator;
//# sourceMappingURL=discount-price-validator.js.map