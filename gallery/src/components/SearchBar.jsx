import "./components.css"
import { useState } from "react"

function SearchBar ({ results, searchString, handleSearch, handleSubmit }) {
    
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
                <div>
                    <select className="filters" 
                        options={"category"} id="catgeory">
                        <option value="all">ALL</option>
                        <option value="painting">PAINTING</option>
                        <option value="wallart">WALL ART</option>
                        <option value="prints">PRINTS</option>
                        <option value="objects">OBJECTS</option>
                        <option value="goods">GOODS</option>
                    </select>
                </div>
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