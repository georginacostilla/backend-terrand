import { ApiProperty } from '@nestjs/swagger';
import {
    IsNumber,
    IsNotEmpty,
    Max,
    Min
} from 'class-validator';

export class CreateRatingDto {
    @ApiProperty({ example: 5, minimum: 1, maximum: 5 })
    @IsNumber()
    @IsNotEmpty()
    @Min(1)
    @Max(5)
    value: number;
}
