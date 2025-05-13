import React from "react"
import "./StatusCard.css"

export const StatusCard = ({
                               icon: Icon,
                               title,
                               value,
                               buttonText,
                               onButtonClick
                           }) => {
    return (
        <div className="status-card">
            {/* Icon with rounded background */}
            <div className="icon-container">
                <Icon size={28} className="text-black" />
            </div>

            {/* Title & Value */}
            <div className="text-container">
                <div className="title">{title}</div>
                <div className="value">{value}</div>
            </div>

            {/* Button */}
            {buttonText && (
                <button
                    onClick={onButtonClick}
                    className="view-button"
                >
                    {buttonText}
                </button>
            )}
        </div>
    )
}
