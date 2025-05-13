import React, { useState } from "react"
import { PopupWrapper } from "../shared/PopupWrapper"
import { AlertTriangle } from "lucide-react"
import { DeviceCard } from "../DeviceCard"
import "./ReportDevicePopup.css"

export const ReportDevicePopup = ({ isOpen, onClose, devices }) => {
    const [selectedDevice, setSelectedDevice] = useState(null)
    const [description, setDescription] = useState("")
    const [email, setEmail] = useState("")

    const handleSubmit = () => {
        // Handle submission logic here
        onClose()
    }

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
                                key={device.id}
                                onClick={() => setSelectedDevice(device.id)}
                                className={`device-item ${
                                    selectedDevice === device.id ? "selected" : ""
                                }`}
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
