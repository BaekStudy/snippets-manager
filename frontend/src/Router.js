import React from "react";
import { BrowserRouter as WebRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/misc/Navbar";

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

function Home() {
  return <>홈페이지</>;
}
function Login() {
  return <>로그인 페이지</>;
}

function Register() {
  return <>회원가입 페이지</>;
}

export default Router;
