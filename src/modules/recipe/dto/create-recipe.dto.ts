import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsOptional,
    IsString,
    MaxLength,
    MinLength,
    Length,
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

    @ApiProperty({ example: '550e8400-e29b-41d4-a716-446655440000', description: 'ID del usuario que creó la receta', required: true })
    @IsString({ message: 'El ID del usuario debe ser una cadena de texto' })
    @IsNotEmpty({ message: 'El ID del usuario no puede estar vacío' })
    @MaxLength(100, { message: 'El ID del usuario no puede exceder los 100 caracteres' })
    userId: string;

    @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'ID público de la receta', required: true })
    @IsString({ message: 'El ID público de la receta debe ser una cadena de texto' })
    @IsNotEmpty({ message: 'El ID público de la receta no puede estar vacío' })
    @Length(36, 36, { message: 'El ID público de la receta debe tener exactamente 36 caracteres' })
    publicId: string;
}
