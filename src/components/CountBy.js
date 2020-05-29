import React, { Component } from "react";

class CountBy extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        const { step } = this.props;
        const { value } = this.state;

        this.setState({ value: value + step })
    }

    render() {
        const { value } = this.state;
        return (
            <p style={{ cursor: "pointer" }} onClick={this.handleClick}>{value}</p>
        )
    }
}

export default CountBy;