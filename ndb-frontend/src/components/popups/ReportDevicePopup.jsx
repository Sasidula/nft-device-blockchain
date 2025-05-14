import React, {useEffect, useState} from "react"
import { PopupWrapper } from "../shared/PopupWrapper"
import { AlertTriangle } from "lucide-react"
import { DeviceCard } from "../DeviceCard"
import "./ReportDevicePopup.css"

export const ReportDevicePopup = ({ isOpen, onClose }) => {
    const [selectedDevice, setSelectedDevice] = useState(null)
    const [description, setDescription] = useState("")
    const [email, setEmail] = useState("")
    const [devices, setDevices] = useState([]);

    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        if (user?.user) {
            fetch(`http://localhost:8080/api/devices/owner/${user.user}`)
                .then(res => res.json())
                .then(data => setDevices(data))
                .catch(err => console.error("Failed to fetch devices", err));
        }
    }, []);

    const handleSubmit = async () => {
        if (!selectedDevice) return;

        if (!description.trim() || !email.trim()) {
            alert("Please fill in both the description and email.");
            return;
        }

        try {
            // 1. Get device details
            const response = await fetch(`http://localhost:8080/api/devices/${selectedDevice}`);
            if (!response.ok) {
                alert("Failed to get device info.");
                return;
            }

            const deviceData = await response.json();

            // 2. Mark it blacklisted
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
                blacklisted: false,
                createdAt: deviceData.createdAt
            };

            // 3. Update device via PUT
            const putResponse = await fetch(`http://localhost:8080/api/devices/${selectedDevice}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedDevice)
            });

            console.log("PUT response:", putResponse);

            if (putResponse.ok) {
                alert("Device successfully reported and flagged as blacklisted.");
                onClose();
            } else {
                alert("Failed to update the device.");
            }
        } catch (err) {
            console.error("Error reporting device:", err);
            alert("An error occurred while reporting the device.");
        }
    };

    return (
        <PopupWrapper isOpen={isOpen} onClose={onClose}>
            <div className="popup-header">
                <h2>Report Lost or Stolen Device</h2>
                <p>
                    Flag your device as lost or stolen to help prevent unauthorized resale
                    and alert the community.
                </p>
            </div>
            <div className="popup-content">
                <div className="popup-section">
                    <div className="popup-step">
                        <div className="step-icon blue">
                            <AlertTriangle size={24} className="icon-blue" />
                        </div>
                        <div>
                            <h3>Step 1</h3>
                            <p className="subtitle">Select Device</p>
                            <p className="description">
                                Choose the device you need to report
                            </p>
                        </div>
                    </div>
                    <div className="device-grid">
                        {devices.map(device => (
                            <div
                                key={device.deviceId}
                                onClick={() => setSelectedDevice(device.deviceId)}
                                className={`device-item ${selectedDevice === device.deviceId ? "selected" : ""}`}
                            >
                                <DeviceCard
                                    type={device.type}
                                    name={device.name}
                                    dateAdded={device.dateAdded}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="popup-section">
                    <div className="popup-step">
                        <div className="step-icon red">
                            <AlertTriangle size={24} className="icon-red" />
                        </div>
                        <div>
                            <h3>Step 2</h3>
                            <p className="subtitle">Provide Details</p>
                            <p className="description">Here explain your current situation</p>
                        </div>
                    </div>

                    {selectedDevice && (
                        <div className="form-area">
                            <div>
                                <label>Accident Description</label>
                                <textarea
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                    rows={4}
                                    placeholder="Describe what happened"
                                />
                            </div>
                            <div>
                                <label>Contact (Email)</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="submit-btn-wrapper">
                                <button onClick={handleSubmit}>Submit Report</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </PopupWrapper>
    )
}
