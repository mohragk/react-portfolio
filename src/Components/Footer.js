import React, {Component} from "react";
import "./Footer.css";

class Footer extends Component {
    render() {
        let footerStyle = {
            position: 'fixed',
            bottom: '10px',
            left: '10px',
            padding: '0px 20px'
        };

        return (
            <div style={footerStyle} className="footer-content" >
                <p><small>Sander Vermeer &copy; {(new Date().getFullYear())}, all rights reserved</small></p>
            </div>
        );
    }
}

export default Footer;