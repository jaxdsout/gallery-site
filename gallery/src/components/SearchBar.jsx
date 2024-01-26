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
            <form className="search_form" onSubmit={handleSubmit}>
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
                    <option className='filter_option' value="all">ALL</option>
                    <option className='filter_option' value="painting">PAINTING</option>
                    <option className='filter_option' value="wallart">WALL ART</option>
                    <option className='filter_option' value="prints">PRINTS</option>
                    <option className='filter_option' value="objects">OBJECTS</option>
                    <option className='filter_option' value="goods">GOODS</option>
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