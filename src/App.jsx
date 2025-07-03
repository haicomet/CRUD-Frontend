import React from "react";
import { createRoot } from "react-dom/client";
import "./AppStyles.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./components/Home";
import AllCampuses from "./components/AllCampuses";
import AllStudents from "./components/AllStudents";
import SingleStudent from "./components/SingleStudent";
import SingleCampus from "./components/SingleCampus";
import AddStudent from "./components/AddStudent";
import AddCampus from "./components/addCampus";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/campuses" element={<AllCampuses />} />
        <Route path="/students" element={<AllStudents />} />
        <Route path="/campuses/:id" element={<SingleCampus />} />
        <Route path="/students/:id" element={<SingleStudent />} />
        <Route path="/add-student" element={<AddStudent/>} />
        <Route path="/add-campus" element={<AddCampus/>} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
        <Route path="*" element={<h1>All Campuses</h1>} />

      </Routes>
    </Router>
  );
};

const root = createRoot(
  document.getElementById('root')
);
root.render(<App/>);
export default App;
