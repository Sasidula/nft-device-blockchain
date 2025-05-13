import React, { useState } from "react"
import { PopupWrapper } from "../shared/PopupWrapper"
import { AlertTriangle } from "lucide-react"
import { DeviceCard } from "../DeviceCard"
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
            <div className="text-center mb-6">
                <h2 className="text-2xl font-semibold mb-2">
                    Report Lost or Stolen Device
                </h2>
                <p className="text-gray-600">
                    Flag your device as lost or stolen to help prevent unauthorized resale
                    and alert the community.
                </p>
            </div>
            <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow">
                    <div className="flex items-start mb-4">
                        <div className="mr-4">
                            <div className="p-2 bg-blue-100 rounded-full">
                                <AlertTriangle size={24} className="text-blue-600" />
                            </div>
                        </div>
                        <div>
                            <h3 className="font-medium">Step 1</h3>
                            <p className="text-sm text-gray-600 mb-2">Select Device</p>
                            <p className="text-xs text-gray-500">
                                Choose the device you need to report
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {devices.map(device => (
                            <div
                                key={device.id}
                                onClick={() => setSelectedDevice(device.id)}
                                className={`cursor-pointer ${
                                    selectedDevice === device.id ? "ring-2 ring-blue-500" : ""
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
                <div className="bg-white rounded-lg p-6 shadow">
                    <div className="flex items-start mb-4">
                        <div className="mr-4">
                            <div className="p-2 bg-red-100 rounded-full">
                                <AlertTriangle size={24} className="text-red-600" />
                            </div>
                        </div>
                        <div>
                            <h3 className="font-medium">Step 2</h3>
                            <p className="text-sm text-gray-600 mb-2">Provide Details</p>
                            <p className="text-xs text-gray-500">
                                Here explain your current situation
                            </p>
                        </div>
                    </div>
                    {selectedDevice && (
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Accident Description
                                </label>
                                <textarea
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                    rows={4}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Describe what happened"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Contact (Email)
                                </label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    onClick={handleSubmit}
                                    className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                                >
                                    Submit Report
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </PopupWrapper>
    )
}
