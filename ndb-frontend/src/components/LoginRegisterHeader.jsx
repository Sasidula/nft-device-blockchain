import React from "react";
import { Link, useLocation } from "react-router-dom";
import backIcon from "../assects/back-icon.png";
import "./LoginRegisterHeader.css";

export function LoginRegisterHeader() {
    const location = useLocation();
    const isLoginPage = location.pathname === "/login";
    const isRegisterPage = location.pathname === "/register";

    return (
        <div className="header-top">
            <Link to="/">
                <img src={backIcon} className="back-icon" alt="back" />
            </Link>

            {isLoginPage && (
                <Link to="/register" className="nav-link">
                    Register
                </Link>
            )}
            {isRegisterPage && (
                <Link to="/login" className="nav-link">
                    Login
                </Link>
            )}
        </div>
    );
}
