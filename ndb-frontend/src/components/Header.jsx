import React, { useState, useEffect } from "react";
import { Container, Button, Group, Text } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import homeIcon from "../assects/home-icon.png";
import marketPlaceIcon from "../assects/market-place-icon.png";
import myDevicesIcon from "../assects/my-devices-icon.png";
import profileIcon from "../assects/profile-icon.png";
import traceTech from "../assects/traceTech.png";

export function Header() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Check if user is logged in on component mount
    useEffect(() => {
        const user = localStorage.getItem("user");
        setIsLoggedIn(!!user);
    }, []);

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
                                <img src={marketPlaceIcon} className="header-icon" alt="Marketplace" />
                                Marketplace
                            </Link>
                            {isLoggedIn && (
                                <Link to="/devices" className="nav-link">
                                    <img src={myDevicesIcon} className="header-icon" alt="My Devices" />
                                    My Devices
                                </Link>
                            )}
                        </Group>
                    </div>

                    <div className="header-right">
                        <Group>
                            {isLoggedIn ? (
                                <img
                                    src={profileIcon}
                                    className="profile-icon"
                                    alt="Profile"
                                    onClick={() => navigate("/profile")}
                                />
                            ) : (
                                <>
                                    <Button className="login-btn" onClick={() => navigate("/login")}>
                                        Login
                                    </Button>
                                    <Button className="signup-btn" onClick={() => navigate("/register")}>
                                        Sign Up
                                    </Button>
                                </>
                            )}
                        </Group>
                    </div>
                </div>
            </Container>
        </header>
    );
}
