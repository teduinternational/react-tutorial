import React, { useState } from 'react';
import './App.css';
import Person from './components/Person/Person';
import Example from './components/Example';

function App() {
  const [showPerson, setShowPerson] = useState(true);
  const [persons, setPersons] = useState([
    { name: 'TEDU 1', age: 5 },
    { name: 'TEDU 2', age: 6 },
    { name: 'TEDU 3', age: 7 },
  ]);

  const deletePerson = (personIndex)=>{
    console.log(personIndex);
    let newPersons = [...persons];
    newPersons.splice(personIndex,1);
    setPersons(newPersons);
  }
  const togglePersons = () => {
    setShowPerson(!showPerson);
  };

  let personList = null;

  if (showPerson === true) {
    personList = (
      <div>
        {persons.map((item,index) => {
          return (
            <Person key={index}
              click={() => deletePerson(index)}
              name={item.name}
              age={item.age}
            />
          );
        })}
      </div>
    );
  }

  return (
    <>
      <div className="App">
        <h1>This is the first ReactJS app</h1>
        <button onClick={() => togglePersons()}>Toggle Persons</button>
        {personList}
      </div>
    </>
    // React.createElement('div',{className:'App'}, React.createElement('h1',null, 'This is the first ReactJS app'))
  );
}

export default App;
