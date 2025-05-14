import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { PopupWrapper } from "../shared/PopupWrapper"
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react"
import "./UserProfilePopup.css"

export const UserProfilePopup = ({ isOpen, onClose }) => {
    const navigate = useNavigate()
    const [isEditing, setIsEditing] = useState(false)
    const [userData, setUserData] = useState(null)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"))
        if (user) {
            setUserData(user)
            setName(user.name)
            setEmail(user.email)
        }
    }, [])

    const handleSave = async () => {
        if (!userData) return

        if (password && password !== confirmPassword) {
            alert("Passwords do not match.")
            return
        }

        const updatedUser = {
            ...userData,
            name,
            email,
            password: password || userData.password
        }

        try {
            const response = await fetch(`http://localhost:8080/api/user/${userData.user}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(updatedUser)
            })

            if (response.ok) {
                const savedUser = await response.json()
                localStorage.setItem("user", JSON.stringify(savedUser))
                setUserData(savedUser)
                setIsEditing(false)
                alert("Profile updated successfully.")
            } else {
                alert("Failed to update profile.")
            }
        } catch (err) {
            console.error("Update error:", err)
            alert("An error occurred while saving.")
        }
    }

    const handleLogout = () => {
        localStorage.removeItem("user")
        navigate("/")
        onClose()
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    if (!userData) return null

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
                            <input
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                className="input-field"
                                placeholder="Enter name"
                            />
                        ) : (
                            <span className="field-text">{name}</span>
                        )}
                    </div>

                    {/* Email Field */}
                    <div className="field">
                        <Mail className="field-icon" size={20} />
                        {isEditing ? (
                            <input
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className="input-field"
                                placeholder="Enter email"
                            />
                        ) : (
                            <span className="field-text">{email}</span>
                        )}
                    </div>

                    {/* Password Fields */}
                    <div className="field">
                        <Lock className="field-icon" size={20} />
                        {isEditing ? (
                            <div className="password-fields">
                                <div className="password-input-wrapper">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        className="input-field"
                                        placeholder="New password"
                                    />
                                    <button
                                        type="button"
                                        className="eye-toggle"
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                    </button>
                                </div>
                                <div className="password-input-wrapper">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        value={confirmPassword}
                                        onChange={e => setConfirmPassword(e.target.value)}
                                        className="input-field"
                                        placeholder="Confirm password"
                                    />
                                </div>
                            </div>
                        ) : (
                            <span className="field-text">********</span>
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
