import { ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
export declare class DiscountPriceValidator implements ValidatorConstraintInterface {
    validate(discountPrice: number, validationArguments?: ValidationArguments): Promise<boolean> | boolean;
    defaultMessage(): string;
}
