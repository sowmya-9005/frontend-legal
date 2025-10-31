import React, { useState } from "react";
import { FaBalanceScale, FaGlobe } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = ({ user, setUser }) => {
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");
  const navigate = useNavigate();

  const toggleLang = () => setLangOpen(!langOpen);
  const selectLang = (lang) => {
    setSelectedLang(lang);
    setLangOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="logo">
          <FaBalanceScale className="logo-icon" />
          LegalEase
        </Link>

        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/rights">Know Your Rights</Link>
          <Link to="/emergency">Emergency</Link>
          <Link to="/about">About</Link>
          <Link to="/contact" className="active">
            Contact
          </Link>
        </nav>
      </div>

      <div className="header-right">

        {user ? (
          <>
            <span className="welcome-msg">
              Welcome, {user.name} ({user.role})
            </span>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="login-btn">
              Login
            </Link>
            <Link to="/signup" className="signup-btn">
              Sign Up
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
