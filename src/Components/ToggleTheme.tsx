import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";

const ToggleTheme = () => {
    return (
        <button className="themeButton">
            <MdOutlineDarkMode className="themeIcon"></MdOutlineDarkMode>
            <span>Dark</span>
        </button>
    )
}

export default ToggleTheme;