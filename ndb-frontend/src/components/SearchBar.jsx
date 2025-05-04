import React, { useState } from "react"
import { Search, X } from "lucide-react"
export const SearchBar = ({ placeholder }) => {
    const [searchText, setSearchText] = useState("")
    const handleClear = () => {
        setSearchText("")
    }
    return (
        <div className="relative w-full">
            <div className="relative">
                <input
                    type="text"
                    value={searchText}
                    onChange={e => setSearchText(e.target.value)}
                    className="w-full px-12 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={placeholder}
                />
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Search size={18} className="text-gray-400" />
                </div>
                {searchText && (
                    <button
                        onClick={handleClear}
                        className="absolute inset-y-0 right-0 pr-4 flex items-center"
                    >
                        <X size={18} className="text-gray-400 hover:text-gray-600" />
                    </button>
                )}
            </div>
        </div>
    )
}
