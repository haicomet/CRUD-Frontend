import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import axios from "axios";

const SingleStudent = () => {
  const { id } = useParams(); 
  const [student, setStudent] = useState(null);

  useEffect(() => {
<<<<<<< HEAD
   const api = process.env.REACT_APP_API_BE_URL;
    axios.get(`{$api}/campus`)
=======
    axios.get(`${API_URL}/api/students/${id}`)
>>>>>>> 71e1b953058a6d8088bbbfde3c6e90d04a84e72a
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
        {student.campus ? (
          <Link to={`/campus/${student.campus.id}`}>{student.campus.name}</Link>
        ) : (
          "Not found"
        )}
      </p>
    </div>
  );
};

export default SingleStudent;