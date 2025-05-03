import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { ApiCustomOperation } from 'src/common/decorator/swagger.decorator';

@ApiTags('Usuarios')
@Controller('usuarios')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @ApiCustomOperation({
    summary: 'Obtener todos los usuarios',
    responseStatus: 200,
    responseDescription: 'Usuarios obtenidos correctamente',
  })
  @Get()
  getAllUsers(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @ApiCustomOperation({
    summary: 'Obtener usuario por ID',
    responseStatus: 200,
    responseDescription: 'Usuario obtenido correctamente',
  })
  @Get(':id')
  getUserById(@Param('id') id: string): Promise<User> {
    return this.usersService.findById(id);
  }
}
