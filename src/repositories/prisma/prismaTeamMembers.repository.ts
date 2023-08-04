import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../database/prisma.service'
import { TeamMembersRepository } from '../teamMembers.repository'
import { randomUUID } from 'node:crypto'

@Injectable()
export class PrismaTeamMembersRepository implements TeamMembersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(name: string, jobFunction: string): Promise<void> {
    await this.prisma.teamMember.create({
      data: {
        id: randomUUID(),
        name,
        jobFunction,
      },
    })
  }
}
