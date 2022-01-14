import React, { Component } from "react";
import "./App.css";
import { CardList } from "./Componets/CardList/card-list.component";
import { SearchBox } from "./Componets/searchbox/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      seachFiels: "",
    };
    // this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (e) => {
    this.setState({ seachFiels: e.target.value });
  };
  render() {
    const { monsters, seachFiels } = this.state;
    const filterMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(seachFiels.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodx</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />
        <CardList key="1" monsters={filterMonsters} />
      </div>
    );
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((responce) =>
      responce.json().then((f) => this.setState({ monsters: f }))
    );
  }
}

export default App;
