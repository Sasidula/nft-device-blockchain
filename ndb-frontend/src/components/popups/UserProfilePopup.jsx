import React, { useState } from "react"
import { PopupWrapper } from "../shared/PopupWrapper"
import { User, Mail, Lock } from "lucide-react"
export const UserProfilePopup = ({ isOpen, onClose }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [email, setEmail] = useState("john.doe@example.com")
    const [confirmEmail, setConfirmEmail] = useState("john.doe@example.com")
    const [password, setPassword] = useState("********")
    const handleSave = () => {
        if (email === confirmEmail) {
            // Handle save logic here
            setIsEditing(false)
        }
    }
    return (
        <PopupWrapper isOpen={isOpen} onClose={onClose}>
            <div className="text-center mb-8">
                <div className="inline-block p-4 bg-gray-100 rounded-full mb-4">
                    <User size={48} className="text-gray-700" />
                </div>
                <h2 className="text-2xl font-semibold">John Doe</h2>
            </div>
            <div className="space-y-6">
                <div className="space-y-4">
                    <div className="flex items-center">
                        <Mail className="text-gray-500 mr-3" size={20} />
                        {isEditing ? (
                            <div className="space-y-2 flex-1">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Enter email"
                                />
                                <input
                                    type="email"
                                    value={confirmEmail}
                                    onChange={e => setConfirmEmail(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Confirm email"
                                />
                            </div>
                        ) : (
                            <span className="text-gray-700">{email}</span>
                        )}
                    </div>
                    <div className="flex items-center">
                        <Lock className="text-gray-500 mr-3" size={20} />
                        {isEditing ? (
                            <input
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter new password"
                            />
                        ) : (
                            <span className="text-gray-700">{password}</span>
                        )}
                    </div>
                </div>
                <div className="flex justify-end">
                    <button
                        onClick={isEditing ? handleSave : () => setIsEditing(true)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                    >
                        {isEditing ? "Save" : "Edit Profile"}
                    </button>
                </div>
            </div>
        </PopupWrapper>
    )
}
