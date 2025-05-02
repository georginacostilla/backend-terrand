import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import JwtModuleConfig from '../../config/jwt.config';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [JwtModuleConfig()]
})
export class AuthModule { }
