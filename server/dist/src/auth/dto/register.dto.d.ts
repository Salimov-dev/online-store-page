import { CreateUserDto } from '@user/dto/create-user.dto';
export declare class RegisterDto extends CreateUserDto {
    repeatPassword: string;
}
