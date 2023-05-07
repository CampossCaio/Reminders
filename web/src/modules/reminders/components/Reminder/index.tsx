import styles from "./styles.module.scss";
import { FaTrash } from "react-icons/fa";

type ReminderProps = {
  description: string;
  date: string;
  onDelete: () => void;
};
export const Reminder = ({ date, description, onDelete }: ReminderProps) => {
  return (
    <div className={styles.reminder}>
      <div className={styles.description}>
        <span>{description}</span>
        <span>{date}</span>
      </div>
      <button onClick={onDelete}>
        <FaTrash />
      </button>
    </div>
  );
};
