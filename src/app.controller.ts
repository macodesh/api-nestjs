import { Body, Controller, Get, Post } from '@nestjs/common'
import { AppService } from './services/app.service'
import { PrismaService } from './database/prisma.service'
import { TeamMember } from '@prisma/client'
import { TeamMemberBody } from './dtos'
import { TeamMembersRepository } from './repositories/teamMembers.repository'

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prisma: PrismaService,
    private readonly teamMembersRepository: TeamMembersRepository,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }

  @Get('team-member')
  async getTeamMember(): Promise<TeamMember[]> {
    return this.prisma.teamMember.findMany()
  }

  @Post('team-member')
  async postTeamMember(@Body() body: TeamMemberBody): Promise<void> {
    const { name, jobFunction } = body
    await this.teamMembersRepository.create(name, jobFunction)
  }
}
