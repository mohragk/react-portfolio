import React, {Component} from "react";

class Footer extends Component {
    render() {
        let footerStyle = {
            position: 'fixed',
            bottom: '10px',
            left: '10px',
            padding: '0px 20px'
        };

        return (
            <div style={footerStyle}>
                <p><small>Sander Vermeer &copy; {(new Date().getFullYear())}, all rights reserved</small></p>
            </div>
        );
    }
}

export default Footer;