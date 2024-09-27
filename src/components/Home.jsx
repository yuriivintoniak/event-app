import { events } from "../data";
import Event from "./Event";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.homeWrapper}>
      <h1>Events</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <Event event={event} />
          </li>
        ))}
      </ul>
    </div>
  );
}
