export type ReminderDTO = {
  id: string;
  description: string;
  date: string;
};

export type CreateReminderDTO = {
  description: string;
  date: string;
};

export type DeleteReminderDTO = {
  id: string;
};
export type DeleteReminderByDateDTO = {
  date: string;
};
