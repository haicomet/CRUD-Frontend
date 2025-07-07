import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import CampusCard from "./CampusCard";
import DeleteCampus from "./deleteCampus";
const API_URL = process.env.API_URL || "http://localhost:8080";

const AllCampus = () => {
  const [campus, setCampus] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/api/campus`)
      .then((res) => setCampus(res.data))
      .catch((err) => console.error("Error fetching campus:", err));
  }, []);

  

  return (
    <div>
      
      <h2>All Campuses</h2>
      <Link to="/add-campus" >
      <button className="add-campus-btn">Add Campus</button>
      </Link>
      {campus.length === 0 ? (
      <p>There are no campus registered in the database.</p>
    ) : (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {campus.map((campus) => (
          <div key={campus.id} >
            <CampusCard campus={campus} />
            <DeleteCampus />
          </div>
        ))}
      </div>
    )}
    </div>
  );
};

export default AllCampus;
