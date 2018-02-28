import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
          { id: 'asdf', name: 'Chema', age: 34 },
          { id: 'asdfasdf', name: 'Guiomar', age: 34 },
          { id: 'asdfasdf1', name: 'Pablo', age: 55 }
        ],
        otherStateProperty: [],
        showPersons : false
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(person => {
            return person.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({ persons: persons });
    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons]; //create a copy of state variable (ES6), don't manipulate it directly
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    }

    render() {
    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px'
    };

    let persons = null;

    if (this.state.showPersons) {
        persons = (
            <div>
                { this.state.persons.map( (person, index) => {
                    return <Person
                        click={ () => this.deletePersonHandler(index) }
                        name={ person.name }
                        age={ person.age }
                        key={ person.id }
                        changed={ (event) => this.nameChangedHandler(event, person.id) }/>
                }) }
            </div>
        );
    }

    return (
      <div className="App">
          <h1>Hi, I'm a React App</h1>
          {/* This syntax can be inefficient */}
          <button
              style={ style }
              onClick={ this.togglePersonsHandler }>Toggle Persons</button>

          { persons }

          </div>
    );
  }
}

export default App;
