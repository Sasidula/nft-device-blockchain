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
import "../components/DeviceDetail.css"
import {Text, Title} from "@mantine/core";
import {Header} from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";

export const DeviceDetail = () => {
    const [activePricePopup, setActivePricePopup] = useState(false)
    const [activeWarrantyPopup, setActiveWarrantyPopup] = useState(false)
    const [activeSetPricePopup, setActiveSetPricePopup] = useState(false)

    return (
        <div className="device-detail">
            <Header />
            <div className="device-detail-container">
                <Title order={1} className="page-title">iPhone 13 Pro</Title>
                <div className="image-wrapper">
                    <img
                        src="https://images.unsplash.com/photo-1632661674596-618f44e20e31"
                        alt="iPhone 13 Pro"
                        className="device-image"
                    />
                </div>

                <section className="section">
                    <Text className="section-title">Device Information</Text>
                    <div className="info-list">
                        <IconListItem icon={BoxIcon} label="NFT Token" value="0x1234...5678" />
                        <IconListItem icon={Smartphone} label="Model" value="A2638" />
                        <IconListItem icon={Calendar} label="Purchase Date" value="March 15, 2023" showDivider={false} />
                    </div>

                    <div className="status-grid">
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
                </section>

                <section className="section">
                    <Text className="section-title">Specifications</Text>
                    <div>
                        <IconListItem icon={Cpu} label="Processor" value="Apple M3" />
                        <IconListItem icon={HardDrive} label="Storage" value="256GB" />
                        <IconListItem icon={BoxIcon} label="RAM" value="16GB" />
                        <IconListItem icon={Monitor} label="Display" value='13.3" Retina' />
                        <IconListItem icon={Battery} label="Battery" value="Up to 18 hours" showDivider={false} />
                    </div>
                </section>

                <section className="section">
                    <Text className="section-title">Service History</Text>
                    <div className="history-entry">
                        <Title className="history-title">Software Update</Title>
                        <p className="history-text">macOS Sonoma 14.4 installed on April 10, 2024</p>
                    </div>
                </section>

                <div className="sell-button-container">
                    <button
                        onClick={() => setActiveSetPricePopup(true)}
                        className="sell-button"
                    >
                        Sell
                    </button>
                </div>

                {/* Popups */}
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
            <Footer />
        </div>
    )
}
