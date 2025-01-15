import React, { useState } from "react";
import "../styles/navbar.css";

const Navbar: React.FC = () => {
    const [theme, setTheme] = useState<"light" | "dark">("light");
  
    const toggleTheme = () => {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
      document.body.setAttribute("data-theme", newTheme);
    };
  

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">MyPortfolio</h1>
      <ul className="navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button onClick={toggleTheme} className="theme-toggle">
        {theme === "light" ? "🌙" : "☀️"}
      </button>
    </nav>
  );
};

export default Navbar;