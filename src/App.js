import Register from "./Register";
import Login from "./Login";
import Leave from "./Leave";
import TeamCalendar from "./TeamCalendar";
import Holidays from "./Holidays";
import History from "./History";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Employee Leave Management</h1>

      <h3>Register</h3>
      <Register />

      <hr />

      <h3>Login</h3>
      <Login />

      <hr />

      <h3>Apply Leave</h3>
      <Leave />

      <hr />

      <h3>Team Calendar</h3>
      <TeamCalendar />

      <hr />

      <h3>Public Holidays</h3>
      <Holidays />

      <hr />

      <h3>Leave History</h3>
      <History />
    </div>
  );
}

export default App;
