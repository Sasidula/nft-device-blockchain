import React, { useState } from "react"
import { PopupWrapper } from "../shared/PopupWrapper"
import { User, Mail, Lock } from "lucide-react"
import "./UserProfilePopup.css"

export const UserProfilePopup = ({ isOpen, onClose }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [name, setName] = useState("John Doe")
    const [email, setEmail] = useState("john.doe@example.com")
    const [confirmEmail, setConfirmEmail] = useState("john.doe@example.com")
    const [password, setPassword] = useState("********")

    const handleSave = () => {
        if (email === confirmEmail) {
            // Handle save logic here
            setIsEditing(false)
        }
    }

    const handleLogout = () => {
        // Add your logout logic here
        console.log("User logged out")
        onClose()
    }

    return (
        <PopupWrapper isOpen={isOpen} onClose={onClose}>
            <div className="profile-header">
                <div className="profile-icon">
                    <User size={48} className="icon-color" />
                </div>
                <h2 className="profile-name">{name}</h2>
            </div>
            <div className="profile-fields">
                <div className="field-group">
                    {/* Name Field */}
                    <div className="field">
                        <User className="field-icon" size={20} />
                        {isEditing ? (
                            <div className="field-inputs">
                                <input
                                    type="text"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                    className="input-field"
                                    placeholder="Enter name"
                                />
                            </div>
                        ) : (
                            <span className="field-text">{name}</span>
                        )}
                    </div>

                    {/* Email Field */}
                    <div className="field">
                        <Mail className="field-icon" size={20} />
                        {isEditing ? (
                            <div className="field-inputs">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    className="input-field"
                                    placeholder="Enter email"
                                />
                            </div>
                        ) : (
                            <span className="field-text">{email}</span>
                        )}
                    </div>

                    {/* Password Field */}
                    <div className="field">
                        <Lock className="field-icon" size={20} />
                        {isEditing ? (
                            <div className="field-inputs">
                                <input
                                    type="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    className="input-field"
                                    placeholder="Enter new password"
                                />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    className="input-field"
                                    placeholder="Confirm password"
                                />
                            </div>
                        ) : (
                            <span className="field-text">{password}</span>
                        )}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="button-row">
                    <button
                        onClick={isEditing ? handleSave : () => setIsEditing(true)}
                        className="submit-btn"
                    >
                        {isEditing ? "Save" : "Edit Profile"}
                    </button>
                    <button
                        onClick={handleLogout}
                        className="logout-btn"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </PopupWrapper>
    )
}
