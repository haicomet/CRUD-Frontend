import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import CampusCard from "./CampusCard";

const AllCampus = () => {
  const [campus, setCampus] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/campus")
      .then((res) => setCampus(res.data))
      .catch((err) => console.error("Error fetching campus:", err));
  }, []);

  

  return (
    <div>
      <h2>All Campus</h2>
      <Link to="/add-campus" >
      <button className="add-campus-btn">Add Campus</button>
      </Link>
      {campus.length === 0 ? (
      <p>There are no campus registered in the database.</p>
    ) : (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {campus.map((campus) => (
          <CampusCard key={campus.id} campus={campus} />
        ))}
      </div>
    )}
    </div>
  );
};

export default AllCampus;
