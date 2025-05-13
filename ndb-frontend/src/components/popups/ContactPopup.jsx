import React from "react"
import { PopupWrapper } from "../shared/PopupWrapper"
import { Mail, Phone, ExternalLink } from "lucide-react"
import "./ContactPopup.css"

export const ContactPopup = ({ isOpen, onClose, email, phone }) => {
    const handleCopy = text => {
        navigator.clipboard.writeText(text)
    }

    const handleEmailClient = () => {
        window.location.href = `mailto:${email}`
    }

    return (
        <PopupWrapper isOpen={isOpen} onClose={onClose} title="Contact Options">
            <div className="contact-popup-content">
                <div className="contact-card">
                    <div className="contact-row">
                        <div className="contact-info">
                            <Mail className="contact-icon" size={20} />
                            <span className="contact-text">{email}</span>
                        </div>
                        <div className="contact-actions">
                            <button
                                onClick={() => handleCopy(email)}
                                className="btn-copy"
                            >
                                Copy
                            </button>
                            <button
                                onClick={handleEmailClient}
                                className="btn-email"
                            >
                                <ExternalLink size={16} />
                            </button>
                        </div>
                    </div>
                    <div className="contact-row">
                        <div className="contact-info">
                            <Phone className="contact-icon" size={20} />
                            <span className="contact-text">{phone}</span>
                        </div>
                        <button
                            onClick={() => handleCopy(phone)}
                            className="btn-copy"
                        >
                            Copy
                        </button>
                    </div>
                </div>
            </div>
        </PopupWrapper>
    )
}
