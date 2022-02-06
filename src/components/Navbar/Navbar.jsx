import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import images from "../../constants/images";
function Navbar(props) {
  const [toogleMenu, setToogle] = useState(false);
  return (
    <div className="app__navbar">
      <a className="app__navbar_logo">
        <img src={images.logo} alt="hip"></img>
      </a>
      <div className="app__navbar_links flex__center">
        <p className="app__openans">
          <a href="#home">Home</a>
        </p>
        <p className="app__openans">
          <a href="#about">About</a>
        </p>
        <p className="app__openans">
          <a href="#manual">Manual</a>
        </p>
        <p className="app__openans">
          <a href="#contact">Contact us</a>
        </p>
      </div>

      <GiHamburgerMenu
        className="app__navbar-hamburger"
        color="white"
        fontSize={40}
       
        onClick={() => setToogle(true)}
      />

      {toogleMenu && (
        <div className="app__navbar_overlay">
          <ImCross
            color="white"
            fontSize={40}
            className="overlay__close"
            onClick={() => setToogle(false)}
          />
          <div className="app__mobile-links">
            <p className="app__mobile-openans" style={{ transform: "none" }}>
              <a href="#">Home</a>
            </p>
            <p className="app__mobile-openans">
              <a href="#about">About</a>
            </p>
            <p className="app__mobile-openans">
              <a href="#manual">Manual</a>
            </p>
            <p className="app__mobile-openans">
              <a href="#contact">Contact us</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
