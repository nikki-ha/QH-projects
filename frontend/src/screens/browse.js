import React, {useState} from "react";
import '../styles/browse.css';

const BrowseScreen = () => {
    const [query, setQuery] = useState("");

    return (
        <>
            <h2 id="header-text">Browse</h2>
            <input type="text" class="search" value={query} onChange={e => {setQuery(e.target.value)}}/>
            <input type="submit" value="search" />
            <p>0 results found for {query}.</p>
        </>
        
    )
}

export default BrowseScreen;