import React from "react"
export const StatusCard = ({
                               icon: Icon,
                               title,
                               value,
                               buttonText,
                               onButtonClick
                           }) => {
    return (
        <div className="bg-white rounded-lg shadow p-4 relative">
            <div className="absolute top-4 left-4">
                <Icon size={24} className="text-gray-500" />
            </div>
            <div className="mt-12">
                <div className="text-gray-600">{title}</div>
                <div className="text-lg font-semibold mt-1">{value}</div>
            </div>
            {buttonText && (
                <button
                    onClick={onButtonClick}
                    className="absolute bottom-4 right-4 text-blue-600 hover:text-blue-700 font-medium"
                >
                    {buttonText}
                </button>
            )}
        </div>
    )
}
