'use strict'

import React, { Component } from 'react'
import Timer from './timer'

class App extends Component {
    constructor() {
        console.log('APP: constructor');
        super()
        this.state = {
            time: 0,
            showTimer: true
        }
    }

    componentWillMount() {
        console.log('APP: componentWillMount');
    }

    componentDidMount() {
        console.log('APP: componentDidMount');
    }

    render() {
        console.log('APP: render');
        return (
            <div>
                {this.state.showTimer && <Timer time={this.state.time} />}
                <button onClick={() => {
                    this.setState({showTimer: !this.state.showTimer})
                }}>Show / Hide timer</button>
                <button onClick={() => {
                    this.setState({time: this.state.time + 10})
                }}>Change props</button>
            </div>
        )
    }
}

export default App