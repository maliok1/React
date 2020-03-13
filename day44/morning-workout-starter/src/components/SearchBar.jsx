import React, { useState } from "react";
import Dropdown from "./Dropdown";

function SearchBar(props) {
  const {
    searchValue,
    handleInputChange,
    handleSearchClick,
    handleKeyPress,
    selectedItem,
    setSelectedItem
  } = props;

  const listItems = [<p key={0}>10</p>, <p key={1}>20</p>, <p key={2}>30</p>];
  return (
    <div className="searchBar-container" onKeyUp={handleKeyPress}>
      <input
        className="searchBar-input"
        value={searchValue}
        onChange={handleInputChange}
      />
      <Dropdown selectedItem={selectedItem} setSelectedItem={setSelectedItem}>
        {listItems}
      </Dropdown>
      <button className="searchBar-button" onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
