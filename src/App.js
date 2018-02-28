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
        otherStateProperty: [],
        showPersons : false
    }

    switchNameHandler = (newName) => {
      // DON'T DO THIS: this.state.persons[0].name = 'José Mari';
      this.setState({
          persons: [
              { name: newName, age: 34 },
              { name: 'Guío', age: 34 },
              { name: 'Guttavo', age: 55 }
          ]
      });
    }

    nameChangedHandler = (event) => {
      this.setState({
          persons: [
              { name: 'Chema', age: 34 },
              { name: event.target.value, age: 34 },
              { name: 'Guttavo', age: 55 }
          ]
      });
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow })
    }

    render() {
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px'
    };

    return (
      <div className="App">
          <h1>Hi, I'm a React App</h1>
          {/* This syntax can be inefficient */}
          <button
              style={ style }
              onClick={ this.togglePersonsHandler }>Toggle Persons</button>
          { this.state.showPersons ?
              <div>
                  <Person
                      name={ this.state.persons[0].name }
                      age={ this.state.persons[0].age } />
                  <Person
                      name={ this.state.persons[1].name }
                      age={ this.state.persons[1].age }
                      click={ this.switchNameHandler.bind(this, 'José Mariiiii!!!!') }
                      changed={ this.nameChangedHandler }/>
                  <Person
                      name={ this.state.persons[2].name }
                      age={ this.state.persons[2].age } >My hobbies: racing</Person>
              </div> : null
          }
      </div>
    );
  }
}

export default App;
