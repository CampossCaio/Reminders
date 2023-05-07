import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Prisma, Reminder } from '@prisma/client';

@Injectable()
export class ReminderService {
  constructor(private prisma: PrismaService) {}

  async remindersByDate(
    where: Prisma.ReminderWhereInput,
  ): Promise<Reminder[] | null> {
    return this.prisma.reminder.findMany({
      where,
    });
  }

  async reminders(): Promise<Reminder[]> {
    return this.prisma.reminder.findMany();
  }

  async createReminder(data: Prisma.ReminderCreateInput): Promise<Reminder> {
    return this.prisma.reminder.create({
      data,
    });
  }

  async deleteReminder(where: Prisma.ReminderWhereUniqueInput): Promise<void> {
    await this.prisma.reminder.delete({
      where,
    });
  }

  async deleteRemindersByDate(where: Prisma.ReminderWhereInput): Promise<void> {
    await this.prisma.reminder.deleteMany({
      where,
    });
  }
}
