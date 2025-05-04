import { Injectable, BadRequestException, NotFoundException, UnauthorizedException, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginAuthDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from 'src/common/interfaces';
import { hashPassword } from 'src/utils/encryption';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService,
    private readonly jwtService: JwtService
  ) { }

  async register(user: CreateUserDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: user.email },
    });

    if (existingUser) {
      throw new BadRequestException('El correo electrónico ya está registrado');
    }

    try {
      const newUser = await this.prisma.user.create({
        data: {
          ...user,
          password: await hashPassword(user.password),
        },
      });
      return { message: 'Usuario creado exitosamente', user: newUser };
    } catch (error) {
      throw new InternalServerErrorException('Error al registrar el usuario');
    }
  }

  async login(user: LoginAuthDto) {
    const foundUser = await this.prisma.user.findUnique({
      where: { email: user.email },
    });

    if (!foundUser) {
      throw new NotFoundException('Usuario no encontrado');
    }

    const passwordValid = await bcrypt.compare(user.password, foundUser.password);
    if (!passwordValid) {
      throw new UnauthorizedException('Contraseña incorrecta');
    }

    const payload = {
      id: foundUser.id,
      email: foundUser.email,
    };

    const token = await this.createTokens(payload);

    return { message: 'Inicio de sesión exitoso', user: foundUser, token };
  }

  private async createTokens(payload: JwtPayload, expiresIn: string = '15m') {
    return {
      accessToken: await this.jwtService.signAsync(payload, { expiresIn }),
    };
  }
}
