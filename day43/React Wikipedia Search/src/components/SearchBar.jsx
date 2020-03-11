import React, { Component } from 'react'

class SearchBar extends Component {
    render() {
        const { searchValue, handleInputChange, handleSearchClick, handleKeyPress } = this.props
        return (
            <div className='searchBar-container' onKeyUp={handleKeyPress}>
                <input className='searchBar-input' value={searchValue} onChange={handleInputChange} />
                <button className='searchBar-button' onClick={handleSearchClick}>Search</button>
            </div>
        )
    }
}

export default SearchBar