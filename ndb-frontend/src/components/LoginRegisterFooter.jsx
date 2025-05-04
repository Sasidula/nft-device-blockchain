import React from "react";
import { Text } from "@mantine/core";
import "./LoginRegisterFooter.css";

export function LoginRegisterFooter() {
    return (
        <div className="footer-bottom-login">
            <Text size="sm" className="footer-copy">
                © {new Date().getFullYear()} Device Verification Platform. All rights reserved.
            </Text>
        </div>
    );
}
