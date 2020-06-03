import React from 'react'

class ScrollProgressBar extends React.Component {
    state = {
        amountScrolled: 0
    }
    componentDidMount() {
        window.addEventListener("scroll", this.scrollProgress)
    }

    scrollProgress = () => {
        const scrollPosition = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
        const amountScrolled = `${scrollPosition / height * 100}%`;
        
        this.setState({
            amountScrolled
        })
    }

    render() {
        const containerStyle = {
            position: 'fixed',

            width: '100vw',
            height: '4px',
            top: 0,
            left: 0,
            zIndex: 9999999999,
        }

        const barStyle = {
            height: '4px',
            background: '#BFC1FF',
            width: this.state.amountScrolled
        }

        return (
            <div style={containerStyle}>
                <div style={barStyle}></div>
            </div>
        )
    }
}

export default ScrollProgressBar