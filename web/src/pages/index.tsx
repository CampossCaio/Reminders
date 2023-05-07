import RemindersPage from "../modules/reminders/pages";

export type Reminder = {
  description: string;
  date: string;
};

export default function Reminders() {
  return <RemindersPage />;
}
