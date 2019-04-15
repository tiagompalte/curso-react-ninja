'use strict'

import React, { Component } from 'react'

class Timer extends Component {
    constructor() {
        console.log("Timer: constructor");
        super();
        this.state = {
            time: 0
        }
        this.timer;
    }

    componentWillReceiveProps(nextProps) {
        console.log('Timer: componentWillReceiveProps', this.props, nextProps);
    }

    componentDidMount() {
        console.log("Timer: componentDidMount");
        this.timer = setInterval(() => this.setState({time: this.state.time + 1}), 1000);
    }

    componentWillUnmount() {
        console.log("Timer: componentWillUnmount");
        clearInterval(this.timer);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('Timer: shouldComponentUpdate', this.state, nextState);
        return this.state.time !== nextState.time;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("Timer: componentWillUpdate", this.props, nextProps);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Timer: componentDidUpdate", this.props, prevProps);
    }

    render() {
        console.log("Timer: render");
        return <div>Timer: {this.state.time}</div>
    }
}
export default Timer;