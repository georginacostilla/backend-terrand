import { ConflictException, Injectable } from '@nestjs/common';
import { CreateRatingDto } from './dto/create-rating.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RatingService {
  constructor(
    private readonly prisma: PrismaService,
  ) { }

  async create(newRating: CreateRatingDto) {
    const { value, userId, recipeId } = newRating;

    try {
      const existingRating = await this.prisma.rating.findFirst({
        where: { userId, recipeId },
      });

      if (existingRating) {
        throw new ConflictException('Ya has calificado esta receta');
      }

      return await this.prisma.rating.create({
        data: { value, userId, recipeId },
      });

    } catch (error) {
      throw new Error('Error al crear la calificación: ' + error.message);
    }
  }

  // Obtiene la calificación de un usuario para una receta
  async findByUserAndRecipe(userId: string, recipeId: string) {
    return this.prisma.rating.findFirst({
      where: {
        userId,
        recipeId,
      },
    });
  }
}
