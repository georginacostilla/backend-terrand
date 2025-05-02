import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { PrismaService } from '../prisma/prisma.service';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class RecipeService {
  constructor(
    private readonly prisma: PrismaService,
  ) { }

  async create(newReciper: CreateRecipeDto) {
    const { title, description, ingredients, imageUrl, userId } = newReciper;

    try {
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
      throw new Error('Error al crear la receta' + error.message);
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
}
