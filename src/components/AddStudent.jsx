import React, { useState } from "react";
import axios from "axios";
import "./styles/AddStudent.css";

const API_URL = process.env.API_URL || "http://localhost:8080";

const AddStudent = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [imageUrl, setImage] = useState("");
    const [gpa, setGpa] = useState("");

   const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        await axios.post(`${API_URL}/api/students`, {
          firstName,
          lastName,
          email,
          imageUrl,
          gpa
        });
        fetchStudents();
      } catch (error) {
        console.error("Error adding student:", error);
      }
   }
   const handleFirstName = (event) => {
    setFirstName(event.target.value);
   }
   const handleLastName = (event) => {
    setLastName(event.target.value);
   }
   const handleEmail = (event) => {
    setEmail(event.target.value);
   }
   const handleImage = (event) => {
    setImage(event.target.value);
   }
   const handleGpa = (event) => {
    setGpa(event.target.value);
   }

    return(
      <div className="add-student-page">
         <h1>Student Name: </h1>
        <form onSubmit = {handleSubmit} className="new-student-form">
            <input
            name="firstName"
            type="text"
            required
            placeholder="First Name"
            value={firstName}
            onChange={handleFirstName}
            />


            <input
            name="lastName"
            type="text"
            required
            placeholder="Surname"
            value={lastName}
            onChange={handleLastName}
            />
            <h1> Student Email </h1>
            <input
            name="email"
            type="text"
            required
            placeholder="student@campus.edu"
            value={email}
            onChange={handleEmail}
            />
            <h1>Add A Picture of Yourself </h1>
            <input
            name="imageUrl"
            type="text"
            placeholder="Image URL"
            value={imageUrl}
            onChange={handleImage}
            />
            <label>GPA</label>
            <input
            name="gpa"
            type="number"
            placeholder="0.0"
            value={gpa}
            onChange={handleGpa}
            min = "0.0"
            max = "4.0"
            />
            <button id="submit-button">Add </button>
        </form>
        </div>
    );
}

export default AddStudent;