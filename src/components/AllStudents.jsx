import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import DeleteStudent from "./DeleteStudent";
const API_URL = process.env.API_URL || "http://localhost:8080";

const AllStudents = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    axios
      .get(`${api}/campus`)
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
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <Link to={`/students/${student.id}`}>
              {student.firstName} {student.lastName}
            </Link>
            <DeleteStudent studentId={student.id} fetchStudents={fetchStudents}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllStudents;