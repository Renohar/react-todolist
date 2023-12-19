import React from 'react'

const SearchItem = ({search,setSearch}) => {
    return (
        <div className="SearchItem">
            <form onSubmit={(e)=>e.preventDefault()}>
                <label htmlFor="search"></label>
                
                <input
                id="search"
                role = 'searchbox'
                type= "text"
                placeholder="Search Items"
                value= {search}
                onChange = {(e) => setSearch(e.target.value)} 
                />
            </form>
        </div>
    )
}

export default SearchItem
