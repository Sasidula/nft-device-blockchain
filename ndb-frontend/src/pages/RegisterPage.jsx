import React from "react";
import { RegisterCard } from "../components/RegisterCard";
import { LoginRegisterHeader } from "../components/LoginRegisterHeader";
import { LoginRegisterFooter } from "../components/LoginRegisterFooter";
import { LoginRegisterInfoPanel } from "../components/LoginRegisterInfoPanel.jsx";
import "../components/RegisterPage.css";

export function RegisterPage() {
    return (
        <div className="register-page-container">
            <LoginRegisterHeader />
            <div className="register-page-content">
                <LoginRegisterInfoPanel />
                <div className="register-content">
                    <RegisterCard />
                </div>
            </div>
            <LoginRegisterFooter />
        </div>
    );
}
