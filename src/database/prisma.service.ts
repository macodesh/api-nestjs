/* eslint-disable prettier/prettier */
import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    // Ao iniciar o módulo, conecta-se ao banco de dados usando o método $connect() do PrismaClient.
    await this.$connect();
  }
}
