import React from 'react';

import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";

export default function App() {
  return (
      /* <Route path="/home" element={<Home />} /> */
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
      </Routes>
  );
}
