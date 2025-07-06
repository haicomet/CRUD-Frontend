import React, { useState } from "react";
import axios from "axios";
import AllStudents from "./AllStudents";
const API_URL = process.env.API_URL || "http://localhost:8080";

const DeleteStudent = ({studentId, fetchStudents}) => {
    const handleDeleteStu = async() => {
        try {
            await axios.delete(`${API_URL}/api/students/${studentId}`);
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