
import React, {useState} from "react";
import axios from "axios";
import './styles/stylingWebsite.css';

const API_URL = process.env.API_URL || "http://localhost:8080";

const AddCampus = () => {
    const [campusName, setCampusName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');


    const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        await axios.post(`${API_URL}/api/campus`, {
            campusName,
            imageUrl,
            address,
            description,

        });
    } catch (error) {
        console.error("Error adding campus", error);
    }
    }
    const handleCampusName = (event) => {
        setCampusName(event.target.value);
    }
    const handleImage = (event) => {
        setImageUrl(event.target.value);
    }
    const handleAddress = (event) => {
        setAddress(event.target.value);
    }
    const handleDescription = (event) => {
        setDescription(event.target.value);
    }


    

    return (
        <div className="add-campus-name">
            <h1>Campus Name: </h1>
        <form onSubmit = {handleSubmit} className="new-campus-form">
                <input
                
                name="campus name"
                type="text"
                required
                placeholder="Campus Name"
                value={campusName}
                onChange={handleCampusName}
                />
                <input
                name="imageUrl"
                type="text"
                required
                placeholder="Add Campus Image"
                value={imageUrl}
                onChange={handleImage}
                
                />
                <input
                name="address"
                type="text"
                required
                placeholder="Address"
                value={address}
                onChange={handleAddress}
                />
                <input
                name="description"
                type="text"
                placeholder="description"
                value={description}
                onChange={handleDescription}
                />
            
                <button id="submit-button" type="submit"> Add </button>
               
            </form>
             </div>
        );
}

export default AddCampus;
