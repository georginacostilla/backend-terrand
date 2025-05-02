import { ApiProperty } from '@nestjs/swagger';
import {
    IsNumber,
    IsNotEmpty,
    Max,
    Min,
    IsInt
} from 'class-validator';

export class CreateRatingDto {
    @ApiProperty({ example: 5, minimum: 1, maximum: 5, description: 'Valor de la calificación entre 1 y 5' })
    @IsNumber({}, { message: 'El valor debe ser un número' })
    @IsNotEmpty({ message: 'El valor de la calificación no puede estar vacío' })
    @IsInt({ message: 'El valor debe ser un número entero' })
    @Min(1, { message: 'La calificación debe ser al menos 1' })
    @Max(5, { message: 'La calificación no puede ser mayor a 5' })
    value: number;
}
