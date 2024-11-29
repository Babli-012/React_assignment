import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Crud from "./Components/Crud";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Crud" element={<Crud/>} />
      </Routes>
    </Router>
  );
}

export default App;
