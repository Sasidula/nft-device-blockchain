import React from "react";
import traceTech from "../assects/traceTech.png";
import "../components/LoginRegisterInfoPanel.css";

export function LoginRegisterInfoPanel() {
    return (
        <div className="left-content">
            <img src={traceTech} className="traceTech" alt="TraceTech" />
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
    );
}
