import "./components.css"

function SearchBar ({ results, searchString, handleSearch, handleSubmit })  {
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
                <button className="search_btn" onClick={handleSubmit}>
                SEARCH
                </button>
                {results.length > 0 ? (
                   <a href={"/items/all/"}>
                     <button className="reset_btn"> RESET </button> 
                   </a>
                    ) : null }
            </div>
        </div>
       
    )
}

export default SearchBar