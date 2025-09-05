import { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
const closeMenu = () => setIsOpen(false);
  return (
    <nav className="navbar">
      <img src="/asset/shared/logo.svg" alt="logo" className="navbar-logo" />
      {/* Hamburger Icon */}
      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Slide-out menu */}
      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <Link to="/home" onClick={closeMenu}>Home</Link>
        <Link to="/destination" onClick={closeMenu}>Destination</Link>
        <Link to="/crew" onClick={closeMenu}>Crew</Link>
        <Link to="/technology" onClick={closeMenu}>Technology</Link>
      </div>
    </nav>
  );
};

export default Navbar;

