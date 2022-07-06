import { Component } from 'react';
import CardList from './component/card-list/card-list.component.jsx';
import SearchBox from './component/search-box/search-box.component.jsx';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchStr: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState(
      () => {
        return { monsters: users };
      },
      () => {
        // console.log(this.state)
    }))
  }

  onSearchChange = (event) => {
    const searchStr = event.target.value.toLocaleLowerCase();

    this.setState({searchStr})
  }

  render() {
    const { monsters, searchStr } = this.state;
    const filteredMonster = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchStr);
    });
    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          onChangeHandler={this.onSearchChange}
          placeholder="Search monsters..."
        />
        <CardList monsters={filteredMonster}/>
      </div>
    );
  }
}

export default App;
