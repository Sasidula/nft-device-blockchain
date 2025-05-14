import React from "react";
import { PopupWrapper } from "../shared/PopupWrapper";
import { Shield, Calendar, Building } from "lucide-react";
import { IconListItem } from "../shared/IconList";
import "./WarrantyPopup.css";

export const WarrantyPopup = ({ isOpen, onClose, warranty }) => {
    if (!warranty) return null;

    const start = new Date(warranty.start_date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    const end = new Date(warranty.end_date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    const addedBy = warranty.added_by?.name || "N/A";
    const notes = warranty.notes || "No additional notes.";

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
                    <IconListItem icon={Calendar} label="Start Date" value={start} />
                    <IconListItem icon={Calendar} label="End Date" value={end} />
                    <IconListItem icon={Building} label="Warranty by" value={addedBy} showDivider={false} />
                </div>

                <div className="warranty-note-section">
                    <h3 className="note-heading">Note</h3>
                    <div className="note-box">
                        <p className="note-text">{notes}</p>
                    </div>
                </div>
            </div>
        </PopupWrapper>
    );
};
