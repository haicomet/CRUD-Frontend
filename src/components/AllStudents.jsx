import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import axios from "axios";
import DeleteStudent from "./DeleteStudent";
import StudentCard from "./StudentCard";
const API_URL = process.env.API_URL || "http://localhost:8080";
import "./styles/allPage.css";


const AllStudents = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = () => {
    axios
      .get(`${API_URL}/api/students`)

      .then((res) => setStudents(res.data))
      .catch((err) => console.error("Error fetching students:", err));
  };
  useEffect(() => {
    fetchStudents();
  }, []);

  
 

  return (
    <div>
      <h2>All Students</h2>
      <Link to="/add-student">
        <button className="add-student-btn">Add Student</button>
      </Link>
       {students.length === 0 ? (
       <p>There are no students currently enrolled.</p>
       ) : (
      <div>
        {students.map((student) => (
          <div key={student.id}>
            <StudentCard student={student} />
            <DeleteStudent
              studentId={student.id}
              fetchStudents={fetchStudents}
              />
          </div>
        ))}

      </div>
      )}
    </div>
  );
};

export default AllStudents;
