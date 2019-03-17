import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./NavBar.css"

export default class Navibar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  state = {
    activeTarget: 0,
    activeTargetName: "projectsSection",
    activeColor: "skyblue"
  };

  targets = [
    {
      id: 0, name: "helloSection", color: "skyblue"
    },
    {
      id: 1, name: "projectsSection", color: "gold"
    },
    {
      id: 2, name: "contactSection", color: "crimson"
    },
  ];

  getNextTarget = () => {
    let total = this.targets.length;
    let current = this.state.activeTarget;
    current++ ;
    
    current = current >= total ? 0 : current;


    this.setState({
      activeTarget: current,
      activeTargetName: this.targets[current].name,
      activeColor: this.targets[current].color
    });

  };

  onSetActiveHandler = (name) => {
    let shittyArray = this.targets.map(
      
      (targ) => {
        let num = 0;
        if (targ.name === name) num++;
        return num;
      }
    );

    let index = shittyArray.indexOf(1) + 1;

    if (index > this.targets.length - 1) index = 0;

    let newName = this.targets[index].name;
    
    this.setState(
      {
        activeTarget: index,
        activeTargetName: newName,
        activeColor: this.targets[index].color
      }
    );
  };

  render() {
    let offSet = -80;
    return (
      <nav className="navi" id="navibar">
        <div className="navi-content">
         
          <h5 className="navi-logo" onClick={this.scrollToTop}>sander vermeer</h5>
          <ul className="navi-items">
            
          <li className="navi-item" id="blue">
              <Link
                activeClass="activeGold"
                to="helloSection"
                spy={true}
                smooth={true}
                offset={offSet}
                duration={500}
                onSetActive={ (to) => this.onSetActiveHandler(to) }
              >
                
              </Link>
            </li>
            
            <li className="navi-item" id="blue">
              <Link
                id="ps"
                activeClass="activeGold"
                to="projectsSection"
                spy={true}
                smooth={true}
                offset={offSet}
                duration={500}
                onSetActive={ (to) => this.onSetActiveHandler(to) }
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
                onSetActive={ (to) => this.onSetActiveHandler(to) }
              >
                contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Link
            onClick={this.getNextTarget}
            to={this.state.activeTargetName}
            smooth={true}
            offset={offSet}
            duration={500}
            style={{position: 'fixed', right: '120px', bottom: '30px', borderBottom: `2px solid ${this.state.activeColor}`}}
            className="navi-item"
            //onSetActive={ (to) => this.onSetActiveHandler(to) }
            >
            next.
          </Link>
        </div>
      </nav>
    );
  }
}
