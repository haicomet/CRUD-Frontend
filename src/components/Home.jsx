import React from "react";
import { Link } from "react-router";
import './styles/StyleWebsite.css';

const Home = () => {
  return (
    <div>
      <p>
        <Link to="/campus">Campus</Link> |{" "}
        <Link to="/students">Students</Link>
        
      </p>
    </div>
  );
};
export default Home; 