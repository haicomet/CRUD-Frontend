import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";

const AllCampus = () => {
  const [campus, setCampus] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/campus")
      .then((res) => setCampus(res.data))
      .catch((err) => console.error("Error fetching campus:", err));
  }, []);

  if (campus.length === 0) {
    return <p>There are no campus registered in the database.</p>;
  }

  return (
    <div>
      <h2></h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {campus.map((campus) => (
          <CampusCard key={campus.id} campus={campus} />
        ))}
      </div>
    </div>
  );
};

export default AllCampus;
