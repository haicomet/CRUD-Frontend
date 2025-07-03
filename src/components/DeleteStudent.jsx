import React, { useState } from "react";
import axios from "axios";
import AllStudents from "./AllStudents";

const DeleteStudent = ({studentId, fetchStudents}) => {
    const handleDeleteStu = async() => {
        try {
            await axios.delete(`http://localhost:8080/api/students/${studentId}`);
            fetchStudents();
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    }
    return (
        <>
        <button type = "button" onClick={handleDeleteStu}>Remove</button>
        </>
    );
}

export default DeleteStudent;