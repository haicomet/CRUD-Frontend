import React from "react";
import { Link } from "react-router-dom";

const StudentCard = ({student}) => {
    return (
        <div className="student-card">
          <Link to={`/students/${student.id}`}>
             <img src={student.imageUrl} alt={`${student.firstName}'s avatar}`}/>
             <h3>{student.firstName} {student.lastName}</h3> 
             <p>EMPLID: {student.id} </p>
             <p>Email: {student.email} </p>
             <p>GPA: {student.gpa} </p>
            </Link>   
        </div>
    );
}
export default StudentCard;