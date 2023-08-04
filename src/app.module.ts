import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './services/app.service'
import { PrismaService } from './database/prisma.service'
import { TeamMembersRepository } from './repositories/teamMembers.repository'
import { PrismaTeamMembersRepository } from './repositories/prisma/prismaTeamMembers.repository'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    {
      provide: TeamMembersRepository,
      useClass: PrismaTeamMembersRepository,
    },
  ],
})
export class AppModule {}
