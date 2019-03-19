import React, {Component} from "react";
import "./Footer.css";
import classnames from "classnames";

class Footer extends Component {
    state = {
        prevScrollpos: window.pageYOffset,
        visible: true
    };
    
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }
      
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        const { prevScrollpos } = this.state;
      
        const currentScrollPos = window.pageYOffset;
        const visible = prevScrollpos > currentScrollPos;
      
        this.setState({
          prevScrollpos: currentScrollPos,
          visible
        });
      };

    render() {
        

        return (
            <div className={classnames("footer-content", {"footer-content-hidden": !this.state.visible})} >
                <p><small>sander vermeer &copy; {(new Date().getFullYear())}, all rights reserved</small></p>
            </div>
        );
    }
}

export default Footer;