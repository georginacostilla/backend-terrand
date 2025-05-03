import { Controller, Post, Body, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { ApiCustomOperation } from 'src/common/decorator/swagger.decorator';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @ApiCustomOperation({
    summary: 'Registro de usuario',
    responseStatus: 201,
    responseDescription: 'Usuario registrado correctamente',
  })
  @Post('register')
  create(@Body() registerUser: CreateUserDto) {
    return this.authService.register(registerUser);
  }

  @Post('login')
  @ApiCustomOperation({
    summary: 'Login de usuario',
    responseStatus: 200,
    responseDescription: 'Usuario logueado correctamente',
  })
  login(@Body() loginUser: LoginAuthDto) {
    return this.authService.login(loginUser);
  }
}
