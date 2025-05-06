import React, { useState } from "react"
import {
    Cpu,
    HardDrive,
    Monitor,
    Battery,
    Shield,
    DollarSign,
    Smartphone,
    Calendar,
    BoxIcon
} from "lucide-react"
import { IconListItem } from "../components/shared/IconList"
import { StatusCard } from "../components/shared/StatusCard"
import { PricePopup } from "../components/popups/PricePopup"
import { WarrantyPopup } from "../components/popups/WarrantyPopup"
import { SetPricePopup } from "../components/popups/SetPricePopup"
export const DeviceDetail = () => {
    const [activePricePopup, setActivePricePopup] = useState(false)
    const [activeWarrantyPopup, setActiveWarrantyPopup] = useState(false)
    const [activeSetPricePopup, setActiveSetPricePopup] = useState(false)
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">iPhone 13 Pro</h1>
            <div className="mb-8 flex justify-center">
                <img
                    src="https://images.unsplash.com/photo-1632661674596-618f44e20e31"
                    alt="iPhone 13 Pro"
                    className="rounded-lg max-h-[400px] object-contain"
                />
            </div>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Device Information</h2>
                <div className="mb-6">
                    <IconListItem
                        icon={BoxIcon}
                        label="NFT Token"
                        value="0x1234...5678"
                    />
                    <IconListItem icon={Smartphone} label="Model" value="A2638" />
                    <IconListItem
                        icon={Calendar}
                        label="Purchase Date"
                        value="March 15, 2023"
                        showDivider={false}
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <StatusCard
                        icon={Shield}
                        title="Warranty Status"
                        value="Active until March 15, 2025"
                        buttonText="View warranty"
                        onButtonClick={() => setActiveWarrantyPopup(true)}
                    />
                    <StatusCard
                        icon={DollarSign}
                        title="Price"
                        value="$2,499.00"
                        buttonText="View price"
                        onButtonClick={() => setActivePricePopup(true)}
                    />
                </div>
                <button
                    onClick={() => setActiveSetPricePopup(true)}
                    className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Sell
                </button>
            </section>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Specifications</h2>
                <div>
                    <IconListItem icon={Cpu} label="Processor" value="Apple M3" />
                    <IconListItem icon={HardDrive} label="Storage" value="256GB" />
                    <IconListItem icon={BoxIcon} label="RAM" value="16GB" />
                    <IconListItem icon={Monitor} label="Display" value='13.3" Retina' />
                    <IconListItem
                        icon={Battery}
                        label="Battery"
                        value="Up to 18 hours"
                        showDivider={false}
                    />
                </div>
            </section>
            <section>
                <h2 className="text-2xl font-semibold mb-4">Service History</h2>
                <div className="space-y-4">
                    <div className="bg-white rounded-lg shadow p-4">
                        <div className="text-gray-500 mb-4" size={24} />
                        <h3 className="font-medium">Software Update</h3>
                        <p className="text-gray-600 text-sm">
                            macOS Sonoma 14.4 installed on April 10, 2024
                        </p>
                    </div>
                </div>
            </section>
            <PricePopup
                isOpen={activePricePopup}
                onClose={() => setActivePricePopup(false)}
                price="$2,499.00"
            />
            <WarrantyPopup
                isOpen={activeWarrantyPopup}
                onClose={() => setActiveWarrantyPopup(false)}
            />
            <SetPricePopup
                isOpen={activeSetPricePopup}
                onClose={() => setActiveSetPricePopup(false)}
                initialPrice={2499}
            />
        </div>
    )
}
