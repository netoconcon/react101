import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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
        { name: 'Neto', age: 29 },
        { name: 'Steh', age: 26 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi i am a react app</h1>
        <p>This is really working</p>
        <button onClick={() => this.switchNameHandler('Maximilian!!')}>
          Switch Name
        </button>
        <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age}
        />
        <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        />
        <Person
        name={this.state.persons[2].name}
        age={this.state.persons[2].age}
        />

      </div>
    )
    }
  };

export default App;
