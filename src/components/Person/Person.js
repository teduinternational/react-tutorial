import React from "react";
import './Person.css';

const Person = (props) => {
  const styles = {
    color:'red',
    fontWeight:'bold'
  }
  return (
    <div className="Person">
        <p style={styles} onClick={props.click}>This is a {props.name}. I'm {props.age} year old.</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name}></input>
    </div>
  );
};

export default Person;
