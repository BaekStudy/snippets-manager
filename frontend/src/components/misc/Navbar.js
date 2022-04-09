import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">홈페이지 </Link>
      <Link to="/login">로그인 </Link>
      <Link to="/register">회원가입</Link>
    </div>
  );
}

export default Navbar;
