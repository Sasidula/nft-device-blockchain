import React, { useState } from "react";
import { PopupWrapper } from "../shared/PopupWrapper";
import {
    DollarSign,
    Cpu,
    HardDrive,
    Monitor,
    Battery,
    BoxIcon
} from "lucide-react";
import { IconListItem } from "../shared/IconList";
import "./ConfirmBuyPopup.css";
import axios from "axios";

export const ConfirmBuyPopup = ({ isOpen, onClose, device }) => {
    const [publicKey, setPublicKey] = useState("");

    const specs = device?.ownership?.devices?.spec?.[0] || {};

    const user = JSON.parse(localStorage.getItem("user"));
    if (!user?.user) {
        console.error("User not found in localStorage.");
        return;
    }

    const marketId = localStorage.getItem("market index");
    console.log("Market index:", marketId);

    const handleConfirm = async () => {
        const userPublicKey = device.ownership.publicKey; // your localStorage key must include this
        if (publicKey !== userPublicKey) {
            alert("Public keys do not match!");
            return;
        }

        const deviceData = device.ownership.devices;

        // Construct updated device payload
        const updatedDevice = {
            name: deviceData.name,
            brand: deviceData.brand,
            modelNumber: deviceData.modelNumber,
            serialNumber: deviceData.serialNumber,
            deviceType: deviceData.deviceType,
            originalPrice: deviceData.originalPrice,
            releaseDate: deviceData.releaseDate,
            purchaseDate: deviceData.purchaseDate,
            imageBlob: deviceData.imageBlob,
            nftTokenId: deviceData.nftTokenId,
            registeredBy: {
                user: deviceData.registeredBy.user
            },
            currentOwner: {
                user: user.user
            },
            blacklisted: deviceData.blacklisted,
            createdAt: deviceData.createdAt
        };

        try {
            const response = await fetch(`http://localhost:8080/api/devices/${deviceData.deviceId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedDevice),
            });

            if (response.ok) {
                alert("Device purchase confirmed!");
                onClose(); // close popup
            } else {
                alert("Failed to confirm purchase.");
            }
        } catch (err) {
            console.error("Error confirming device:", err);
            alert("An error occurred.");
        }

        const ownershipPayload = {
            device_id: deviceData.deviceId,
            from_user_id: deviceData.currentOwner.user,
            to_user_id: user.user,
            transfer_date: new Date().toISOString(),
            transaction_hash: null,
            publicKey: null,
            privateKey: null
        };

        await axios.post('http://localhost:8080/api/history', ownershipPayload);

        const marketPayload = {
            availability: false,
            price: deviceData.price,
            deviceId: deviceData.deviceId,
            ownershipId: deviceData.ownershipId
        };

        await axios.post(`http://localhost:8080/api/market/${marketId}`, marketPayload);

    };


    return (
        <PopupWrapper isOpen={isOpen} onClose={onClose}>
            <div className="confirm-popup-wrapper">
                <div className="confirm-section">
                    <DollarSign className="confirm-icon" size={24} />
                    <h3 className="confirm-title">Request Item</h3>
                    <p className="confirm-description">
                        Buy and transfer a device from another user.
                    </p>
                    <div className="confirm-input-wrapper">
                        <label className="confirm-label">
                            Device public key
                        </label>
                        <div className="confirm-input-button-group">
                            <input
                                type="text"
                                value={publicKey}
                                onChange={e => setPublicKey(e.target.value)}
                                className="confirm-input"
                            />
                            <button
                                className="confirm-button"
                                onClick={handleConfirm}>
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="spec-title">Specifications</h3>
                    <div className="spec-box">
                        <IconListItem icon={Cpu} label="Processor" value={specs.processor || "Unknown"} />
                        <IconListItem icon={HardDrive} label="Storage" value={specs.storage || "Unknown"} />
                        <IconListItem icon={BoxIcon} label="RAM" value={specs.ram || "Unknown"} />
                        <IconListItem icon={Monitor} label="Display" value={specs.display || "Unknown"} />
                        <IconListItem icon={Battery} label="Battery" value={specs.battery || "Unknown"} showDivider={false} />
                    </div>
                </div>
            </div>
        </PopupWrapper>
    );
};
