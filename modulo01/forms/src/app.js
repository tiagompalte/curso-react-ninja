'use strict'

import React, {Component} from 'react'

class App extends Component {

    constructor() {
        super()
        this.state = {
            value: '',
            checked: false,
            select: '2'
        }
    }

    render() {
        return (
            <div>
                <form 
                    onSubmit={(e) => {
                        e.preventDefault()
                        console.log('event', e)
                    }}
                    
                    onChange={(e) => {
                        console.log(e)
                    }}
                    >

                    <input name='input' type='text' defaultValue='Valor inicial' value={this.state.value} onChange={(e) => {
                        console.log(e);
                        this.setState({ value: e.target.value })
                    }} />

                    <br/><br/>

                    <label>
                        <input name='check' type='checkbox' value='my-checkbox' checked={this.state.checked}
                                onChange={(e) => {
                                    this.setState({ checked: !this.state.checked })
                                }} />                                
                        Checkbox
                    </label>

                    <br/><br/>

                    <input type='radio' name='rd' value='1' defaultChecked /> Radio 1
                    <input type='radio' name='rd' value='2' /> Radio 2
                    
                    <br/><br/>

                    <select value={this.state.select} onChange={(e => {
                        this.setState({
                            select: e.target.value
                        })
                    })}>
                        <option value='1'>Opção 1</option>
                        <option value='2'>Opção 2</option>
                        <option value='3'>Opção 3</option>
                    </select>

                    <br/><br/>

                    <select multiple value={['1','2']} onChange={(e => {
                        this.setState({
                            select: e.target.value
                        })
                    })}>
                        <option value='1'>Opção 1</option>
                        <option value='2'>Opção 2</option>
                        <option value='3'>Opção 3</option>
                    </select>

                    <br/><br/>

                    <textarea defaultValue={'text\narea'} />

                    <br/><br/>

                    <button type='submit'>Enviar</button>
                </form>
            </div>
        )
    }
}
export default App