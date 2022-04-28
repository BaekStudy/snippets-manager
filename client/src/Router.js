import React from "react";
import { BrowserRouter as WebRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Home/Navbar";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";

function Router() {
  return (
    <WebRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </WebRouter>
  );
}

export default Router;
