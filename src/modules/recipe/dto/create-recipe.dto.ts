import { ApiProperty } from '@nestjs/swagger';
import {
    IsNotEmpty,
    IsOptional,
    IsString,
    MaxLength,
    MinLength
} from 'class-validator';

export class CreateRecipeDto {
    @ApiProperty({ example: 'Pasta' })
    @IsString()
    @IsNotEmpty()
    @MaxLength(500)
    @MinLength(1)
    title: string;

    @ApiProperty({ example: 'Deliciosa pasta con puré de tomates' })
    @IsString()
    @IsNotEmpty()
    @MaxLength(1000)
    @MinLength(1)
    description: string;

    @ApiProperty({ example: 'Pasta, salsa de tomate y queso rallado' })
    @IsString()
    @IsNotEmpty()
    @MaxLength(1000)
    @MinLength(1)
    ingredients: string;

    @ApiProperty({ example: 'https://example.com/profile.jpg' })
    @IsString()
    @IsOptional()
    imageUrl?: string;
}
