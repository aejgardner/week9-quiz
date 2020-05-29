import React, { Component } from "react";

class CountBy extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clickCount: 0
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { clickCount } = this.state

        this.setState({ clickCount: clickCount + 1 })
    }

    render() {
        const { clickCount } = this.state;
        return (
            <p onClick={this.handleClick}>{clickCount % 2 === 0 ? "Even" : "Odd"}</p>
        )
    }
}

export default CountBy;