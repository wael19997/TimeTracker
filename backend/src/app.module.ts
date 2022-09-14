import { Module } from '@nestjs/common';
import { config } from './orm.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TimeModule } from './time/time.module';
import { PrismaModule } from './prisma/prisma.module';
@Module({
  imports: [TimeModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
