import { ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
export declare class MatchPasswordsConstraint implements ValidatorConstraintInterface {
    validate(repeatPassword: string, args: ValidationArguments): boolean;
    defaultMessage(): string;
}
