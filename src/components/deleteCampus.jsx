import React, {useState} from "react";
import axios from "axios";
const API_URL = process.env.API_URL || "http://localhost:8080";


const DeleteCampus = ( { campusId,fetchCampus }) => {
    const handleDeleteCampus = async() => {
        try { 
            await axios.delete(`http://localhost:8080/api/campus/${campusId}`);
            fetchCampus();
        } catch (error) {
            console.error("Error deleting task", error);
        }
    }
    return (
        <button type="button" onClick={handleDeleteCampus}> Delete Campus</button>
)
};


export default deleteCampus;


