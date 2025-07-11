import React from "react";
import { createRoot } from "react-dom/client";
import "./AppStyles.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./components/Home";
import AllCampus from "./components/AllCampus";
import AllStudents from "./components/AllStudents";
import SingleStudent from "./components/SingleStudent";
import SingleCampus from "./components/SingleCampus";
import AddStudent from "./components/AddStudent";
import AddCampus from "./components/addCampus";


const API_URL = process.env.API_URL || "http://localhost:8000";

const App = () => {
  return (
    
    <Router>
      <div className="home-Page">  
      
        
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/campus" element={<AllCampus />} />
        <Route path="/students" element={<AllStudents />} />
        <Route path="/campus/:id" element={<SingleCampus />} />
        <Route path="/students/:id" element={<SingleStudent />} />
        <Route path="/add-student" element={<AddStudent/>} />
        <Route path="/add-campus" element={<AddCampus/>} />
        <Route path="*" element={<h1>All Campus</h1>} />
        
      </Routes>
      </div>
    </Router>
    
  );
};

const root = createRoot(
  document.getElementById('root')
);
root.render(<App/>);
export default App;
