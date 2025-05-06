import React from "react"
import { PopupWrapper } from "../shared/PopupWrapper"
import { Mail, Phone, ExternalLink } from "lucide-react"
export const ContactPopup = ({ isOpen, onClose, email, phone }) => {
    const handleCopy = text => {
        navigator.clipboard.writeText(text)
    }
    const handleEmailClient = () => {
        window.location.href = `mailto:${email}`
    }
    return (
        <PopupWrapper isOpen={isOpen} onClose={onClose} title="Contact Options">
            <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                            <Mail className="text-gray-500 mr-2" size={20} />
                            <span className="text-gray-600">{email}</span>
                        </div>
                        <div className="space-x-2">
                            <button
                                onClick={() => handleCopy(email)}
                                className="px-3 py-1 text-sm bg-gray-100 rounded hover:bg-gray-200"
                            >
                                Copy
                            </button>
                            <button
                                onClick={handleEmailClient}
                                className="px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700"
                            >
                                <ExternalLink size={16} />
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <Phone className="text-gray-500 mr-2" size={20} />
                            <span className="text-gray-600">{phone}</span>
                        </div>
                        <button
                            onClick={() => handleCopy(phone)}
                            className="px-3 py-1 text-sm bg-gray-100 rounded hover:bg-gray-200"
                        >
                            Copy
                        </button>
                    </div>
                </div>
            </div>
        </PopupWrapper>
    )
}
