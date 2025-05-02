import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { ApiCustomOperation } from 'src/common/decorator/swagger.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @ApiCustomOperation({
    summary: 'Create user',
    bodyType: CreateUserDto,
    responseStatus: 201,
    responseDescription: 'Usuario creado correctamente',
  })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  
}
