import React, { useState, useEffect } from "react";
import {
    Cpu,
    HardDrive,
    Monitor,
    Battery,
    User,
    Phone,
    Mail,
    DollarSign,
    Shield,
    Smartphone,
    Calendar,
    BoxIcon
} from "lucide-react";
import { IconListItem } from "../components/shared/IconList";
import { ContactPopup } from "../components/popups/ContactPopup";
import { ConfirmBuyPopup } from "../components/popups/ConfirmBuyPopup";
import "../components/ShopDevice.css";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";

export const ShopDevice = () => {
    const [deviceData, setDeviceData] = useState(null);
    const [showContactPopup, setShowContactPopup] = useState(false);
    const [showBuyPopup, setShowBuyPopup] = useState(false);
    const [imageSrc, setImageSrc] = useState(null);

    useEffect(() => {
        const fetchDevice = async () => {
            const deviceId = localStorage.getItem("market index");
            console.log("Market index:", deviceId);

            try {
                const response = await fetch(`http://localhost:8080/api/market/${deviceId}`);
                const data = await response.json();
                console.log("Fetched device data:", data);

                const deviceEntry = data;

                if (deviceEntry?.ownership?.devices?.imageBlob) {
                    const base64Image = deviceEntry.ownership.devices.imageBlob;
                    setImageSrc(`data:image/jpeg;base64,${base64Image}`);
                }

                setDeviceData(deviceEntry); // Ensure deviceEntry is valid before setting
            } catch (err) {
                console.error("Failed to fetch device:", err);
            }
        };

        fetchDevice();
    }, []);


    if (!deviceData) {
        return <div>Loading device data...</div>;
    }

    const device = deviceData.ownership.devices;
    const owner = device.currentOwner;
    const warranty = device.warrantyLogs?.[0];
    const price = deviceData.price;
    const spec = device.spec?.[0]; // get the first spec object safely

    return (
        <div>
            <Header />
            <div className="shop-container">
                <h1 className="shop-title">{device.name}</h1>

                <div className="shop-image-container">
                    <img
                        src={imageSrc}
                        alt={device.name}
                        className="shop-image"
                    />
                </div>

                <section className="shop-section">
                    <h2 className="shop-section-title">Device Information</h2>
                    <div className="shop-list">
                        <IconListItem icon={Smartphone} label="Serial Number" value={device.serialNumber} />
                        <IconListItem icon={Smartphone} label="Model" value={device.modelNumber} />
                        <IconListItem icon={Calendar} label="Purchase Date" value={new Date(device.purchaseDate).toDateString()} />
                        <IconListItem icon={Shield} label="Warranty" value={warranty ? `Active until ${new Date(warranty.end_date).toDateString()}` : "No warranty"} />
                        <IconListItem icon={DollarSign} label="Price" value={`$${price}`} showDivider={false} />
                    </div>
                    <button
                        onClick={() => setShowBuyPopup(true)}
                        className="shop-buy-button"
                    >
                        Buy
                    </button>
                </section>



                <section className="shop-section">
                    <h2 className="shop-section-title">Specifications</h2>
                    <div className="shop-list">
                        <IconListItem icon={Cpu} label="Processor" value={spec?.processor || "N/A"} />
                        <IconListItem icon={HardDrive} label="Storage" value={spec?.storage || "512GB"} />
                        <IconListItem icon={BoxIcon} label="RAM" value={spec?.ram || "Unknown"} />
                        <IconListItem icon={Monitor} label="Display" value={spec?.display || "Unknown"} />
                        <IconListItem icon={Battery} label="Battery" value={spec?.battery || "Unknown"} showDivider={false} />
                    </div>
                </section>

                <section>
                    <h2 className="shop-section-title">Owner Details</h2>
                    <div className="owner-box">
                        <div className="owner-name">
                            <User size={24} className="text-gray-500 mr-3" />
                            <span className="font-medium">{owner.name}</span>
                        </div>
                        <div className="space-y-2 text-gray-600">
                            <div className="flex items-center">
                                <Phone size={16} className="mr-2" />
                                <span>{owner.consumer?.phone || "N/A"}</span>
                            </div>
                            <div className="flex items-center">
                                <Mail size={16} className="mr-2" />
                                <span>{owner.email}</span>
                            </div>
                        </div>
                        <div className="contact-btn">
                            <button
                                onClick={() => setShowContactPopup(true)}
                                className="owner-contact-button"
                            >
                                Contact
                            </button>
                        </div>
                    </div>
                </section>

                <ContactPopup
                    isOpen={showContactPopup}
                    onClose={() => setShowContactPopup(false)}
                    email={owner.email}
                    phone={owner.consumer?.phone || "N/A"}
                />
                <ConfirmBuyPopup
                    isOpen={showBuyPopup}
                    onClose={() => setShowBuyPopup(false)}
                    device={deviceData}
                />
            </div>
            <Footer />
        </div>
    );
};
