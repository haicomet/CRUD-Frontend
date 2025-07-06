import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DeleteStudent from "./DeleteStudent";
import StudentCard from "./StudentCard";
const API_URL = process.env.API_URL || "http://localhost:8080";

const AllStudents = () => {
  const [students, setStudents] = useState([]);


  const fetchStudents = () => {
    axios.get(`${API_URL}/api/students`)

      .then((res) => setStudents(res.data))
      .catch((err) => console.error("Error fetching students:", err));
  };
  useEffect(() => {
    fetchStudents();
  },[]);

  if (students.length === 0) {
    return <p>There are no students currently enrolled.</p>;
  }

  return (
    <div>
      <h2>All Students</h2>
      <div> 
        {students.map((student) => (
          <div key={student.id}>
            <StudentCard student = {student}/>
            <DeleteStudent studentId={student.id} fetchStudents={fetchStudents}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllStudents;