import React, { Component } from 'react'
import Hello from './Hello'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: 'Malik'
    }
  }
  render () {
    return (
      <div className='App'>
        <p>
          <Hello name={this.state.username} />
        </p>
      </div>
    )
  }
}

export default App
