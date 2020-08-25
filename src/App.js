import React, { useState } from "react";
import "./App.css";
import Person from "./components/Person/Person";
import Example from "./components/Example";

function App() {
  const [persons, setPersons] = useState([
    { name: "TEDU 1", age: 5 },
    { name: "TEDU 2", age: 6 },
    { name: "TEDU 3", age: 7 },
  ]);
  const changeNameHandler = (e) => {
    setPersons([
      { name: "TEDU 4", age: 1 },
      { name: "TEDU 5", age: 2 },
      { name: "TEDU 6", age: 3 },
    ]);
  };

  const switchNameHandler = (event) => {
    setPersons([
      { name: event.target.value, age: 1 },
      { name: "TEDU 5", age: 2 },
      { name: "TEDU 6", age: 3 },
    ]);
  };
  return (
    <>
      <div className="App">
        <h1>This is the first ReactJS app</h1>
        <button onClick={() => changeNameHandler()}>Change name</button>
        <Person
          click={() => changeNameHandler()}
          changed={switchNameHandler}
          name={persons[0].name}
          age={persons[0].age}
        />
        <Person
          click={changeNameHandler}
          changed={switchNameHandler}
          name={persons[1].name}
          age={persons[1].age}
        />
        <Person
          changed={switchNameHandler}
          click={changeNameHandler}
          name={persons[2].name}
          age={persons[2].age}
        />

        <Example></Example>
      </div>
    </>
    // React.createElement('div',{className:'App'}, React.createElement('h1',null, 'This is the first ReactJS app'))
  );
}

export default App;
