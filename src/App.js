import './App.css';

import React, { useState } from 'react';

import Person from './components/Person/Person';

function App() {
  const [showPerson, setShowPerson] = useState(true);
  const [persons, setPersons] = useState([
    { id: 1, name: 'TEDU 1', age: 5 },
    { id: 2, name: 'TEDU 2', age: 6 },
    { id: 3, name: 'TEDU 3', age: 7 },
  ]);

  const deletePerson = (personIndex) => {
    console.log(personIndex);
    let newPersons = [...persons];
    newPersons.splice(personIndex, 1);
    setPersons(newPersons);
  };
  const togglePersons = () => {
    setShowPerson(!showPerson);
  };

  const handleNameChanged = (event, id) => {
    const personIndex = persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...persons[personIndex],
    };

    person.name = event.target.value;

    const newPersons = [...persons];

    newPersons[personIndex] = person;

    setPersons(newPersons);
  };

  let personList = null;

  if (showPerson === true) {
    personList = (
      <div>
        {persons.map((item, index) => {
          return (
            <Person
              key={index}
              click={() => deletePerson(index)}
              name={item.name}
              age={item.age}
              changed={(event) => {
                handleNameChanged(event, item.id);
              }}
            />
          );
        })}
      </div>
    );
  }

  return (
    <>
      <div className='App'>
        <h1>This is the first ReactJS app</h1>
        <button onClick={() => togglePersons()}>Toggle Persons</button>
        {personList}
      </div>
    </>
    // React.createElement('div',{className:'App'}, React.createElement('h1',null, 'This is the first ReactJS app'))
  );
}

export default App;
