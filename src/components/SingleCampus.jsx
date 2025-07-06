import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import axios from "axios";
import StudentCard from "./StudentCard";
const API_URL = process.env.API_URL || "http://localhost:8080";

const SingleCampus = () => {
  const { id } = useParams(); 
  const [campus, setCampus] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}/api/campus/${id}`)
      .then(res => setCampus(res.data))
      .catch(err => console.error("Error fetching campus:", err));
  }, [id]);

  if (!campus) return <p>Not found.</p>;

  return (
    <div>
      <h2>{campus.campusName}</h2>
      <img src={campus.imageUrl} alt={campus.campusName} style={{ width: "300px" }} />
      <p><strong>Address:</strong> {campus.address}</p>
      <p>{campus.description}</p>

      <h3>Enrolled Students</h3>
      {campus.Students?.length > 0 ? (
        <ul>
          {campus.Students.map(student => (
            <StudentCard key={student.id} student = {student}/>
          ))}
        </ul>
      ) : (
        <p>No students are currently enrolled.</p>
      )}
    </div>
  );
};

export default SingleCampus;