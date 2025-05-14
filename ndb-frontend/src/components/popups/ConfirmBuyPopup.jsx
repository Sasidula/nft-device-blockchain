import React, { useState } from "react";
import { PopupWrapper } from "../shared/PopupWrapper";
import {
    DollarSign,
    Cpu,
    HardDrive,
    Monitor,
    Battery,
    BoxIcon
} from "lucide-react";
import { IconListItem } from "../shared/IconList";
import "./ConfirmBuyPopup.css";

export const ConfirmBuyPopup = ({ isOpen, onClose, device }) => {
    const [publicKey, setPublicKey] = useState("");

    const specs = device?.ownership?.devices?.spec?.[0] || {};



    return (
        <PopupWrapper isOpen={isOpen} onClose={onClose}>
            <div className="confirm-popup-wrapper">
                <div className="confirm-section">
                    <DollarSign className="confirm-icon" size={24} />
                    <h3 className="confirm-title">Request Item</h3>
                    <p className="confirm-description">
                        Buy and transfer a device from another user.
                    </p>
                    <div className="confirm-input-wrapper">
                        <label className="confirm-label">
                            Device public key
                        </label>
                        <div className="confirm-input-button-group">
                            <input
                                type="text"
                                value={publicKey}
                                onChange={e => setPublicKey(e.target.value)}
                                className="confirm-input"
                            />
                            <button
                                className="confirm-button"
                                onClick={onClose}
                            >
                                Confirm
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="spec-title">Specifications</h3>
                    <div className="spec-box">
                        <IconListItem icon={Cpu} label="Processor" value={specs.processor || "Unknown"} />
                        <IconListItem icon={HardDrive} label="Storage" value={specs.storage || "Unknown"} />
                        <IconListItem icon={BoxIcon} label="RAM" value={specs.ram || "Unknown"} />
                        <IconListItem icon={Monitor} label="Display" value={specs.display || "Unknown"} />
                        <IconListItem icon={Battery} label="Battery" value={specs.battery || "Unknown"} showDivider={false} />
                    </div>
                </div>
            </div>
        </PopupWrapper>
    );
};
