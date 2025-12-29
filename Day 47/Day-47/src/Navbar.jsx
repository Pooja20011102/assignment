import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/" style={navStyle}>Home</NavLink>
      <NavLink to="/login" style={navStyle}>Login</NavLink>
      <NavLink to="/product/1" style={navStyle}>Product</NavLink>
      <NavLink to="/dashboard" style={navStyle}>Dashboard</NavLink>
    </nav>
  );
}

const navStyle = ({ isActive }) => ({
  marginRight: "10px",
  color: isActive ? "red" : "black",
});

export default Navbar;
