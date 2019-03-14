import React, { Component } from "react";
import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };



  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
         
          <h3 className="nav-logo" onClick={this.scrollToTop}>Sander Vermeer</h3>
          <ul className="nav-items">
            <li className="nav-item">
              <Link
                activeClass="active"
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 1
              </Link>
            </li>
            
            <li className="nav-item">
              <Link
                activeClass="active"
                to="sectionCard1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Projects
              </Link>
            </li>

            <li className="nav-item">
              <Link
                activeClass="active"
                to="contactSection"
                spy={true}
                smooth={true}
                offset={-70}
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
