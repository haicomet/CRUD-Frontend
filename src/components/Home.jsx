import React from "react";
import { Link } from "react-router-dom";

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