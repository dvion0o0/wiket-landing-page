import React from "react";
import Logo from "../Assets/svg/wiket-logo.svg";
import { AiOutlineAlignRight } from "react-icons/ai";
function Navbar({ openToggle }) {
  return (
    <nav>
      <div className="nav-center">
        <img src={Logo} alt="logo" />
        <div className="toggle-container">
          <button className="btn">Get started</button>
          <AiOutlineAlignRight className="toggle" onClick={openToggle} />
        </div>
        <ul className="nav-links">
          <li>
            <a href="/" className="nav-link">
              Benefits
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              Your Profile
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              Connections
            </a>
          </li>
          <li>
            <a href="/" className="nav-link">
              Plans & Pricing
            </a>
          </li>
          <li>
            <button className="btn">Get started</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
