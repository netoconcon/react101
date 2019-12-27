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
    otherState: ' other state',
    showPersons: false
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
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

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div> 
          {this.state.persons.map(person => {
            return <Person 
            name={person.name}
            age={person.age} />
          })}
     </div> 
      );
    }

    return (
      <div className="App">
        <h1>Hi i am a react app</h1>
        <p>This is really working</p>
        <button 
          onClick={this.togglePersonsHandler}>
          Toggle Name
        </button>
        {persons}

      </div>
    )
    }
  };

export default App;
