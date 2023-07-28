import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

// Função assíncrona chamada bootstrap, que é a função inicial da aplicação.
async function bootstrap() {
  // Cria uma instância da aplicação usando o módulo principal AppModule.
  const app = await NestFactory.create(AppModule);

  // Configura o uso de um ValidationPipe globalmente na aplicação.
  app.useGlobalPipes(new ValidationPipe());

  // Inicia a aplicação e a coloca para escutar a porta 3000.
  await app.listen(3000);
}
// Chama a função bootstrap para iniciar a aplicação.
bootstrap();
