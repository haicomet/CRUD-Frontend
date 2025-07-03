
import React, {useState} from "react";
import axios from "axios";

const addCampus = () => {
    const [campusName, setcampusName] = useState('');
    const [imgeURL, setImageUrl] = useState('');
    const [adress, setAdress] = useState('');
    const [description, setDescription] = useState('');


const handleSubmit = async (event) => {
 event.preventDefualt();
 try {
    await axios.post("http://localhost:8080/api/campus", {
        campusName,
        imageUrl,
        adress,
        description,

    });
} catch (error) {
    console.error("Error adding campus", error);
}
 }
const handleCampusName = (event) => {
    setCampusName(event.target.value);
}
const handleimage = (event) => {
    setImage(event.target.value);
}
const handleAdress = (event) => {
    setAdress(event.target.value);
}
const handleDescription = (event) => {
    setDescription(event.target.value);
}


}
render(){
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
            value={adress}
            onChange={handleAdress}
            />
            <input
            name="description"
            type="text"
            placeholder="description"
            value={description}
            onChange={handleCampusName}
            />
           
            <button id="submit-button"> Add </button>
        </form>
    });


export default AddCampus;