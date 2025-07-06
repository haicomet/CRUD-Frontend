import React from "react";
import { Link } from "react-router";


const Home = () => {
  return (
    <div className="HomePage">
      <p>
        <Link to="/campus">Campus</Link> |{" "}
        <Link to="/students">Students</Link>
        
      </p>
    </div>
  );
};
export default Home; 