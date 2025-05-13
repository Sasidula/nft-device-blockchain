import React, { useState } from "react";
import { PopupWrapper } from "../shared/PopupWrapper";
import "./AddRepairLogPopup.css"; // Link to your CSS file

export const AddRepairLogPopup = ({ isOpen, onClose }) => {
    const [nftCode, setNftCode] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = () => {
        // Handle submission logic here
        onClose();
    };

    const isNFTValid = nftCode.length > 0;

    return (
        <PopupWrapper isOpen={isOpen} onClose={onClose}>
            <div className="popup-header">
                <h2>Repair Logs</h2>
                <p>
                    Entered repair logs will be added to the respective device
                </p>
            </div>
            <div className="popup-form">
                <div className="form-group">
                    <label>NFT Code</label>
                    <input
                        type="text"
                        value={nftCode}
                        onChange={e => setNftCode(e.target.value)}
                        placeholder="Enter NFT code"
                    />
                </div>
                {isNFTValid && (
                    <div className="repair-form-details">
                        <div className="form-group">
                            <label>Title</label>
                            <input
                                type="text"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                placeholder="Enter repair title"
                            />
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <textarea
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                                rows={4}
                                placeholder="Enter repair description"
                            />
                        </div>
                        <div className="submit-container">
                            <button onClick={handleSubmit}>
                                Submit
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </PopupWrapper>
    );
};
