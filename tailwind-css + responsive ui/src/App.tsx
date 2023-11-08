import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./about/Page";
import Services from "./services/Page";

function App() {
  return (
    <>
      <Routes>
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;

// update the correct commit message