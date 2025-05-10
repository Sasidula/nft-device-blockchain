import React from "react";
import { Smartphone, Laptop, Tablet, Monitor } from "lucide-react";
import "../components/DeviceCard.css";

export const DeviceCard = ({
                               type,
                               name,
                               dateAdded,
                               price,
                               isMarketCard = false,
                           }) => {
    const getIcon = () => {
        switch (type) {
            case "phone":
                return <Smartphone size={24} />;
            case "laptop":
                return <Laptop size={24} />;
            case "tablet":
                return <Tablet size={24} />;
            case "other":
                return <Monitor size={24} />;
            default:
                return <Smartphone size={24} />;
        }
    };

    return (
        <div
            className={`device-card ${isMarketCard ? "market-card" : "normal-card"}`}
        >
            <div className={`device-icon-wrapper ${isMarketCard ? "market-icon" : ""}`}>
                <div className="device-icon">{getIcon()}</div>
            </div>
            <div className={`device-details ${isMarketCard ? "" : "flex-grow"}`}>
                <h3 className="device-name">{name}</h3>
                {dateAdded && <p className="device-date">Date Added: {dateAdded}</p>}
                {price && <p className="device-price">{price}</p>}
            </div>
            <button className="device-button">View Details</button>
        </div>
    );
};
