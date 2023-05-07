import { Module } from '@nestjs/common';
import { ReminderController } from './controllers/reminders.controller';
import { ReminderService } from './services/reminders.service';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [ReminderController],
  providers: [ReminderService, PrismaService],
})
export class RemindersModule {}
