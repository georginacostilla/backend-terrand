import { ApiProperty } from '@nestjs/swagger';
import {
    IsEmail,
    IsNotEmpty,
    IsString,
    MaxLength,
    MinLength
} from 'class-validator';

export class CreateUserDto {
    @ApiProperty({ example: 'John', description: 'Nombre del usuario', required: true })
    @IsString({ message: 'El nombre debe ser una cadena de texto' })
    @IsNotEmpty({ message: 'El nombre no puede estar vacío' })
    @MaxLength(50, { message: 'El nombre no puede tener más de 50 caracteres' })
    @MinLength(3, { message: 'El nombre debe tener al menos 3 caracteres' })
    name: string;

    @ApiProperty({ example: 'Doe', description: 'Apellido del usuario', required: true })
    @IsString({ message: 'El apellido debe ser una cadena de texto' })
    @IsNotEmpty({ message: 'El apellido no puede estar vacío' })
    @MaxLength(50, { message: 'El apellido no puede tener más de 50 caracteres' })
    @MinLength(3, { message: 'El apellido debe tener al menos 3 caracteres' })
    lastName: string;

    @ApiProperty({ example: 'terrand@empresa.com', description: 'Correo electrónico del usuario', required: true })
    @IsEmail({}, { message: 'El correo electrónico no es válido' })
    @IsNotEmpty({ message: 'El correo electrónico no puede estar vacío' })
    @MaxLength(100, { message: 'El correo electrónico no puede tener más de 100 caracteres' })
    @MinLength(5, { message: 'El correo electrónico debe tener al menos 5 caracteres' })
    email: string;

    @ApiProperty({ example: '12345678', description: 'Contraseña del usuario', required: true })
    @IsString({ message: 'La contraseña debe ser una cadena de texto' })
    @IsNotEmpty({ message: 'La contraseña no puede estar vacía' })
    @MaxLength(10, { message: 'La contraseña no puede tener más de 10 caracteres' })
    @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
    password: string;
}
