import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './services/app.service';
import { PrismaService } from './database/prisma.service';
import { TeamMembersRepository } from './repositories/teamMembers.repository';
import { PrismaTeamMembersRepository } from './repositories/prisma/prismaTeamMembers.repository';

@Module({
  // Aqui ficariam os módulos importados que seriam usados no AppModule, mas está vazio neste exemplo.
  imports: [],
  // Define o controlador (controller) da aplicação como AppController.
  controllers: [AppController],
  providers: [
    // Declara o provedor (provider) AppService para ser injetado em outros componentes.
    AppService,
    PrismaService,
    {
      // Define o nome do provedor personalizado TeamMembersRepository.
      provide: TeamMembersRepository,
      // Define a classe a ser instanciada quando TeamMembersRepository for injetado.
      useClass: PrismaTeamMembersRepository,
    },
  ],
})
export class AppModule {}
