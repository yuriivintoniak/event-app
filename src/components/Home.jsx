import Event from "./Event";
import styles from "./Home.module.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/events")
      .then((response) => {
        setEvents(response.data);
      });
  }, []);

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

// export default function Home() {
//   return (
//     <div className={styles.homeWrapper}>
//       <h1>Events</h1>
//       <ul>
//         {events.map(event => (
//           <li key={event.id}>
//             <Event event={event} />
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
