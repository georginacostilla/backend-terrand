import { ApiProperty } from '@nestjs/swagger';
import {
    IsEmail,
    IsNotEmpty,
    IsString,
    MaxLength,
    MinLength
} from 'class-validator';


export class CreateUserDto {
    @ApiProperty({ example: 'John' })
    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    @MinLength(3)
    name: string;

    @ApiProperty({ example: 'Doe' })
    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    @MinLength(3)
    lastName: string;

    @ApiProperty({ example: 'terrand@empresa.com' })
    @IsEmail()
    @IsNotEmpty()
    @MaxLength(100)
    @MinLength(5)
    email: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(10)
    @MinLength(6)
    password: string;
}
