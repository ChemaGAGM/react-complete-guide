import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
      persons: [
          { name: 'Chema', age: 34 },
          { name: 'Guiomar', age: 34 },
          { name: 'Pablo', age: 55 }
      ],
      otherStateProperty: []
  }

  switchNameHandler = () => {
      // DON'T DO THIS: this.state.persons[0].name = 'José Mari';
      this.setState({
          persons: [
              { name: 'José Mari', age: 34 },
              { name: 'Guío', age: 34 },
              { name: 'Guttavo', age: 55 }
          ]
      });
  }

  render() {
    return (
      <div className="App">
          <h1>Hi, I'm a React App</h1>
          <button onClick={ this.switchNameHandler }>Switch name</button> {/*DON'T WRITE PARENTHESIS CALLING HANDLER*/}
          <Person name={ this.state.persons[0].name } age={ this.state.persons[0].age } />
          <Person name={ this.state.persons[1].name } age={ this.state.persons[1].age } />
          <Person name={ this.state.persons[2].name } age={ this.state.persons[2].age } >My hobbies: racing</Person>
      </div>
    );
  }
}

export default App;
