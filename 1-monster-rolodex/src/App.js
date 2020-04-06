import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
    };
  }
  componentDidMount() {
    // fetch is a javascript method to get the data from url which returns a promise
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ monster: users });
      });
  }
  render() {
    return (
      <div className="App">
        {this.state.monster.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default App;
