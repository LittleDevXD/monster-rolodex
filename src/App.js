import { useEffect, useState } from 'react';
import CardList from './component/card-list/card-list.component.jsx';
import SearchBox from './component/search-box/search-box.component.jsx';

import './App.css';

const App = () => {
  console.log("rendered")
  const [monsters, setMonsters] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => setMonsters(data))
  }, [])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchString(searchFieldString);
  }

  const onTitleChange = (event) => {
    const titleString = event.target.value;
    setTitle(titleString);
  }

  const filteredMonster = monsters.filter(monster => {
    return monster.name.toLocaleLowerCase().includes(searchString)
  })

  return (
    <div className="App">
        <h1 className="app-title">{title || "Monster Rolodex"}</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="Search monsters..."
        />
        <SearchBox
          onChangeHandler={onTitleChange}
          placeholder="Change title"
        />
        <CardList monsters={filteredMonster}/>
    </div>
  )
}

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchStr: ''
//     }
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => this.setState(
//       () => {
//         return { monsters: users };
//       },
//       () => {
//         // console.log(this.state)
//     }))
//   }

//   onSearchChange = (event) => {
//     const searchStr = event.target.value.toLocaleLowerCase();

//     this.setState({searchStr})
//   }

//   render() {
//     const { monsters, searchStr } = this.state;
//     const filteredMonster = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchStr);
//     });
//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           onChangeHandler={this.onSearchChange}
//           placeholder="Search monsters..."
//         />
//         <CardList monsters={filteredMonster}/>
//       </div>
//     );
//   }
// }

export default App;
