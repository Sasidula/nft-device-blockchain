import React from "react";
import { LoginCard } from "../components/LoginCard";  // Import the LoginCard component
import "../components/LoginPage.css";
import traceTech from '../assects/traceTech.png';
import backIcon from "../assects/back-icon.png";
import {Text} from "@mantine/core";
import homeIcon from "../assects/home-icon.png";
import {Link} from "react-router-dom";

export function LoginPage() {
    return (
        <div className="login-page-container">
            <div className="header-top">
                <Link to="/home">
                    <img src={backIcon} className="back-icon" alt="back"/>
                </Link>
                <Link to="#" className="nav-link">
                    Register
                </Link>
            </div>
            <div className="login-page-content">
                <div className="left-content">
                    <img src={traceTech} className="traceTech"/>
                    <h2 className="section-title">Become a Trusted Device Partner</h2>
                    <p className="section-description">
                        Simple to use, built for the future.
                    </p>
                    <ul className="features-list">
                        <li>Register devices securely on the blockchain</li>
                        <li>Mint NFTs to prove authenticity</li>
                        <li>Track warranty and ownership from day one</li>
                        <li>Improve resale value with verified history</li>
                        <li>Protect your brand from counterfeits</li>
                        <li>Seamless integration with your retail flow</li>
                    </ul>
                </div>
                <div className="right-content">
                    <LoginCard /> {/* Render LoginCard here */}
                </div>
            </div>
            <div className="footer-bottom-lg">
                <Text size="sm" className="footer-copy">
                    © {new Date().getFullYear()} Device Verification Platform. All rights reserved.
                </Text>
            </div>
        </div>
    );
}
