import React, { useState } from "react";
import { Search, X } from "lucide-react";
import "../components/SearchBar.css";

// SearchBar.jsx
export const SearchBar = ({ placeholder, searchText, setSearchText }) => {
    const handleClear = () => {
        setSearchText("");
    };

    return (
        <div className="searchbar-container">
            <div className="searchbar-input-wrapper">
                <input
                    type="text"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="searchbar-input"
                    placeholder={placeholder}
                />
                <div className="searchbar-icon-left">
                    <Search size={18} className="icon" />
                </div>
                {searchText && (
                    <button onClick={handleClear} className="searchbar-clear-btn">
                        <X size={18} className="icon hover-icon" />
                    </button>
                )}
            </div>
        </div>
    );
};
