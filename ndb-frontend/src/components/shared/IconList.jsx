import React from "react"

export const IconListItem = ({
                                 icon: Icon,
                                 label,
                                 value,
                                 showDivider = true
                             }) => {
    return (
        <>
            <div className="icon-list-item">
                <div className="icon-label">
                    <Icon size={30} />
                    <span>{label}</span>
                </div>
                <div className="icon-value">{value}</div>
            </div>
            {showDivider && <div className="divider" />}
        </>
    )
}
