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

export const ConfirmBuyPopup = ({ isOpen, onClose }) => {
    const [publicKey, setPublicKey] = useState("");

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
                        <IconListItem icon={Cpu} label="Processor" value="Apple M3 Pro" />
                        <IconListItem icon={HardDrive} label="Storage" value="512GB" />
                        <IconListItem icon={BoxIcon} label="RAM" value="32GB" />
                        <IconListItem icon={Monitor} label="Display" value='16" Liquid Retina XDR' />
                        <IconListItem icon={Battery} label="Battery" value="Up to 22 hours" showDivider={false} />
                    </div>
                </div>
            </div>
        </PopupWrapper>
    );
};
