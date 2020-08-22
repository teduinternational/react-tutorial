import React, { Component } from "react";

const Person = (props) => {
  return (
    <div>
        <p>This is a {props.name}. I'm {props.age} year old.</p>
        <p>{props.children}</p>
    </div>
  );
};

// class Person extends Component {
//   render() {
//     return (
//       <p>This is a {this.props.name}. I'm {this.props.age} year old.</p>
//     );
//   }
// }
export default Person;
