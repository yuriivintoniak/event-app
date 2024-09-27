import { Link } from "react-router-dom";
import styles from "./Event.module.css";

const Event = ({ event }) => {
  return (
    <div className={styles.eventWrapper}>
      <p>{event.title}</p>
      <p>{event.description}</p>
      <div className="mt-4 flex justify-between">
        <Link to={`/registration`}>
          <button>{event.register}</button>
        </Link>
        <Link to={`participants`}>
          <button>{event.view}</button>
        </Link>
      </div>
    </div>
  );
}

export default Event;
