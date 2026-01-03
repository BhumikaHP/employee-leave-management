import { useEffect, useState } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

function TeamCalendar() {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const fetchLeaves = async () => {
      const snapshot = await getDocs(collection(db, "leaves"));
      setLeaves(snapshot.docs.map(doc => doc.data()));
    };
    fetchLeaves();
  }, []);

  return (
    <div>
      <h2>Team Leave Calendar</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Email</th>
            <th>From Date</th>
            <th>To Date</th>
            <th>Type</th>
          </tr>
        </thead>

        <tbody>
          {leaves.map((l, i) => (
            <tr key={i}>
              <td>{l.email}</td>
              <td>{l.fromDate}</td>
              <td>{l.toDate}</td>
              <td>{l.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TeamCalendar;
