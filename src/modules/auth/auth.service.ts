import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginAuthDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) { }

  async register(user: CreateUserDto) {
    try {
      const newUser = await this.prisma.user.create({
        data: user,
      });
      return newUser;
    } catch (error) {
      throw new Error('Error al registrar el usuario: ' + error.message);
    }
  }

  async login(user: LoginAuthDto) {
    try {
      const foundUser = await this.prisma.user.findUnique({
        where: { email: user.email },
      });
      if (!foundUser) {
        throw new Error('Usuario no encontrado');
      }
      return foundUser;
    } catch (error) {
      throw new Error('Error al iniciar sesión: ' + error.message);
    }
  }
}
