import React, { useState } from "react"
import { SearchBar } from "../components/SearchBar"
import { DeviceCard } from "../components/DeviceCard"
import { CategoryFilter } from "../components/CategoryFilter"
export const MarketPage = () => {
    const categories = ["All Devices", "Phones", "Laptops", "Tablets", "Other"]
    const [selectedCategory, setSelectedCategory] = useState("All Devices")
    // Sample market devices
    const marketDevices = [
        {
            id: 1,
            type: "phone",
            name: "iPhone 14 Pro Max",
            price: "$1,099"
        },
        {
            id: 2,
            type: "laptop",
            name: "MacBook Pro 16",
            price: "$2,499"
        },
        {
            id: 3,
            type: "tablet",
            name: "iPad Air",
            price: "$599"
        },
        {
            id: 4,
            type: "phone",
            name: "Samsung Galaxy S23 Ultra",
            price: "$1,199"
        },
        {
            id: 5,
            type: "laptop",
            name: "Dell XPS 13 Plus",
            price: "$1,299"
        },
        {
            id: 6,
            type: "tablet",
            name: "Samsung Galaxy Tab S9",
            price: "$849"
        },
        {
            id: 7,
            type: "phone",
            name: "Google Pixel 7 Pro",
            price: "$899"
        },
        {
            id: 8,
            type: "laptop",
            name: "Lenovo ThinkPad X1",
            price: "$1,649"
        },
        {
            id: 9,
            type: "other",
            name: "Apple Watch Ultra",
            price: "$799"
        }
    ]
    // Filter devices based on selected category
    const filteredDevices =
        selectedCategory === "All Devices"
            ? marketDevices
            : marketDevices.filter(device => {
                const category = selectedCategory.toLowerCase().slice(0, -1) // Remove 's' from end
                return device.type === category
            })
    return (
        <div className="w-full">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                    Shop New Devices
                </h1>
                <div className="max-w-2xl mx-auto">
                    <SearchBar placeholder="Search for devices, brands, or categories" />
                </div>
            </div>
            <div className="mt-12">
                <CategoryFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredDevices.map(device => (
                        <DeviceCard
                            key={device.id}
                            type={device.type}
                            name={device.name}
                            price={device.price}
                            isMarketCard={true}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
