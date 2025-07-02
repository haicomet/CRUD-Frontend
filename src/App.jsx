import React from "react";
import { createRoot } from "react-dom/client";
import "./AppStyles.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes } from "react-router";
import AllCampuses from "./components/AllCampuses";
import AllStudents from "./components/AllStudents";
import SingleStudent from "./components/SingleStudent";
import SingleCampus from "./components/SingleCampus";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/campuses" element={<AllCampuses />} />
        <Route path="/students" element={<AllStudents />} />
        <Route path="/campuses/:id" element={<SingleCampus />} />
        <Route path="/students/:id" element={<SingleStudent />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
