import api from "../../../services/api";
import {
  ReminderDTO,
  CreateReminderDTO,
  DeleteReminderDTO,
  DeleteReminderByDateDTO,
} from "../interfaces/dto";

class RemindersService {
  async getReminders(date?: string) {
    const { data } = await api.get<ReminderDTO[]>("/reminder", {
      params: {
        date,
      },
    });

    return data;
  }

  async createReminder({ description, date }: CreateReminderDTO) {
    const { data } = await api.post("reminder", { description, date });
    return data;
  }

  async deleteReminder({ id }: DeleteReminderDTO) {
    await api.delete(`reminder/${id}`);
  }

  async deleteReminderByDate({ date }: DeleteReminderByDateDTO) {
    await api.delete("reminder", {
      params: {
        date,
      },
    });
  }
}
export default new RemindersService();
