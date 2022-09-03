import { Module } from '@nestjs/common';
import { TimeService } from './time.service';
import { TimeController } from './time.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports:[PrismaModule],
  providers: [TimeService],
  controllers: [TimeController]
})
export class TimeModule {}
