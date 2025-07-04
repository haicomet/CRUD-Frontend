import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import axios from "axios";

const SingleCampus = () => {
  const { id } = useParams(); 
  const [campus, setCampus] = useState(null);

  useEffect(() => {
    axios.get(`http://crud-backend-iota-three.vercel.app/api/campus/${id}`)
      .then(res => setCampus(res.data))
      .catch(err => console.error("Error fetching campus:", err));
  }, [id]);

  if (!campus) return <p>Not found.</p>;

  return (
    <div>
      <h2>{campus.name}</h2>
      <img src={campus.imageUrl} alt={campus.name} style={{ width: "300px" }} />
      <p><strong>Address:</strong> {campus.address}</p>
      <p>{campus.description}</p>

      <h3>Enrolled Students</h3>
      {campus.students?.length > 0 ? (
        <ul>
          {campus.students.map(student => (
            <li key={student.id}>
              <Link to={`/students/${student.id}`}>
                {student.firstName} {student.lastName}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No students are currently enrolled.</p>
      )}
    </div>
  );
};

export default SingleCampus;