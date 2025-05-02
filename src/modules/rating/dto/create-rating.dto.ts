import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsInt,
    Min,
    Max,
    IsUUID,
} from 'class-validator';

export class CreateRatingDto {
    @ApiProperty({ example: 5, minimum: 1, maximum: 5, description: 'Valor de la calificación entre 1 y 5' })
    @IsNotEmpty({ message: 'El valor de la calificación no puede estar vacío' })
    @IsInt({ message: 'El valor debe ser un número entero' })
    @Min(1, { message: 'La calificación debe ser al menos 1' })
    @Max(5, { message: 'La calificación no puede ser mayor a 5' })
    value: number;

    @ApiProperty({ example: '550e8400-e29b-41d4-a716-554466440000', description: 'ID del usuario que califica la receta', required: true })
    @IsNotEmpty({ message: 'El ID del usuario no puede estar vacío' })
    @IsUUID('4', { message: 'El ID del usuario debe ser un UUID válido' })
    userId: string;

    @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000', description: 'ID de la receta que se califica', required: true })
    @IsNotEmpty({ message: 'El ID de la receta no puede estar vacío' })
    @IsUUID('4', { message: 'El ID de la receta debe ser un UUID válido' })
    recipeId: string;
}
