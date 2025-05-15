import React, { useState } from "react";
import { PopupWrapper } from "../shared/PopupWrapper";
import "./AddRepairLogPopup.css";

export const AddRepairLogPopup = ({ isOpen, onClose }) => {
    const [nftCode, setNftCode] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [device, setDevice] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchDeviceByNFT = async () => {
        if (!nftCode) return;
        setLoading(true);
        setError("");
        try {
            const response = await fetch(`http://localhost:8080/api/devices/nft/${nftCode}`);
            if (!response.ok) throw new Error("Device not found");
            const data = await response.json();
            setDevice(data);
        } catch (err) {
            setDevice(null);
            setError("Invalid NFT code or device not found.");
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async () => {
        const user = JSON.parse(localStorage.getItem("user"));
        const payload = {
            device: device.deviceId,
            date: new Date().toISOString(),
            description,
            center_name: title,
            added_by: {
                user: user.user
            }
        };

        try {
            const response = await fetch("http://localhost:8080/api/repairs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error("Failed to add repair log");
            }

            alert("Repair log added successfully!");
            onClose();
            setNftCode("");
            setTitle("");
            setDescription("");
            setDevice(null);
        } catch (err) {
            alert("Error adding repair log: " + err.message);
        }
    };

    return (
        <PopupWrapper isOpen={isOpen} onClose={onClose}>
            <div className="popup-header">
                <h2>Repair Logs</h2>
                <p>Entered repair logs will be added to the respective device</p>
            </div>
            <div className="popup-form">
                <div className="form-group">
                    <label>NFT Code</label>
                    <div style={{ display: "flex", gap: "10px" }}>
                        <input
                            type="text"
                            value={nftCode}
                            onChange={e => setNftCode(e.target.value)}
                            placeholder="Enter NFT code"
                        />
                        <button onClick={fetchDeviceByNFT}>Check</button>
                    </div>
                </div>

                {loading && <p>Loading device...</p>}
                {error && <p className="error">{error}</p>}

                {device && (
                    <div className="repair-form-details">
                        <div className="form-group">
                            <label>Repair Center</label>
                            <input
                                type="text"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                placeholder="Enter Repair Center Name"
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
