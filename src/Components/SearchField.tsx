import { useState, type ChangeEvent } from "react";
import { IoSearch } from "react-icons/io5";



const SearchField = () => {
    const [input, setInput] = useState('')
    return (
        <div>
            <IoSearch />
            <input
                type="search"
                placeholder='Search Tasks...'
                onChange={(e) => setInput(e.target.value)}
            />
        </div>
    );
}

export default SearchField
