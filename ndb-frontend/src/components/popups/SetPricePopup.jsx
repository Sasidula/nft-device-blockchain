import React, { useState } from "react";
import { PopupWrapper } from "../shared/PopupWrapper";
import { DollarSign } from "lucide-react";
import { Slider } from "@mantine/core";
import "./SetPricePopup.css";

export const SetPricePopup = ({ isOpen, onClose, initialPrice }) => {
    const [price, setPrice] = useState(initialPrice);

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
                            onClick={onClose}
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
