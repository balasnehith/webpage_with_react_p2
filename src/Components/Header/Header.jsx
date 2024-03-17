import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default function Header(props) {

  return (
    <div className="headerContainer">
      <button onClick={props.handleBtn} className="navbtn"><i className="fas fa-bars"></i></button>
      <ul className="navList">
        <li ><Link className="linkStyle" to="/">Home</Link></li>
        <li ><Link className="linkStyle" to="/about">About</Link></li>
        <li ><Link className="linkStyle" to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
}
