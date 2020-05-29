import React, { Component } from "react";

class HideMe extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({ clicked: true })
    }

    render() {
        const { children } = this.props;
        const { clicked } = this.state;
        let style = {
            visibility: clicked === false ? "visible" : "hidden",
            cursor: "pointer"
        }
        return (
            <p style={style} onClick={this.handleClick} >{children}</p >
        )
    }
}

export default HideMe;