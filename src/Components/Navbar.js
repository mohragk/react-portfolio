import React, { Component } from "react";
import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };



  render() {
    let offSet = -80;
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
         
          <h3 className="nav-logo" onClick={this.scrollToTop}>Sander Vermeer</h3>
          <ul className="nav-items">
            
            
            <li className="nav-item" id="blue">
              <Link
                activeClass="activeGold"
                to="projectsSection"
                spy={true}
                smooth={true}
                offset={offSet}
                duration={500}
              >
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link
                activeClass="activePurple"
                to="contactSection"
                spy={true}
                smooth={true}
                offset={offSet}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
