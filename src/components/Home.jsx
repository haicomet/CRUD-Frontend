import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <p>
        <Link to="/campuses">Campuses</Link> |{" "}
        <Link to="/students">Students</Link>
      </p>
    </div>
  );
};
export default Home; 