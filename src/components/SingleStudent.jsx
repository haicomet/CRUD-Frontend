import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import axios from "axios";
import CampusCard from "./CampusCard";
const API_URL = process.env.API_URL || "http://localhost:8080";

const SingleStudent = () => {
  const { id } = useParams(); 
  const [student, setStudent] = useState(null);

  useEffect(() => {

    axios.get(`${API_URL}/api/students/${id}`)

      .then(res => setStudent(res.data))
      .catch(err => console.error("Error fetching student:", err));
  }, [id]);

  if (!student) return <p>This student is not registered to a campus.</p>;

  return (
    <div>
      <h2>{student.firstName} {student.lastName}</h2>
      <img src={student.imageUrl} alt={`${student.firstName} avatar`} style={{ width: "200px" }} />
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>GPA:</strong> {student.gpa}</p>

      <p>
        <strong>Campus:</strong>{" "}
        {student.Campus ? (
          <CampusCard key={student.Campus.id} campus={student.Campus} />
        ) : (
          "Not found"
        )}
      </p>
    </div>
  );
};

export default SingleStudent;