import { Component } from "react";
import "./App.css";
import CardList from "./component/card-list/card-list.component";
import SearchBox from "./component/search-box/search-box.component";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        {/*<input*/}
        {/*  className="search-box"*/}
        {/*  type="search"*/}
        {/*  placeholder="search monsters"*/}
        {/*  onChange={onSearchChange}*/}
        {/*/>*/}
        {/*        {filteredMonsters.map((monster) => {
          return (
            <div>
              <h1 key={monster.id}>{monster.name}</h1>
            </div>
          );
        })}*/}
        <SearchBox
          className="search-box"
          onChangeHandler={onSearchChange}
          placeholder="search monsters"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
