import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./NavBar.css";
import "../index.css";
import classnames from "classnames";

export default class Navibar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("wheel", this.handleScroll);
  }
  
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("wheel", this.handleScroll);
  }
 
  state = {
    activeTarget: 0,
    activeTargetName: "projects",
    activeColor: "skyblue",
    nextTarget: "contact",
    visible: true,
    menuEntered: false,
  };

  prevVisability = true;
  prevScrollpos = window.pageYOffset;

  targets = [
    {
      id: 0, name: "hello", color: "skyblue"
    },
    {
      id: 1, name: "projects", color: "gold"
    },
    {
      id: 2, name: "art", color: "mediumspringgreen"
    },
    {
      id: 3, name: "contact", color: "crimson"
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
      activeColor: this.targets[current].color,
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

  timer;

  handleScroll = () => { 
    
    if (this.timer) {
      window.clearTimeout(this.timer);
    }
    
    this.timer = window.setTimeout ( 
      () => {
        const entered = this.state.menuEntered && window.innerWidth > 1023;
        if (entered) return;
    
        
        const shouldAlwaysScroll = window.innerWidth < 1024;
        const currentScrollPos = window.pageYOffset;
        const visible = shouldAlwaysScroll ? currentScrollPos < this.prevScrollpos :  currentScrollPos < 1;
    
        
        if (!entered && this.prevVisability !== visible) {  
          this.setState({
            visible
          });
        }
    
    
        this.prevVisability = visible;
        this.prevScrollpos = currentScrollPos;
      }, 13
    );
   
  };


  enterMenu = () => {
    this.setState({ visible: true , menuEntered: true});
  }

  leaveMenu = () => {
      this.setState({ visible: false, menuEntered: false });
  }




  render() {
    let offSet = -20;
    
    return (
      <React.Fragment>
      <nav
        onMouseEnter={this.enterMenu}
        onMouseLeave={this.leaveMenu}  
        
        className={classnames("navi", {"navi-hidden": !this.state.visible})} id="navibar"
      >
        <div className="navi-content">
         
          <h5 className="navi-logo" onClick={this.scrollToTop}>sander vermeer</h5>
          <ul className="navi-items">
            
          <li className="navi-item hidden" id="blue">
              <Link
                activeClass="activeGold"
                to="hello"
                spy={true}
                hashSpy={true}
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
                activeClass="activeGold"
                to="projects"
                spy={true}
                hashSpy={true}
                smooth={true}
                offset={offSet}
                duration={500}
                onSetActive={ (to) => this.onSetActiveHandler(to) }
              >
                projects
              </Link>
            </li>

            <li className="navi-item" id="blue">
              <Link
                activeClass="activeGreen"
                to="art"
                spy={true}
                hashSpy={true}
                smooth={true}
                offset={offSet}
                duration={500}
                onSetActive={ (to) => this.onSetActiveHandler(to) }
              >
                art
              </Link>
            </li>

            <li className="navi-item">
              <Link
                activeClass="activePurple"
                to="contact"
                spy={true}
                hashSpy={true}
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
        
        <div style={{width: '100%', height: '40px'}} >
     </div>
     </nav>
      <nav><div>
      <Link
        onClick={this.getNextTarget}
        to={this.state.activeTargetName}
        smooth={true}
        offset={offSet}
        duration={500}
        style={{position: 'fixed', right: '20px', bottom: '30px', borderBottom: `3px solid ${this.state.activeColor}`, zIndex: '1000' }}
        className={classnames(  "next-button", {"rotate": this.state.activeTargetName === "hello"})}
        >
        <p className="navi-item" style={{fontFamily: 'mdl-ui', fontSize: '24px', margin: '0px'}}>&#xE70D;</p>
      </Link>
    </div></nav>
    </React.Fragment>
    );
  }
}
