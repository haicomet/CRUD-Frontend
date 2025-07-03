import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav style={{ padding: "1rem", background: "#f0f0f0" }}>

      <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
      <Link to="/campuses" style={{ marginRight: "1rem" }}>Campuses</Link>
      <Link to="/students" style={{ marginRight: "1rem" }}>Students</Link>
      <Link to="/add-student" style={{ marginRight: "1rem" }}>Add Student</Link>
      <Link to="/add-campus">Add Campus</Link>
    </nav>
  );
};

export default Navbar;
