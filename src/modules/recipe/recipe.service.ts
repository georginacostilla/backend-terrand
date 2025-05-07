import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { PrismaService } from '../prisma/prisma.service';
import { v4 as uuidv4 } from 'uuid';
import { ConflictException } from '@nestjs/common/exceptions/conflict.exception';
import { InternalServerErrorException } from '@nestjs/common/exceptions/internal-server-error.exception';

@Injectable()
export class RecipeService {
  constructor(
    private readonly prisma: PrismaService,
  ) { }

  async create(newReciper: CreateRecipeDto) {
    const { title, description, ingredients, imageUrl, userId } = newReciper;

    try {
      const existingRecipe = await this.prisma.recipe.findFirst({
        where: {
          title,
          userId,
        },
      });

      if (existingRecipe) {
        throw new ConflictException(
          `Ya existe una receta con este título para el usuario.`,
        );
      }

      const recipe = await this.prisma.recipe.create({
        data: {
          title,
          description,
          ingredients,
          imageUrl,
          userId,
          publicId: uuidv4(),
        },
      });
      return recipe;
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      }

      throw new InternalServerErrorException('Hubo un problema al crear la receta. Por favor, inténtalo de nuevo más tarde.');
    }
  }

  async findAll() {
    return await this.prisma.recipe.findMany();
  }

  async findOne(id: string) {
    const recipe = await this.prisma.recipe.findUnique({
      where: { id },
    });

    if (!recipe) {
      throw new Error(`Receta con ID ${id} no encontrada`);
    }

    return recipe;
  }

  async findRecipesByUserId(userId: string) {
    const recipes = await this.prisma.recipe.findMany({
      where: { userId },
    });

    if (!recipes || recipes.length === 0) {
      throw new Error(`No se encontraron recetas para el usuario con ID ${userId}`);
    }

    return recipes;
  }

  async update(id: string, updateRecipeDto: UpdateRecipeDto) {
    const existingRecipe = await this.prisma.recipe.findUnique({
      where: { id },
    });

    if (!existingRecipe) {
      throw new Error(`Receta con ID ${id} no encontrada`);
    }

    const updatedRecipe = await this.prisma.recipe.update({
      where: { id },
      data: updateRecipeDto,
    });

    return updatedRecipe;
  }

  // Método para encontrar receta por publicId
  async findByPublicId(publicId: string) {
    const recipe = await this.prisma.recipe.findUnique({
      where: { publicId },
    });
    return recipe;
  }
}
