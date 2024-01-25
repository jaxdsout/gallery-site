import "./components.css"
import { useState } from "react"

function SearchBar ({ 
    results, 
    searchString, 
    handleSearch, 
    handleSubmit,  
    handleFilter,
    filters
    }) {

    const [userChoice, setUserChoice] = useState('all')

    async function  handleFilterChange (event) {
        setUserChoice(event.target.value)
        console.log(userChoice)
        handleFilter(userChoice)
    }


    return (
        <div className="search">
            <form onSubmit={handleSubmit}>
                <input 
                className="search_input" 
                type="search" 
                placeholder="search..."
                value={searchString}
                onChange={handleSearch}
                onKeyDown={handleSubmit}
                required
                />
                <select 
                    className="filters_dropdown" 
                    value={userChoice}
                    onChange={handleFilterChange}
                    id="category"
                >
                    <option value="all">ALL</option>
                    <option value="painting">PAINTING</option>
                    <option value="wallart">WALL ART</option>
                    <option value="prints">PRINTS</option>
                    <option value="objects">OBJECTS</option>
                    <option value="goods">GOODS</option>
                </select>
                <button type="submit" className="search_btn" >
                SEARCH
                </button>
            </form>
            {results.length > 0 ? (
                <a href={"/items/all/"}>
                    <button className="reset_btn"> RESET </button> 
                </a>
                ) : null }
        </div>
       
    )
}

export default SearchBar