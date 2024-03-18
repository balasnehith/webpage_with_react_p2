import React, { useEffect, useState } from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";

export default function Header(props) {
  const [activeTab, setActiveTab] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const presentPath = location.pathname;
    if (presentPath === "/") setActiveTab("home");
    if (presentPath === "/about") setActiveTab("about");
    if (presentPath === "/contact") setActiveTab("contact");
  }, [location]);

  return (
    <div className="headerContainer">
      <button onClick={props.handleBtn} className="navbtn">
        <i className="fas fa-bars"></i>
      </button>
      <ul className="navList">
        <li className={`${activeTab === "home" ? "active" : ""}`} onClick={() => setActiveTab("home")}>
          <Link className="linkStyle" to="/">
            Home
          </Link>
        </li>
        <li className={`${activeTab === "about" ? "active" : ""}`} onClick={() => setActiveTab("about")}>
          <Link className="linkStyle" to="/about">
            About
          </Link>
        </li>
        <li className={`${activeTab === "contact" ? "active" : ""}`} onClick={() => setActiveTab("contact")}>
          <Link className="linkStyle" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
