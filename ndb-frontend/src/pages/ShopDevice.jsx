import React, { useState } from "react";
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
import {Header} from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";

export const ShopDevice = () => {
    const [showContactPopup, setShowContactPopup] = useState(false);
    const [showBuyPopup, setShowBuyPopup] = useState(false);

    return (
        <div>
            <Header />
            <div className="shop-container">
                <h1 className="shop-title">MacBook Pro 16</h1>

                <div className="shop-image-container">
                    <img
                        src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
                        alt="MacBook Pro 16"
                        className="shop-image"
                    />
                </div>

                <section className="shop-section">
                    <h2 className="shop-section-title">Device Information</h2>
                    <div className="shop-list">
                        <IconListItem icon={Smartphone} label="Serial Number" value="FVFXC2LLHV2M" />
                        <IconListItem icon={Smartphone} label="Model" value="A2141" />
                        <IconListItem icon={Calendar} label="Purchase Date" value="March 15, 2023" />
                        <IconListItem icon={Shield} label="Warranty" value="Active until March 15, 2025" />
                        <IconListItem icon={DollarSign} label="Price" value="$2,499.00" showDivider={false} />
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
                        <IconListItem icon={Cpu} label="Processor" value="Apple M3 Pro" />
                        <IconListItem icon={HardDrive} label="Storage" value="512GB" />
                        <IconListItem icon={BoxIcon} label="RAM" value="32GB" />
                        <IconListItem icon={Monitor} label="Display" value='16" Liquid Retina XDR' />
                        <IconListItem icon={Battery} label="Battery" value="Up to 22 hours" showDivider={false} />
                    </div>
                </section>

                <section>
                    <h2 className="shop-section-title">Owner Details</h2>
                    <div className="owner-box">
                        <div className="owner-name">
                            <User size={24} className="text-gray-500 mr-3" />
                            <span className="font-medium">John Doe</span>
                        </div>
                        <div className="space-y-2 text-gray-600">
                            <div className="flex items-center">
                                <Phone size={16} className="mr-2" />
                                <span>+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center">
                                <Mail size={16} className="mr-2" />
                                <span>john.doe@example.com</span>
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
                    email="john.doe@example.com"
                    phone="+1 (555) 123-4567"
                />
                <ConfirmBuyPopup
                    isOpen={showBuyPopup}
                    onClose={() => setShowBuyPopup(false)}
                />
            </div>
            <Footer />
        </div>
    );
};
