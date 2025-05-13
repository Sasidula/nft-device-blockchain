import React from "react";
import { PopupWrapper } from "../shared/PopupWrapper";
import { Shield, Calendar, Building } from "lucide-react";
import { IconListItem } from "../shared/IconList";
import "./WarrantyPopup.css";

export const WarrantyPopup = ({ isOpen, onClose }) => {
    return (
        <PopupWrapper isOpen={isOpen} onClose={onClose}>
            <div className="warranty-popup">
                <div className="warranty-header-card">
                    <Shield className="warranty-icon" size={24} />
                    <h2 className="warranty-title">Warranty Details</h2>
                    <p className="warranty-description">
                        Complete information about the warranty coverage for this item.
                    </p>
                </div>

                <div className="warranty-info-list">
                    <IconListItem icon={Calendar} label="Start Date" value="March 15, 2023" />
                    <IconListItem icon={Calendar} label="End Date" value="March 15, 2025" />
                    <IconListItem icon={Building} label="Warranty by" value="TechGuard" showDivider={false} />
                </div>

                <div className="warranty-note-section">
                    <h3 className="note-heading">Note</h3>
                    <div className="note-box">
                        <p className="note-text">
                            Extended coverage includes parts and labor for all electronic components.
                            Does not cover physical damage or water damage. Contact TechGuard customer service for claims.
                        </p>
                    </div>
                </div>
            </div>
        </PopupWrapper>
    );
};
