import React from "react"
import { SearchBar } from "../components/SearchBar"
import { DeviceCard } from "../components/DeviceCard"
export const DevicesPage = () => {
    // Sample device data
    const devices = [
        {
            id: 1,
            type: "phone",
            name: "iPhone 13 Pro",
            dateAdded: "2023-05-12"
        },
        {
            id: 2,
            type: "laptop",
            name: "MacBook Air M2",
            dateAdded: "2023-04-03"
        },
        {
            id: 3,
            type: "tablet",
            name: "iPad Pro 12.9",
            dateAdded: "2023-03-22"
        },
        {
            id: 4,
            type: "phone",
            name: "Samsung Galaxy S22",
            dateAdded: "2023-02-15"
        },
        {
            id: 5,
            type: "laptop",
            name: "Dell XPS 15",
            dateAdded: "2023-01-30"
        },
        {
            id: 6,
            type: "other",
            name: "Apple Watch Series 8",
            dateAdded: "2022-12-25"
        },
        {
            id: 7,
            type: "tablet",
            name: "Samsung Galaxy Tab S8",
            dateAdded: "2022-11-11"
        }
    ]
    return (
        <div className="w-full">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                    Find Your Devices
                </h1>
                <div className="max-w-2xl mx-auto">
                    <SearchBar placeholder="Search Devices by NFT or Serial Number" />
                </div>
            </div>
            <div className="mt-12">
                <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                    My Devices
                </h2>
                <div className="space-y-4">
                    {devices.map(device => (
                        <DeviceCard
                            key={device.id}
                            type={device.type}
                            name={device.name}
                            dateAdded={device.dateAdded}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
