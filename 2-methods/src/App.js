import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meaningOfLife: 47 + this.props.increment,
    };
  }

  handleClick = () => {
    // BAD PRACTICE
    // this.setState({ meaningOfLife: this.state.meaningOfLife + 1 }, () =>
    //   console.log(this.state.meaningOfLife)
    // );
    this.setState(
      (prevState, prevProps) => ({
        meaningOfLife: prevState.meaningOfLife + prevProps.increment,
      }),
      () => console.log(this.state.meaningOfLife)
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.meaningOfLife}</p>
          <button onClick={this.handleClick}>Update State</button>
        </header>
      </div>
    );
  }
}

export default App;
