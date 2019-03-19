import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./NavBar.css";
import classnames from "classnames";

export default class Navibar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
 
  state = {
    activeTarget: 0,
    activeTargetName: "projectsSection",
    activeColor: "skyblue",
    visible: true,
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
    
    let num = -10;
    for (let item of this.targets)
    {
      if(item.name === name) num = item.id + 1;
    }
    
    if (num < 0) return;

    let index = (num > this.targets.length -1) ? 0 : num;

    let newName = this.targets[index].name;
    let newColor = this.targets[index].color;
    
    this.setState(
      {
        activeTarget: index,
        activeTargetName: newName,
        activeColor: newColor,
      }
    );
  };

  handleScroll = () => {  
    const currentScrollPos = window.pageYOffset;
    const visible = currentScrollPos < 100;
  
    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  enterMenu = () => {
    this.setState({ visible: true });
  }

  leaveMenu = () => {
    let timeoutLength = 300;
     setTimeout(() => {
      this.setState({ visible: false });
     }, timeoutLength);
  }

  handleClick = () => {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    let offSet = (this.state.activeTargetName === "helloSection") ? -80 : -20;
    return (
      <nav
        onMouseEnter={this.enterMenu}
        onMouseLeave={this.leaveMenu}  
        onClick={this.handleClick}
        className={classnames("navi", {"navi-hidden": !this.state.visible})} id="navibar"
      >
        <div className="navi-content">
         
          <h5 className="navi-logo" onClick={this.scrollToTop}>sander vermeer</h5>
          <ul className="navi-items">
            
          <li className="navi-item hidden" id="blue">
              <Link
                activeClass="activeGold"
                to="helloSection"
                spy={true}
                smooth={true}
                offset={offSet}
                duration={500}
                onSetActive={ (to) => this.onSetActiveHandler(to) }
                style= {{display: 'none', margin: '0px'}}
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
            style={{position: 'fixed', right: '40px', bottom: '30px', borderBottom: `2px solid ${this.state.activeColor}`}}
            className="navi-item next-button"
            >
            next
          </Link>
        </div>
      </nav>
    );
  }
}
