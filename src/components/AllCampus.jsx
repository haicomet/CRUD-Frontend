import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";

<<<<<<< HEAD

  const AllCampus = () => {
  const [campus, setCampus] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/campus")
      .then((res) => setCampuses(res.data))
      .catch((err) => console.error("Error fetching campuses:", err));
=======
const AllCampus = () => {
  const [campus, setCampus] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/campus")
      .then((res) => setCampus(res.data))
      .catch((err) => console.error("Error fetching campus:", err));
>>>>>>> cffaea0243b9bd52014485278aaffb51a66729b2
  }, []);

  if (campus.length === 0) {
    return <p>There are no campus registered in the database.</p>;
  }

  return (
    <div>
      <h2>All Campus</h2>
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
