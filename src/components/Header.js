import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const path = window.location.pathname;

  return (
    <div className="header">
      <nav className="navbar">
        {/* Company logo + name on the left */}
        <div className="navbar-brand">
          <img
            src="./logo.jpg"   // <-- replace with your logo file path
            alt="Company Logo"
            className="navbar-logo"
          />
          
        </div>

        {/* Navigation links on the right */}
        <ul className="navbar-links">
          <li className={`${path === '/' ? 'active' : ''}`}>
            <Link to="/">Home</Link>
          </li>
          <li className={`${path === '/projects' ? 'active' : ''}`}>
            <Link to="/products">Products</Link>
          </li>
          <li className={`${path === '/courses' ? 'active' : ''}`}>
            <Link to="/chemicals">ChemicalsList</Link>
          </li>
          <li className={`${path === '/contact' ? 'active' : ''}`}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
