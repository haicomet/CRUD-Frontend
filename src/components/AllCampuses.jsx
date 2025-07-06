import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";
const API_URL = process.env.API_URL || "http://localhost:8080";

const AllCampuses = () => {
  const [campuses, setCampuses] = useState([]);

  useEffect(() => {
    axios.get(`${API_URL}/api/campuses`)
      .then((res) => setCampuses(res.data))
      .catch((err) => console.error("Error fetching campuses:", err));
  }, []);

  if (campuses.length === 0) {
    return <p>There are no campuses registered in the database.</p>;
  }

  return (
    <div>
      <h2>All Campuses</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {campuses.map((campus) => (
          <Link key={campus.id} to={`/campuses/${campus.id}`} style={{ textDecoration: "none", color: "inherit" }}>
            <div style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
              <img src={campus.imageUrl} alt={campus.name} style={{ width: "200px", height: "100px", objectFit: "cover" }} />
              <h3>{campus.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllCampuses;
