/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

export default class Counter extends Component {

    state = {
        count: 0,
    };

    increseCount = () => {
        // this.setState((prevState) => ({count: prevState.count + 1 }))
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    render() {
        const { render } = this.props;
        const {count} = this.state;
        return render(count, this.increseCount);
    }
}
