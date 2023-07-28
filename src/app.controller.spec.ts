import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './services/app.service';

// Importa as dependências necessárias para escrever os testes.
describe('AppController', () => {
  let appController: AppController; // Variável para armazenar a instância do AppController.

  // Antes de cada teste, cria uma instância do AppController e injeta as dependências necessárias.
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      // Define os controladores a serem testados (AppController).
      controllers: [AppController],
      // Define os provedores necessários para o AppController (AppService).
      providers: [AppService],
    }).compile();

    // Obtém uma instância do AppController para uso nos testes.
    appController = app.get<AppController>(AppController);
  });

  // Bloco de teste para a rota 'root' do AppController.
  describe('root', () => {
    // Teste para verificar se a função 'getHello()' retorna 'Hello World!'.
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
