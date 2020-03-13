import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";

const url =
  "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=";
const pageOffsetPrefix = "&sroffset=";

function App() {
  const [selectedItem, setSelectedItem] = useState("Select Something");
  const [searchValue, setSearchValue] = useState("");
  const [pageOffset, setPageOffset] = useState(0);
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = e => {
    setSearchValue(e.target.value);
  };
  const handleKeyPress = e => {
    if (e.key === "Enter") handleSearchClick();
  };

  const handleNextPageClick = () => {
    console.log("Next page please!");
    setPageOffset(pageOffset + 10);
  };

  const handleSearchClick = async () => {
    if (!searchValue) return;
    const searchUrl = `${url}${searchValue}${pageOffsetPrefix}${pageOffset}`;
    console.log("searchUrl", searchUrl);
    const response = await fetch(searchUrl);
    const data = await response.json();
    console.log("Data", data);
    setSearchResults(data.query.search);
  };

  useEffect(() => {
    handleSearchClick();
  }, [pageOffset]);

  return (
    <div className="App">
      <SearchBar
        handleKeyPress={handleKeyPress}
        searchValue={searchValue}
        handleSearchClick={handleSearchClick}
        handleInputChange={handleInputChange}
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
      />
      <SearchResults
        searchResults={searchResults}
        handleNextPageClick={handleNextPageClick}
      />
    </div>
  );
}

export default App;
