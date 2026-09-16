import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";

const ToggleTheme = () =>{
    return (
        <button>
            <MdOutlineDarkMode></MdOutlineDarkMode>
            <span>Dark</span>
        </button>
    )
}

export default ToggleTheme;