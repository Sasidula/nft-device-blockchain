import React from "react"
import "./CategoryFilter.css"

export const CategoryFilter = ({
                                   categories,
                                   selectedCategory,
                                   onCategoryChange
                               }) => {
    return (
        <div className="category-filter-wrapper">
            <div className="category-tabs">
                {categories.map(category => (
                    <button
                        key={category}
                        className={`tab-button ${selectedCategory === category ? "active" : ""}`}
                        onClick={() => onCategoryChange(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>
        </div>
    )
}
