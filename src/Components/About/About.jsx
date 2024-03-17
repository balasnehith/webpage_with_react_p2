import React from "react";
import './About.css'
import profilePic from "../../assets/snehith.jpg"
export default function TextComp() {
  return (
    <div className="aboutContainer">
      <img className="profilePic" src={profilePic}/>
      <p><strong> Author:</strong>&nbsp;Bala Snehith Reddy Tirumalareddy</p>
      <p>Masters in Computational Science</p>
      <p>Web development enthusiast</p>
    </div>
  );
}
