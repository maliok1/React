import React, { Component } from 'react'

class SearchResults extends Component {



    render() {
        const {searchResults} = this.props

        const searchResultsDisplay = searchResults.map((result, index) => {
            return (
              <div key={`title-${index}`}>
                <a href={`https://en.wikipedia.org/wiki/${result.title}`} 
                > 
                 {
                  result.title
                  }
                 </a> 
              </div>
            )
        })

        return (
            <div className='searchResults-container'>
               <div> 
                   <h2>Articles from your search</h2> {searchResultsDisplay}</div>
            </div>
)
    }
}

export default SearchResults