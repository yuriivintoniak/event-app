import { Link } from "react-router-dom";
import styles from "./Event.module.css";

const Event = ({ event }) => {
  return (
    <div className={styles.eventWrapper}>
      <div className="flex justify-between mb-6">
        <p>{event.title}</p>
        <p>{event.date}</p>
      </div>
      <div className="flex justify-between">
        <p>{event.description}</p>
        <p>{event.organizer}</p>
      </div>
      <div className="mt-10 flex justify-between">
        <Link to={`/registration`}>
          <button>Register</button>
        </Link>
        <Link to={`/participants`}>
          <button>View</button>
        </Link>
      </div>
    </div>
  );
}

export default Event;
