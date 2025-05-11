import React from "react";
import { Smartphone, Laptop, Tablet, Monitor } from "lucide-react";
import "../components/DeviceCard.css";

export const DeviceCard = ({
                               id,
                               type,
                               name,
                               dateAdded,
                               price,
                               isMarketCard = false,
                           }) => {
    const getIcon = () => {
        switch (type?.toLowerCase()) {
            case "phone":
                return <Smartphone size={24} />;
            case "laptop":
                return <Laptop size={24} />;
            case "tablet":
                return <Tablet size={24} />;
            case "other":
            default:
                return <Monitor size={24} />;
        }
    };

    const handleViewDetails = () => {
        localStorage.setItem("device index", id);
        window.location.href = "/detail";
    };

    const formatDate = (isoDate) => {
        if (!isoDate) return "N/A";
        return new Date(isoDate).toLocaleDateString();
    };

    return (
        <div className={device-card ${isMarketCard ? "market-card" : "normal-card"}}>
            <div className={device-icon-wrapper ${isMarketCard ? "market-icon" : ""}}>
                <div className="device-icon">{getIcon()}</div>
            </div>
            <div className={device-details ${isMarketCard ? "" : "flex-grow"}}>
                <h3 className="device-name">{name}</h3>
                {dateAdded && <p className="device-date">Purchased: {formatDate(dateAdded)}</p>}
                {price && <p className="device-price">${price}</p>}
            </div>
            <button className="device-button" onClick={handleViewDetails}>
                View Details
            </button>
        </div>
    );
};