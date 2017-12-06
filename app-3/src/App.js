import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()

    this.state = {
      foods: ['pizza','oatmeal', 'ice cream']
    }
  }

  filter(value){
    
  }

  render() {
    let foodsToDisplay = this.state.foods.map( (element, index) => {
      return (
        <h2 key={ index }>{ element }</h2>
      )
    })
    return (
      <div className="App">
        <input onChange={event => filter(event.target.value)}/>
        <div>
          {foodsToDisplay}
        </div>
      </div>
    );
  }
}

export default App;
