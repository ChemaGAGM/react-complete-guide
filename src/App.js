import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
      persons: [
          { name: 'Chema', age: 34 },
          { name: 'Guiomar', age: 34 },
          { name: 'Pablo', age: 55 }
      ]
  }

  render() {
    return (
      <div className="App">
          <h1>Hi, I'm a React App</h1>
          <button>Switch name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} >My hobbies: racing</Person>
      </div>
    );
  }
}

export default App;
