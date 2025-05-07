import { NestApplication, NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { ConfigService } from '@nestjs/config';
import { Logger, ClassSerializerInterceptor } from '@nestjs/common';
import { LoggerInterceptor } from './common/interceptors/logger.interceptor';
import { setupSwagger } from './config/swagger.config';
import { corsOptions } from './config/cors.config';
import { ValidationPipe } from '@nestjs/common/pipes/validation.pipe';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.useGlobalInterceptors(
    new ClassSerializerInterceptor(app.get(Reflector), {
      excludePrefixes: ['password', 'createdAt', 'updatedAt'],
      ignoreDecorators: true,
    }),
  );

  app.enableCors(corsOptions);

  setupSwagger(app);

  app.useGlobalInterceptors(new LoggerInterceptor());

  const configService = app.get(ConfigService);
  const PORT = configService.get<number>('PORT') || 3000;
  const NODE_ENV = configService.get<string>('NODE_ENV');

  await app.listen(PORT, () => {
    Logger.log(
      `Aplicación ejecutándose en el puerto: http://localhost:${PORT}`,
      NestApplication.name,
    );
    Logger.log(`Current Environment: ${NODE_ENV}`, NestApplication.name);
  });

  // URL de Swagger en la consola
  const swaggerUrl = '/api';
  Logger.log(`Swagger está disponible en: http://localhost:${PORT}${swaggerUrl}`);

}

bootstrap();
