import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { TeamMembersRepository } from '../teamMembers.repository';
import { randomUUID } from 'node:crypto';

@Injectable()
export class PrismaTeamMembersRepository implements TeamMembersRepository {
  // Injeta o serviço PrismaService no construtor da classe.
  constructor(private readonly prisma: PrismaService) {}

  // Implementação do método 'create' definido na interface TeamMembersRepository.
  async create(name: string, jobFunction: string): Promise<void> {
    // Cria um novo registro na tabela 'teamMember' usando o PrismaService.
    await this.prisma.teamMember.create({
      data: {
        // Gera um novo UUID para o id do membro de equipe.
        id: randomUUID(),
        // Nome do membro de equipe.
        name,
        // Função do membro de equipe.
        jobFunction,
      },
    });
  }
}
