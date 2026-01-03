import { useEffect, useState } from "react";
import { db } from "./firebase";

import { collection, getDocs } from "firebase/firestore";
import jsPDF from "jspdf";

function History() {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    const fetchLeaves = async () => {
      const data = await getDocs(collection(db, "leaves"));
      setLeaves(data.docs.map(doc => doc.data()));
    };
    fetchLeaves();
  }, []);

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Leave Summary", 20, 20);

    leaves.forEach((l, i) => {
      doc.text(
        `${i + 1}. ${l.type} | ${l.fromDate} to ${l.toDate}`,
        20,
        30 + i * 10
      );
    });

    doc.save("leave-summary.pdf");
  };

  return (
    <div>
      <h2>Leave History</h2>

      <button onClick={downloadPDF}>
        Download Leave Summary (PDF)
      </button>

      <ul>
        {leaves.map((l, i) => (
          <li key={i}>
            {l.type} | {l.fromDate} → {l.toDate}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
