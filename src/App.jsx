import React, { useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import SideNav from "./Components/SideNav/SideNav";
import TextComp from "./Components/TextComp/TextComp";
import Contact from "./Components/Contact/Contact";
import About from "./Components/About/About";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [showSideNav, setShowSideNav] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    // event listener to update width (only one event listener)
    const updateWidth = () => {
      setWidth((w) => window.innerWidth);
    };
    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  useEffect(() => {
    // event listener for close sidenav when clicked on content (This cannot be singe event listener because this gets updated with width)
    const contentEle = document.querySelector(".appTextInner");
    const handleClearSideNav = () => {
      const sideNavEle = document.querySelector(".appSideNav");
      if (width <= 992 && sideNavEle.style.display === "block") {
        setShowSideNav(false);
      }
    };
    contentEle.addEventListener("click", handleClearSideNav);
    return () => {
      contentEle.removeEventListener("click", handleClearSideNav);
    };
  }, [width]);

  const handleBtnToggle = () => {
    // To toggel side nav using button (if width is greater than 992px, by default side nav is visible, you can't hide)
    setShowSideNav((s) => !s);
  };

  useEffect(() => {
    // side nav display (responsive)
    const element = document.querySelector(".appSideNav");
    // if width is more than 992px, by default it is visible (no use of showSideNav state)
    if (width > 992) {
      element.style.display = "block";
    }
    // initially showSideNav is false, on btn click it will turn to true and then due to state value change the code will render agin(will run again)
    // so when it is true and width is less than 992px it will display side nav
    if (showSideNav && width <= 992) {
      element.style.display = "block";
    }
    // when it is false it will hide side nav
    if (!showSideNav && width <= 992) {
      element.style.display = "none";
    }
  });

  return (
    <>
      <Router>
        <div className="appHeader">
          <Header handleBtn={handleBtnToggle} />
        </div>
        <div className="appSideNav">
          <div className="appSideNavInner">
            <SideNav />
          </div>
        </div>
        <div className="appText">
          <div className="appTextInner">
            <Routes>
              <Route exact path="/" element={<TextComp />}></Route>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/contact" element={<Contact />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}
