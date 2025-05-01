import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { envValidationSchema } from '../../config/env-validation.config';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { RatingModule } from '../rating/rating.module';
import { RecipeModule } from '../recipe/recipe.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: ['.env'],
    validationSchema: envValidationSchema
  }),
    PrismaModule,
    AuthModule,
    RatingModule,
    RecipeModule,
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }