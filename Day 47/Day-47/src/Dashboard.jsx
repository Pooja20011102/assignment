import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>

      <Link to="profile">Profile</Link> |{" "}
      <Link to="settings">Settings</Link>

      <hr />
      <Outlet />
    </div>
  );
}

export default Dashboard;
