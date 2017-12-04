import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state ={
      userInput: ''
    }
  }

  handleChange(input){
    this.setState({userInput: input})
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <input onChange={event => this.handleChange(event.target.value)}/>
          <p>{this.state.userInput}</p>
        </p>
      </div>
    );
  }
}

export default App;
