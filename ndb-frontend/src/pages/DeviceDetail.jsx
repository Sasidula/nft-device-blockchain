import React, { useEffect, useState } from "react"
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
import { Text, Title } from "@mantine/core"
import { Header } from "../components/Header.jsx"
import { Footer } from "../components/Footer.jsx"

export const DeviceDetail = () => {
    const [activePricePopup, setActivePricePopup] = useState(false)
    const [activeWarrantyPopup, setActiveWarrantyPopup] = useState(false)
    const [activeSetPricePopup, setActiveSetPricePopup] = useState(false)
    const [deviceData, setDeviceData] = useState(null)

    useEffect(() => {
        const fetchDevice = async () => {
            const deviceId = localStorage.getItem("device index")
            if (!deviceId) return

            try {
                const res = await fetch(`http://localhost:8080/api/devices/${deviceId}`)
                const data = await res.json()

                // Convert imageBlob to base64 data URL if present
                if (data.imageBlob) {
                    data.imageUrl = `data:image/jpeg;base64,${data.imageBlob}`
                }

                setDeviceData(data)
            } catch (error) {
                console.error("Failed to fetch device data:", error)
            }
        }

        fetchDevice()
    }, [])

    if (!deviceData) {
        return <div>Loading device details...</div>
    }

    const {
        name,
        modelNumber,
        nftTokenId,
        purchaseDate,
        originalPrice,
        spec,
        repairLogs,
        warrantyLogs,
        imageBlob
    } = deviceData

    const latestSpec = spec[spec.length - 1] || {}

    const formattedPurchaseDate = new Date(purchaseDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    })


    const latestWarranty = warrantyLogs[warrantyLogs.length - 1] || null
    const formattedWarrantyEnd = latestWarranty
        ? new Date(latestWarranty.end_date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        })
        : "N/A"

    return (
        <div className="device-detail">
            <Header />
            <div className="device-detail-container">
                <Title order={1} className="page-title">{name}</Title>
                <div className="image-wrapper">
                    <img
                        src={deviceData.imageUrl}
                        alt={name}
                        className="device-image"
                    />
                </div>

                <section className="section">
                    <Text className="section-title">Device Information</Text>
                    <div className="info-list">
                        <IconListItem icon={BoxIcon} label="NFT Token" value={nftTokenId} />
                        <IconListItem icon={Smartphone} label="Model" value={modelNumber} />
                        <IconListItem icon={Calendar} label="Purchase Date" value={formattedPurchaseDate} showDivider={false} />
                    </div>

                    <div className="status-grid">
                        <StatusCard
                            icon={Shield}
                            title="Warranty Status"
                            value={latestWarranty ? `Active until ${formattedWarrantyEnd}` : "No warranty"}
                            buttonText="View warranty"
                            onButtonClick={() => setActiveWarrantyPopup(true)}
                        />
                        <StatusCard
                            icon={DollarSign}
                            title="Price"
                            value={`$${originalPrice.toFixed(2)}`}
                            buttonText="View price"
                            onButtonClick={() => setActivePricePopup(true)}
                        />
                    </div>
                </section>

                <section className="section">
                    <Text className="section-title">Specifications</Text>
                    <div>
                        <IconListItem icon={Cpu} label="Processor" value={latestSpec.processor || "N/A"} />
                        <IconListItem icon={HardDrive} label="Storage" value={latestSpec.storage || "N/A"} />
                        <IconListItem icon={BoxIcon} label="RAM" value={latestSpec.ram || "N/A"} />
                        <IconListItem icon={Monitor} label="Display" value={latestSpec.display || "N/A"} />
                        <IconListItem icon={Battery} label="Battery" value={latestSpec.battery || "N/A"} showDivider={false} />
                    </div>
                </section>

                <section className="section">
                    <Text className="section-title">Service History</Text>
                    {repairLogs.length > 0 ? (
                        repairLogs.map((log) => (
                            <div key={log.repair_id} className="history-entry">
                                <Title className="history-title">{log.description}</Title>
                                <p className="history-text">
                                    {log.center_name} on {new Date(log.date).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric"
                                })}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p className="history-text">No service history available.</p>
                    )}
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
                    price={`$${originalPrice.toFixed(2)}`}
                />
                <WarrantyPopup
                    isOpen={activeWarrantyPopup}
                    onClose={() => setActiveWarrantyPopup(false)}
                    warranty={latestWarranty}
                />
                <SetPricePopup
                    isOpen={activeSetPricePopup}
                    onClose={() => setActiveSetPricePopup(false)}
                    initialPrice={originalPrice}
                />
            </div>
            <Footer />
        </div>
    )
}
