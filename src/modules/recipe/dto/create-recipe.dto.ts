import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsOptional,
    IsString,
    MaxLength,
    MinLength
} from 'class-validator';

export class CreateRecipeDto {
    @ApiProperty({ example: 'Pasta', description: 'Nombre de la receta', required: true })
    @IsString({ message: 'El nombre de la receta debe ser una cadena de texto' })
    @IsNotEmpty({ message: 'El nombre de la receta no puede estar vacío' })
    @MaxLength(500, { message: 'El nombre de la receta no puede exceder los 500 caracteres' })
    @MinLength(1, { message: 'El nombre de la receta debe tener al menos 1 caracter' })
    title: string;

    @ApiProperty({ example: 'Deliciosa pasta con puré de tomates', description: 'Descripción de la receta', required: true })
    @IsString({ message: 'La descripción de la receta debe ser una cadena de texto' })
    @IsNotEmpty({ message: 'La descripción de la receta no puede estar vacía' })
    @MaxLength(1000, { message: 'La descripción de la receta no puede exceder los 1000 caracteres' })
    @MinLength(1, { message: 'La descripción de la receta debe tener al menos 1 caracter' })
    description: string;

    @ApiProperty({ example: 'Pasta, salsa de tomate y queso rallado', description: 'Ingredientes de la receta', required: true })
    @IsString({ message: 'Los ingredientes deben ser una cadena de texto' })
    @IsNotEmpty({ message: 'Los ingredientes no pueden estar vacíos' })
    @MaxLength(1000, { message: 'Los ingredientes no pueden exceder los 1000 caracteres' })
    @MinLength(1, { message: 'Los ingredientes deben tener al menos 1 caracter' })
    ingredients: string;

    @ApiProperty({ example: 'https://example.com/profile.jpg', description: 'URL de la imagen de la receta', required: false })
    @IsString({ message: 'La URL de la imagen debe ser una cadena de texto' })
    @IsOptional({ message: 'La URL de la imagen es opcional' })
    imageUrl?: string;
}
