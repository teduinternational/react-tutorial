import React from "react";
import "./App.css";
import Person from './components/Person';

function App() {
  return (
    <>
      <div className="App">
        <h1>This is the first ReactJS app</h1>
        <Person name="Tedu 1" age="4"/>
        <Person name="Tedu 2" age="5">My hobbies: Teaching</Person>
        <Person name="Tedu 3" age="6"/>
      </div>
    </>
    // React.createElement('div',{className:'App'}, React.createElement('h1',null, 'This is the first ReactJS app'))
  );
}

export default App;
