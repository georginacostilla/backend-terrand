import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginAuthDto {
    @IsEmail({}, { message: 'El correo electrónico no es válido' })
    @IsNotEmpty({ message: 'El campo email es obligatorio' })
    @ApiProperty({
        example: 'usuario@ejemplo.com',
        description: 'Email del usuario',
        required: true,
        type: String,
    })
    email: string;

    @IsString({ message: 'El campo password debe ser una cadena de texto' })
    @IsNotEmpty({ message: 'El campo password es obligatorio' })
    @ApiProperty({
        example: 'contraseña123',
        description: 'Contraseña del usuario',
        required: true,
        type: String,
    })
    password: string;
}
