import React, {Component} from "react";
import "./Footer.css";
import classnames from "classnames";

class Footer extends Component {
    state = {
        prevScrollpos: window.pageYOffset,
        visible: true,
    };
    
    prevVisability = true;
    prevScrollpos = window.pageYOffset;

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
      
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

   
    timer;

    handleScroll = () => {
      
        if (this.timer) {
            window.clearTimeout(this.timer);
        }

        this.timer = window.setTimeout ( 
            () => {
                const currentScrollPos = window.pageYOffset;
                const visible = this.prevScrollpos > currentScrollPos;
            
                if (this.prevVisability !== visible) {
                    this.setState({
                visible,
                });
                }

                this.prevVisability = visible;
                this.prevScrollpos = currentScrollPos;
            }, 
            13
        );
        
      };

    render() {
        

        return (
            <div className={classnames("footer-content", {"footer-content-hidden": !this.state.visible})} >
                <p><small>sander vermeer &copy; {(new Date().getFullYear())}</small></p>
            </div>
        );
    }
}

export default Footer;