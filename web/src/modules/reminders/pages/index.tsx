import { FormEvent, useEffect, useRef, useState } from "react";
import RemindersService from "../services/reminders.service";
import { Reminder } from "../components/Reminder";
import { FaTrash } from "react-icons/fa";

export type Reminder = {
  id: string;
  description: string;
  date: string;
};

import styles from "./styles.module.scss";

export default function Reminders() {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [date, setDate] = useState("");
  const [filter, setFilter] = useState(null);

  const inputDescriptionRef = useRef<HTMLInputElement>();

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const reminder = {
      description: inputDescriptionRef.current.value,
      date,
    };

    RemindersService.createReminder(reminder).then((result) =>
      setReminders([...reminders, result])
    );
  }

  useEffect(() => {
    RemindersService.getReminders(filter).then((result) => {
      setReminders(result);
    });
  }, [filter]);

  async function handleDeleteReminder(id: string) {
    await RemindersService.deleteReminder({ id });
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  }

  async function handleDeleteRemainderBydate() {
    await RemindersService.deleteReminderByDate({ date: filter });
    setReminders(reminders.filter((reminder) => reminder.date !== filter));
  }

  async function clearFilter() {
    setFilter(null);
  }

  return (
    <div className={styles.container}>
      <header>
        <h1>Reminders</h1>
        <h1>{reminders.length}</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            ref={inputDescriptionRef}
            type="text"
            name="description"
            placeholder="Create a new reminder"
            required
          />
          <input
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
            name="date"
            required
          />
        </div>

        <button type="submit">Create</button>
      </form>

      <div className={styles.reminders}>
        <div className={styles.filter}>
          {filter ? (
            <button onClick={clearFilter}>Clear filter</button>
          ) : (
            <div>
              <span>Filter by date</span>
              <input
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                type="date"
                name="filter"
                placeholder="filter"
              />
            </div>
          )}

          {filter && (
            <button onClick={handleDeleteRemainderBydate}>Delete all</button>
          )}
        </div>
        <div className={styles.list}>
          {reminders.map((reminder) => (
            <Reminder
              key={reminder.id}
              date={reminder.date}
              description={reminder.description}
              onDelete={() => handleDeleteReminder(reminder.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
