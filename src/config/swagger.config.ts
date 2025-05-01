import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const setupSwagger = (app): void => {
    const config = new DocumentBuilder()
        .setTitle('API NESTJS')
        .setDescription('Prueba técnica de API REST con NestJS para Terrand')
        .setVersion('1.0')
        .addTag('Proyecto 1')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
};