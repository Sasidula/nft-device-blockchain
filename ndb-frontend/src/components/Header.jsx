import React from "react";
import { Container, Button, Group, Text } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import homeIcon from '../assects/home-icon.png';
import marketPlaceIcon from '../assects/market-place-icon.png'
import myDevicesIcon from '../assects/my-devices-icon.png';
import traceTech from "../assects/traceTech.png";

export function Header() {
    const navigate = useNavigate();
    return (
        <header className="header">
            <Container fluid>
                <div className="header-content">
                    <div className="header-left">
                        <img src={traceTech} className="trace-tech"/>
                        <Text className="logo">TraceTech</Text>
                        <Group gap="lg">
                            <Link to="/" className="nav-link">
                                <img src={homeIcon}  className="header-icon" />
                                Home
                            </Link>
                            <Link to="#" className="nav-link">
                                <img src={marketPlaceIcon}  className="header-icon" />
                                Marketplace
                            </Link>
                            <Link to="#" className="nav-link">
                                <img src={myDevicesIcon}  className="header-icon" />
                                My Devices
                            </Link>
                        </Group>
                    </div>
                    <div className="header-right">
                        <Group>
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
                        </Group>
                    </div>
                </div>
            </Container>
        </header>
    );
}
