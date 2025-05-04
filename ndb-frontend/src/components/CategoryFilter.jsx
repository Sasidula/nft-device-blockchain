import React from "react"
export const CategoryFilter = ({
                                   categories,
                                   selectedCategory,
                                   onCategoryChange
                               }) => {
    return (
        <div className="flex flex-wrap gap-2 mb-6">
            {categories.map(category => (
                <button
                    key={category}
                    className={`px-4 py-2 rounded-md text-sm font-medium ${
                        selectedCategory === category
                            ? "bg-blue-700 text-white"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                    onClick={() => onCategoryChange(category)}
                >
                    {category}
                </button>
            ))}
        </div>
    )
}
