import { useState, type ChangeEvent } from "react";
import { IoSearch } from "react-icons/io5";
import './css/searchField.css'


const SearchField = () => {
    const [input, setInput] = useState('')
    return (
        <div className="searchContainer">
            <IoSearch className="searchIcon"/>
            <input
                type="search"
                placeholder='Search Tasks...'
                onChange={(e) => setInput(e.target.value)}
            />
        </div>
    );
}

export default SearchField
