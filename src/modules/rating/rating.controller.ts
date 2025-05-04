import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { RatingService } from './rating.service';
import { CreateRatingDto } from './dto/create-rating.dto';
import { ApiCustomOperation } from 'src/common/decorator/swagger.decorator';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';

@ApiTags('Calificaciones')
@UseGuards(JwtAuthGuard)
@Controller('calificaciones')
export class RatingController {
  constructor(private readonly ratingService: RatingService) { }

  @ApiCustomOperation({
    summary: 'Crear calificación',
    bodyType: CreateRatingDto,
    responseStatus: 201,
    responseDescription: 'Calificación creada correctamente',
  })
  @Post()
  create(@Body() createRatingDto: CreateRatingDto) {
    return this.ratingService.create(createRatingDto);
  }

  @ApiCustomOperation({
    summary: 'Obtener la calificación de un usuario para una receta',
    responseStatus: 200,
    responseDescription: 'Calificación encontrada correctamente',
  })
  @Get('usuario/:userId/receta/:recipeId')
  findByUserAndRecipe(
    @Param('userId') userId: string,
    @Param('recipeId') recipeId: string,
  ) {
    return this.ratingService.findByUserAndRecipe(userId, recipeId);
  }
}
