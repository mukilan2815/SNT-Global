import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Demandcreating from "./Pages/Demandcreating";
import Example from "./Pages/Table";
import "./index.css";
import Login from "./Pages/Login";
import Complain1 from "./Pages/complain1";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/demandcreating" element={<Demandcreating />} />
          <Route path="/complaint1" element={<Complain1 />} />
          <Route path="/admin" element={<Example />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
