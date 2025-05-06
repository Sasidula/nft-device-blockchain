import React, { useState } from "react"
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
} from "lucide-react"
import { IconListItem } from "../components/shared/IconList"
import { ContactPopup } from "../components/popups/ContactPopup"
import { ConfirmBuyPopup } from "../components/popups/ConfirmBuyPopup"
export const ShopDevice = () => {
    const [showContactPopup, setShowContactPopup] = useState(false)
    const [showBuyPopup, setShowBuyPopup] = useState(false)
    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">MacBook Pro 16</h1>
            <div className="mb-8 flex justify-center">
                <img
                    src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
                    alt="MacBook Pro 16"
                    className="rounded-lg max-h-[400px] object-contain"
                />
            </div>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Device Information</h2>
                <div className="space-y-4">
                    <IconListItem
                        icon={Smartphone}
                        label="Serial Number"
                        value="FVFXC2LLHV2M"
                    />
                    <IconListItem icon={Smartphone} label="Model" value="A2141" />
                    <IconListItem
                        icon={Calendar}
                        label="Purchase Date"
                        value="March 15, 2023"
                    />
                    <IconListItem
                        icon={Shield}
                        label="Warranty"
                        value="Active until March 15, 2025"
                    />
                    <IconListItem
                        icon={DollarSign}
                        label="Price"
                        value="$2,499.00"
                        showDivider={false}
                    />
                </div>
                <button
                    onClick={() => setShowBuyPopup(true)}
                    className="w-full mt-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Buy
                </button>
            </section>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Specifications</h2>
                <div>
                    <IconListItem icon={Cpu} label="Processor" value="Apple M3 Pro" />
                    <IconListItem icon={HardDrive} label="Storage" value="512GB" />
                    <IconListItem icon={BoxIcon} label="RAM" value="32GB" />
                    <IconListItem
                        icon={Monitor}
                        label="Display"
                        value='16" Liquid Retina XDR'
                    />
                    <IconListItem
                        icon={Battery}
                        label="Battery"
                        value="Up to 22 hours"
                        showDivider={false}
                    />
                </div>
            </section>
            <section>
                <h2 className="text-2xl font-semibold mb-4">Owner Details</h2>
                <div className="bg-white rounded-lg shadow p-4">
                    <div className="flex items-center mb-4">
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
                    <button
                        onClick={() => setShowContactPopup(true)}
                        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 float-right"
                    >
                        Contact
                    </button>
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
    )
}
