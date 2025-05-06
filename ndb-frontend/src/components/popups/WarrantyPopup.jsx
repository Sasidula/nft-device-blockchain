import React from "react"
import { PopupWrapper } from "../shared/PopupWrapper"
import { Shield, Calendar, Building } from "lucide-react"
import { IconListItem } from "../shared/IconList"
export const WarrantyPopup = ({ isOpen, onClose }) => {
    return (
        <PopupWrapper isOpen={isOpen} onClose={onClose}>
            <div className="space-y-6">
                <div className="bg-white rounded-lg p-4 shadow">
                    <Shield className="text-gray-500 mb-4" size={24} />
                    <h2 className="text-xl font-semibold mb-2">Warranty Details</h2>
                    <p className="text-gray-600">
                        Complete information about the warranty coverage for this item.
                    </p>
                </div>
                <div className="space-y-4">
                    <IconListItem
                        icon={Calendar}
                        label="Start Date"
                        value="March 15, 2023"
                    />
                    <IconListItem
                        icon={Calendar}
                        label="End Date"
                        value="March 15, 2025"
                    />
                    <IconListItem
                        icon={Building}
                        label="Warranty by"
                        value="TechGuard"
                        showDivider={false}
                    />
                </div>
                <div>
                    <h3 className="text-lg font-medium mb-3">Note</h3>
                    <div className="bg-gray-50 rounded-lg p-4">
                        <p className="text-gray-600">
                            Extended coverage includes parts and labor for all electronic
                            components. Does not cover physical damage or water damage.
                            Contact TechGuard customer service for claims.
                        </p>
                    </div>
                </div>
            </div>
        </PopupWrapper>
    )
}
