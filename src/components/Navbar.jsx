import React from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Navbar.css";
import logoImg from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* روابط التنقل - Navigation Links */}
      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            الرئيسية
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            المدونة
          </NavLink>
        </li>

        {/* التعديل هنا: استخدام HashLink بدلاً من a href العادية */}
        <li>
          <HashLink smooth to="/#about">
            من نحن
          </HashLink>
        </li>

        <li>
          <HashLink smooth to="/#services">
            خدماتنا
          </HashLink>
        </li>
      </ul>

      {/* الشعار - Logo */}
      <div className="logo-container">
        <Link to="/">
          <img src={logoImg} alt="Roya Logo" className="navbar-logo" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
