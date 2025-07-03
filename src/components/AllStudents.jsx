import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";

const AllStudents = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/students")
      .then((res) => setStudents(res.data))
      .catch((err) => console.error("Error fetching students:", err));
  }, []);

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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllStudents;