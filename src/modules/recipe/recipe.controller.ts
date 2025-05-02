import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { RecipeService } from './recipe.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { ApiCustomOperation } from 'src/common/decorator/swagger.decorator';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Recetas')
@Controller('recetas')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) { }

  @ApiCustomOperation({
    summary: 'Crear receta',
    bodyType: CreateRecipeDto,
    responseStatus: 201,
    responseDescription: 'Receta creada correctamente',
  })
  @Post()
  create(@Body() createRecipeDto: CreateRecipeDto) {
    return this.recipeService.create(createRecipeDto);
  }

  @ApiCustomOperation({
    summary: 'Obtener todas las recetas',
    responseStatus: 200,
    responseDescription: 'Recetas obtenidas correctamente',
  })
  @Get()
  findAll() {
    return this.recipeService.findAll();
  }

  @ApiCustomOperation({
    summary: 'Obtener receta por ID',
    responseStatus: 200,
    responseDescription: 'Receta obtenida correctamente',
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recipeService.findOne(id);
  }

  @ApiCustomOperation({
    summary: 'Actualizar receta',
    bodyType: UpdateRecipeDto,
    responseStatus: 200,
    responseDescription: 'Receta actualizada correctamente',
  })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecipeDto: UpdateRecipeDto) {
    return this.recipeService.update(id, updateRecipeDto);
  }
}
