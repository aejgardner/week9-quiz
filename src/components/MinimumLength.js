import React, { Component } from "react";

class MinimumLength extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: "",
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        let currentValue = e.currentTarget.value;
        this.setState({ input: currentValue });
    }

    render() {
        const { input } = this.state;
        const { length } = this.props;
        let style = {
            visibility: input.length > 0 && input.length <= length ? "visible" : "hidden",
            color: "red"
        }
        return (
            <>
                <input value={input} onChange={e => this.handleChange(e)} />
                <p style={style} className="mt-2">
                    Too short!
                </p>
            </>
        )
    }
}

export default MinimumLength;