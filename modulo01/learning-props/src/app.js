'use strict'

import React, { Component } from 'react'
//import Title from './title'
import Square from './square'
//import LikeButton from './like-button'
//import SearchButton from './search-button'
import Button from './button'

class App extends Component {
    constructor() {
        super()
        this.state = {
            color: 'green'
        }
    }
    render() {
        return (
            <div>
                <Square color={this.state.color} />

                {['red', 'green', 'blue'].map((color) => (
                    <Button key={color} handleClick={() => this.setState({color})}>{color}</Button>
                ))}
            </div>
        )
    }
}

// State
// class App extends Component {
//     constructor () {
//         super()
//         this.state = {
//             text: 'Tiago'
//         }
//     }
//     render() {
//         return (
//             <div onClick={() => (this.setState({
//                 text: 'outro nome'
//             }))}>
//                 {this.state.text}
//             </div>
//         )
//     }
// }

// Composição
// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <LikeButton />
//                 <SearchButton />
//             </div>
//         )
//     }
// }

// Events
// class App extends Component {
//     render() {
//         return (
//             <div onClick={(e) => {
//                 alert('clicou')
//             }}>
//                 <Square />
//             </div>
//         )
//     }
// }

// KEY
// class App extends Component {
//     render() {
//         return (
//             <div>
//                 {['blue', 'red', 'green'].map((square) => (
//                     <Square key={square} color={square} />
//                 ))}
//             </div>
//         )
//     }
// }

// ES6
// class App extends Component {
//     render() {
//         return (
//             <div className='container'>
//                 <Title name='Tiago' />
//             </div>
//         )
//     }
// }

// ES5
// const App = React.createClass({
//     render: function() {
//         return (
//             <div className='container'>
//                 <Title name='Tiago' />
//             </div>
//         )
//     }
// })

export default App