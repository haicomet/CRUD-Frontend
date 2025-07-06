import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";

const API_URL = process.env.API_URL || "http://localhost:8080";

  const AllCampus = () => {
  const [campus, setCampus] = useState([]);

  useEffect(() => {
    const api = process.env.REACT_APP_BE_URL;
    axios.get(`${api}/campus`)
      .then((res) => setCampus(res.data))
      .catch((err) => console.error("Error fetching campus:", err));
  }, []);

  if (campus.length === 0) {
    return <p>There are no campus registered in the database.</p>;
  }

  return (
    <div className="all-campus-page">
      <h2>Campus Listing</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {campus.map((campus) => (
          <CampusCard key={campus.id} campus={campus} />
        ))}
      </div>
    </div>
  );
};

export default AllCampus;
