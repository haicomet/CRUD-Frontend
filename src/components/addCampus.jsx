
import React, {useState} from "react";
import axios from "axios";

const AddCampus = () => {
    const [campusName, setCampusName] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');


    const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        await axios.post("http://localhost:8080/api/campus", {
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
        <form onSubmit = {handleSubmit} className="new-campus-form">
                <input
                name="campus name"
                type="text"
                required
                placeholder="campus name"
                value={campusName}
                onChange={handleCampusName}
                />
                <input
                name="imageUrl"
                type="text"
                required
                placeholder="image url"
                value={imageUrl}
                onChange={handleImage}
                />
                <input
                name="adress"
                type="text"
                required
                placeholder="adress"
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
        );
}

export default AddCampus;