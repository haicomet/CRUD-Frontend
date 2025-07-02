import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav style={{ padding: "1rem", background: "#f0f0f0" }}>
      <Link to="/campuses" style={{ marginRight: "1rem" }}>All Campuses</Link>
      <Link to="/students">All Students</Link>
      <Link to="/add-student">Add Student</Link>
    </nav>
  );
};

export default Navbar;
