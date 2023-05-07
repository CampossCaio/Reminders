import { Module } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { RemindersModule } from './reminders/reminders.module';

@Module({
  imports: [RemindersModule],
  providers: [PrismaService],
})
export class AppModule {}
