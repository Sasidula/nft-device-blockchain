import React from "react";
import { LoginCard } from "../components/LoginCard";
import { LoginRegisterHeader } from "../components/LoginRegisterHeader";
import { LoginRegisterFooter } from "../components/LoginRegisterFooter";
import { LoginRegisterInfoPanel } from "../components/LoginRegisterInfoPanel.jsx";
import "../components/LoginPage.css";

export function LoginPage() {
    return (
        <div className="login-page-container">
            <LoginRegisterHeader />
            <div className="login-page-content">
                <LoginRegisterInfoPanel />
                <div className="login-content">
                    <LoginCard />
                </div>
            </div>
            <LoginRegisterFooter />
        </div>
    );
}
