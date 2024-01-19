import "./components.css"
import { useState } from "react"

function SearchBar ({ results, searchString, handleSearch, handleSubmit }) {
    const [filters, setFilters] = useState(false);
    
    const triggerFilters = () => {
        setFilters(!filters)
    }

    return (
        <div>
            <div className="search">
                <input 
                    className="search_input" 
                    type="search" 
                    placeholder="search..."
                    value={searchString}
                    onChange={handleSearch}
                    onKeyDown={handleSubmit}
                    required
                />
                <button className="filter_btn" onClick={triggerFilters}>
                FILTER
                </button>
                <button className="search_btn" onClick={handleSubmit}>
                SEARCH
                </button>
                {results.length > 0 ? (
                   <a href={"/items/all/"}>
                     <button className="reset_btn"> RESET </button> 
                   </a>
                    ) : null }
            </div>
            { filters && <div><p> filters </p></div>}
        </div>
       
    )
}

export default SearchBar