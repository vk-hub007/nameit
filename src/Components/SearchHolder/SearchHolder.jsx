import React from 'react';
import './SearchHolder.css'

const SearchHolder = ({ textChanged }) => {

    return (
        <div className="Search-container">

            <input
                onChange={(event) => textChanged(event.target.value)}
                placeholder="Type something" className="search-input" />

        </div>
    )
}

export default SearchHolder;