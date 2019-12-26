import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state ={
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Steh', age: 26 }
    ],
    otherState: ' other state'
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Steh', age: 26 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>App Working</h1>
      </div>
    )
    }
  };

export default App;
