import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'

const url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch='

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchValue: '',
      searchResults: []
    }
  }
    componentDidMount(){
      this.getSearchResults()
  }
  
  handleInputChange = (e) => {
    this.setState({
      searchValue: e.target.value,
    })
  }

  handleSearchClick = () => {
    this.getSearchResults()
  }

  handleKeyPress = (e) => {
    if(e.key === 'Enter') this.getSearchResults()
  }

  getSearchResults = async() => {
    try {
      const response = await fetch(`${url}${this.state.searchValue}`)
      const data = await response.json()

      this.setState({
        searchResults: data.query.search
      }) 
      }
    catch(err) {
      console.log(err);
      this.setState ({
          err:true,
          errorMasage: err.message,
      })
    }
  }

  render() {
    return (
      <div className="App">
        <SearchBar
          searchValue={this.state.searchValue}
          handleInputChange={this.handleInputChange}
          handleSearchClick={this.handleSearchClick}
          handleKeyPress={this.handleKeyPress}
        />
        <SearchResults searchResults={this.state.searchResults} />
    </div>
    );
  }
}

export default App;
