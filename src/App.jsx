import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";
import HomePage from "./components/page/HomePage";
import AboutPage from "./components/page/AboutPage";
import ProjectsPage from "./components/page/ProjectsPage";
import ErrorPage from "./components/page/ErrorPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <div>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/about-me" element={<AboutPage />} />
            <Route exact path="/projects" element={<ProjectsPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
