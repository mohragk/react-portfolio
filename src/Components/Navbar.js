import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./NavBar.css"

export default class Navibar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };



  render() {
    let offSet = -80;
    return (
      <nav className="navi" id="navibar">
        <div className="navi-content">
         
          <h5 className="navi-logo" onClick={this.scrollToTop}>Sander Vermeer</h5>
          <ul className="navi-items">
            
            
            <li className="navi-item" id="blue">
              <Link
                activeClass="activeGold"
                to="projectsSection"
                spy={true}
                smooth={true}
                offset={offSet}
                duration={500}
              >
                projects
              </Link>
            </li>

            <li className="navi-item">
              <Link
                activeClass="activePurple"
                to="contactSection"
                spy={true}
                smooth={true}
                offset={offSet}
                duration={500}
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
