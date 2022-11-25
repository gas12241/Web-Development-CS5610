import React from "react";
import "./App.css";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Rules from "./Rules";
import NormalGame from "./normal_game/NormalGame";
import HardGame from "./hard_game/HardGame";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="my-nav">
          <Link to="/">Home</Link>
          <Link to="/rules">Rules</Link>
          <Link to="/game/normal">NormalGame</Link>
          <Link to="/game/hard">HardGame</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/game/normal" element={<NormalGame />} />
          <Route path="/game/hard" element={<HardGame />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
