import React from "react"
import { Smartphone, Laptop, Tablet, Monitor } from "lucide-react"
export const DeviceCard = ({
                               type,
                               name,
                               dateAdded,
                               price,
                               isMarketCard = false
                           }) => {
    const getIcon = () => {
        switch (type) {
            case "phone":
                return <Smartphone size={24} />
            case "laptop":
                return <Laptop size={24} />
            case "tablet":
                return <Tablet size={24} />
            case "other":
                return <Monitor size={24} />
            default:
                return <Smartphone size={24} />
        }
    }
    return (
        <div
            className={`bg-blue-50 rounded-lg shadow p-4 ${
                isMarketCard ? "flex flex-col h-full" : "flex items-start"
            }`}
        >
            <div
                className={`${
                    isMarketCard ? "flex items-center justify-center mb-3" : "mr-4"
                }`}
            >
                <div className="bg-white p-3 rounded-full">{getIcon()}</div>
            </div>
            <div className={`${isMarketCard ? "" : "flex-1"}`}>
                <h3 className="font-medium text-gray-800">{name}</h3>
                {dateAdded && (
                    <p className="text-sm text-gray-500">Date Added: {dateAdded}</p>
                )}
                {price && (
                    <p className="text-sm font-bold text-gray-800 mt-1">{price}</p>
                )}
            </div>
            <button className="mt-3 px-4 py-2 rounded-md bg-blue-700 text-white text-sm hover:bg-blue-800">
                View More
            </button>
        </div>
    )
}
