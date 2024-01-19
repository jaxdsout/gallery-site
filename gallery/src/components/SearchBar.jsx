import "./components.css"
import { useState } from "react"

function SearchBar ({ searchString, handleSearch, handleSubmit }) {
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
                />
                <button className="filter_btn" onClick={triggerFilters}>
                FILTER
                </button>
                <button className="search_btn" type="submit" onClick={handleSubmit}>
                SEARCH
                </button>
            </div>
            { filters && <div><p> filters </p></div>}
        </div>
       
    )
}

export default SearchBar