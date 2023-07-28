import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './services/app.service';
import { PrismaService } from './database/prisma.service';
import { TeamMember } from '@prisma/client';
// import { randomUUID } from 'node:crypto';
import { TeamMemberBody } from './dtos';
import { TeamMembersRepository } from './repositories/teamMembers.repository';

// Define que essa classe é um controlador do Nest.js.
@Controller()
export class AppController {
  constructor(
    // Injeta o serviço AppService.
    private readonly appService: AppService,
    // Injeta o serviço PrismaService.
    private readonly prisma: PrismaService,
    // Injeta o repositório TeamMembersRepository.
    private readonly teamMembersRepository: TeamMembersRepository,
  ) {}

  // Rota HTTP GET para a raiz da aplicação.
  @Get()
  getHello(): string {
    // Retorna o resultado da função getHello() do serviço AppService.
    return this.appService.getHello();
  }

  // Rota HTTP GET para '/team-member'.
  @Get('team-member')
  async getTeamMember(): Promise<TeamMember[]> {
    // Retorna todos os registros da tabela 'teamMember' usando o serviço PrismaService.
    return this.prisma.teamMember.findMany();
  }

  // Rota HTTP POST para '/team-member'.
  @Post('team-member')
  async postTeamMember(@Body() body: TeamMemberBody): Promise<void> {
    // Extrai as propriedades 'name' e 'jobFunction' do corpo da requisição.
    const { name, jobFunction } = body;

    // Agora, vamos criar um novo registro na tabela 'teamMember'.
    // Comentamos o código abaixo porque vamos usar um repositório personalizado.

    // await this.prisma.teamMember.create({
    //   data: {
    //     id: randomUUID(),
    //     name,
    //     jobFunction,
    //   },
    // });

    // Chamando o método 'create' do repositório TeamMembersRepository para criar um novo registro.
    await this.teamMembersRepository.create(name, jobFunction);
  }
}
