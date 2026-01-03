import { useState, useEffect } from "react";
import { db, auth } from "./firebase";
import { addDoc, collection } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

function Leave() {
  const [user, setUser] = useState(null);
  const [type, setType] = useState("");
  const [reason, setReason] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const applyLeave = async () => {
    if (!user) {
      alert("Please login first");
      return;
    }

    await addDoc(collection(db, "leaves"), {
      email: user.email,
      type,
      reason,
      fromDate,
      toDate,
      status: "Pending"
    });

    alert("Leave Applied");
  };

  return (
    <div>
      <h2>Apply Leave</h2>

      {!user && <p style={{ color: "red" }}>Login required to apply leave</p>}

      <select onChange={e => setType(e.target.value)}>
        <option value="">Select Type</option>
        <option>Sick</option>
        <option>Vacation</option>
        <option>Personal</option>
      </select>

      <br />

      <input type="date" onChange={e => setFromDate(e.target.value)} />
      <input type="date" onChange={e => setToDate(e.target.value)} />

      <br />

      <input placeholder="Reason" onChange={e => setReason(e.target.value)} />

      <br />

      <button className="btn btn-primary" onClick={applyLeave}>
  Apply
</button>

    </div>
  );
}

export default Leave;
