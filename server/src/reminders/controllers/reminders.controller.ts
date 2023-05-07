import {
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { ReminderService } from '../services/reminders.service';
import { Reminder } from '@prisma/client';

@Controller()
export class ReminderController {
  constructor(private reminderService: ReminderService) {}

  @Get('reminder')
  async getReminderByDate(@Query('date') date: string): Promise<Reminder[]> {
    return this.reminderService.remindersByDate({ date });
  }

  @Get('reminder')
  async getReminders(): Promise<Reminder[]> {
    return this.reminderService.reminders();
  }

  @Post('reminder')
  async createReminder(
    @Body() reminderData: { description: string; date: string },
  ): Promise<Reminder> {
    const { description, date } = reminderData;
    return this.reminderService.createReminder({
      description,
      date,
    });
  }

  @Delete('reminder/:id')
  async deleteReminder(@Param('id') id: string): Promise<void> {
    await this.reminderService.deleteReminder({ id });
  }

  @Delete('reminder')
  async deleteRemindersByDate(@Query('date') date: string): Promise<void> {
    console.log('date', date);
    await this.reminderService.deleteRemindersByDate({ date });
  }
}
