import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";

const api = process.env.API_URL || "http://localhost:8080";

  const AllCampus = () => {
  const [campus, setCampus] = useState([]);

  useEffect(() => {
   axios
      .get(`${api}/campus`)
      .then((res) => setCampuses(res.data))
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
          <Link
            key={campus.id}
            to={`/campus/${campus.id}`}
            style={{ textDecoration: "none", color: "inherit" }}>
            <div
              style={{
                border: "1px solid #ccc",
                padding: "1rem",
                borderRadius: "8px",
              }}>
              <img
                src={campus.imageUrl}
                alt={campus.name}
                style={{ width: "200px", height: "100px", objectFit: "cover" }}
              />
              <h3>{campus.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllCampus;
