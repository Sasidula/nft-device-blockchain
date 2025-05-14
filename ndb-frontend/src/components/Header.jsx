import React, { useState, useEffect } from "react";
import { Container, Button, Group, Text } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import homeIcon from "../assects/home-icon.png";
import marketPlaceIcon from "../assects/market-place-icon.png";
import myDevicesIcon from "../assects/my-devices-icon.png";
import profileIcon from "../assects/profile-icon.png";
import traceTech from "../assects/traceTech.png";
import deviceRegisterIcon from "../assects/device-register-icon.png";
import deviceUpdateIcon from "../assects/device-update-icon.png";
import { AddRepairLogPopup } from "./popups/AddRepairLogPopup.jsx";
import { UserProfilePopup } from "./popups/UserProfilePopup";


export function Header() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [role, setRole] = useState(null);
    const [isRepairLogPopupOpen, setIsRepairLogPopupOpen] = useState(false);
    const openRepairLogPopup = () => setIsRepairLogPopupOpen(true);
    const closeRepairLogPopup = () => setIsRepairLogPopupOpen(false);
    const [showProfilePopup, setShowProfilePopup] = useState(false)


    const user = JSON.parse(localStorage.getItem("user"));

    return (
        <header className="header">
            <Container fluid>
                <div className="header-content">
                    <div className="header-left">
                        <img src={traceTech} className="trace-tech" alt="TraceTech Logo" />
                        <Text className="logo">TraceTech</Text>
                        <Group gap="lg">
                            <Link to="/" className="nav-link">
                                <img src={homeIcon} className="header-icon" alt="Home" />
                                Home
                            </Link>
                            <Link to="/market" className="nav-link">
                                <img
                                    src={marketPlaceIcon}
                                    className="header-icon"
                                    alt="Marketplace"
                                />
                                Marketplace
                            </Link>

                            {user.role === "CONSUMER" && (
                                <>
                                    <Link to="/devices" className="nav-link">
                                        <img
                                            src={myDevicesIcon}
                                            className="header-icon"
                                            alt="My Devices"
                                        />
                                        My Devices
                                    </Link>
                                </>
                            )}

                            {user.role === "RETAILER" && (
                                <>
                                    <Link to="/register-device" className="nav-link">
                                        <img
                                            src={deviceRegisterIcon}
                                            className="header-icon"
                                            alt="Register"
                                        />
                                        Register Device
                                    </Link>
                                    <button onClick={openRepairLogPopup} className="nav-link">
                                        <img
                                            src={deviceUpdateIcon}
                                            className="header-icon"
                                            alt="Repair Log"
                                        />
                                        Add Repair Log
                                    </button>
                                    <AddRepairLogPopup isOpen={isRepairLogPopupOpen} onClose={closeRepairLogPopup} />
                                </>
                            )}
                        </Group>
                    </div>

                    <div className="header-right">
                        <Group>
                            {user !== null ? (
                                <img
                                    src={profileIcon}
                                    className="profile-icon"
                                    alt="Profile"
                                    onClick={() => setShowProfilePopup(true)}
                                />
                            ) : (
                                <>
                                    <Button
                                        className="login-btn"
                                        onClick={() => navigate("/login")}
                                    >
                                        Login
                                    </Button>
                                    <Button
                                        className="signup-btn"
                                        onClick={() => navigate("/register")}
                                    >
                                        Sign Up
                                    </Button>
                                </>
                            )}
                        </Group>
                    </div>
                </div>
            </Container>
            <UserProfilePopup
                isOpen={showProfilePopup}
                onClose={() => setShowProfilePopup(false)}
            />
        </header>
    );
}
