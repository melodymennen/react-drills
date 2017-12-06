import React, { Component } from 'react';
import './App.css';

class Login extends Component {
    constructor(){
        super()

        this.state = {
            username: '',
            password: ''
        }
    }

    handleUserChange(value){
        this.setState({username: value})
    }

    handlePassChange(value){
        this.setState({password: value})
    }

    login(){
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

  render() {
    return (
      <div className="App">
        <input onChange={event => this.handleUserChange(event.target.value)}/>
        <input onChange={event => this.handlePassChange(event.target.value)}/>
        <button >Login</button>
      </div>
    );
  }
}

export default Login;
