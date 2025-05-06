import React from "react"
export const IconListItem = ({
                                 icon: Icon,
                                 label,
                                 value,
                                 showDivider = true
                             }) => {
    return (
        <>
            <div className="flex items-center py-3">
                <div className="flex items-center w-48">
                    <Icon size={20} className="text-gray-500 mr-3" />
                    <span className="text-gray-600">{label}</span>
                </div>
                <span className="text-gray-900">{value}</span>
            </div>
            {showDivider && <div className="border-b border-gray-200" />}
        </>
    )
}
