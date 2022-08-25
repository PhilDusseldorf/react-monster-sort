
import React from 'react';
import './App.css';
import CardList from  './components/card-list/card-list.component.jsx';
import SearchBar from './components/search-bar/search-bar.component.jsx';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    }
  };

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then ((response) => response.json())
      .then ((users) => this.setState(
        () => {
          return { monsters: users };
        }
      )
    );
  };

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  }

  
  render () {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <h1 className="app-title">Monster Sort</h1>
        <SearchBar className="monster-search" onChangeHandler={this.onSearchChange} placeholder="find monsters"/>
        <CardList items={filteredMonsters}/>
      </div>
    )
  };
}

export default App;
