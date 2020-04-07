import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    // fetch is a javascript method to get the data from url which returns a promise
    fetch("http://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ monsters: users });
      });
  }

  // handleChange(event) {
  //   /* console.log(e.target.value);*/                              IF USING THIS WAY OF METHOD THEN WE HAVE TO BIND IT IN THE CONSTRUCTOR  this.handleChange = this.handleChange.bind(this);
  //   this.setState({ searchField: event.target.value }, () => {
  //     console.log(this.state);
  //   });
  // }

  handleChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    // const monsters = this.state.mosters
    // const searchField = this.state.searchField
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
