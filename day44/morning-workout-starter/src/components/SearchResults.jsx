import React from 'react'

const vertDiv = {display:"flex", flexDirection:"column"}

function SearchResults( {searchResults, handleNextPageClick}) {
    const links = searchResults.map(getResultsLinks)
    
    return (
        <div >
            <div style={vertDiv} className='searchResults-container'>
                {links}
            </div>
            <button onClick={handleNextPageClick} >Next Page</button>
        </div>
        
    )
}

export default SearchResults


function getResultsLinks(result){
    return <a key={result.title} href="/" >{result.title}</a>
}