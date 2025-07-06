import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import DeleteStudent from "./DeleteStudent";

const AllStudents = () => {
  const [students, setStudents] = useState([]);

<<<<<<< HEAD
  const fetchStudents = async () => {
    const api = process.env.REACT_APP_API_BE_URL;
    axios.get(`{$api}/campus`)
=======
  const fetchStudents = () => {
    axios.get(`${API_URL}/api/students`)
>>>>>>> 71e1b953058a6d8088bbbfde3c6e90d04a84e72a
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