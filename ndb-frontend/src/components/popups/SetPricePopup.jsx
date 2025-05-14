import React, {useEffect, useState} from "react";
import { PopupWrapper } from "../shared/PopupWrapper";
import { DollarSign } from "lucide-react";
import { Slider } from "@mantine/core";
import "./SetPricePopup.css";
import axios from "axios";

export const SetPricePopup = ({ isOpen, onClose, initialPrice }) => {
    const [price, setPrice] = useState(initialPrice);
    const [ownershipId, setOwnershipId] = useState(null);
    const [deviceId, setDeviceId] = useState(null);

    // Fetch ownershipId when popup is opened
    useEffect(() => {
        const fetchOwnershipData = async () => {
            const storedDeviceId = localStorage.getItem("device index");
            const storedUser = JSON.parse(localStorage.getItem("user"));

            if (!storedDeviceId || !storedUser) {
                console.error("Missing device ID or user data.");
                return;
            }

            try {
                const response = await axios.get(`http://localhost:8080/api/history/device/${storedDeviceId}`);
                setOwnershipId(response.data.ownershipId);
                setDeviceId(storedDeviceId);
            } catch (error) {
                console.error("Error fetching ownership data:", error);
            }
        };

        if (isOpen) {
            fetchOwnershipData();
        }
    }, [isOpen]);

    const handleConfirm = async () => {
        const listingData = {
            availability: true,
            price: parseFloat(price),
            deviceId: parseInt(deviceId),
            ownershipId: ownershipId,
            createdAt: new Date().toISOString(),
        };

        try {
            await axios.post("http://localhost:8080/api/market", listingData);
            alert("Device listed for sale successfully!");
            onClose();
        } catch (error) {
            console.error("Error posting to market:", error);
            alert("Failed to list device for sale.");
        }
    };

    return (
        <PopupWrapper isOpen={isOpen} onClose={onClose}>
            <div className="price-popup-wrapper">
                <div className="price-header-box">
                    <DollarSign className="price-icon" size={24} />
                    <h3 className="price-title">Set Price</h3>
                    <p className="price-description">Set price to item you wish to sell.</p>
                </div>
                <div className="price-slider-section">
                    <Slider
                        value={price}
                        onChange={setPrice}
                        min={0}
                        max={5000}
                        step={50}
                        label={value => `$${value.toLocaleString()}`}
                        styles={{
                            markLabel: {
                                display: "none"
                            }
                        }}
                    />
                    <div className="price-button-container">
                        <button
                            onClick={handleConfirm}
                            className="price-confirm-button"
                        >
                            Confirm
                        </button>
                    </div>
                </div>
            </div>
        </PopupWrapper>
    );
};
