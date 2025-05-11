import React, { useState } from "react";
import {
    TextInput,
    PasswordInput,
    Button,
    Anchor,
    Stack,
    Title,
    Text,
    Card,
    Notification,
} from "@mantine/core";
import { IconX } from "@tabler/icons-react";
import "./LoginCard.css";

export function LoginCard() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await fetch("http://localhost:8080/api/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            if (response.ok) {
                const user = await response.json(); // Assuming API returns a user object
                localStorage.setItem("user", JSON.stringify(user)); // Save to localStorage
                window.location.href = "/devices";
            } else {
                // Try reading plain text message from error response
                const errorMessage = await response.text();
                setError(errorMessage || "Login failed.");
            }
        } catch (err) {
            setError("An error occurred. Please try again.");
        }
    };

    return (
        <Card className="login-card" shadow="sm" padding="xl" radius="md">
            <div className="login-card-content">
                <Title order={2} className="login-title">
                    Welcome Back
                </Title>
                <Text size="md" className="login-subtitle">
                    Log in to access your account
                </Text>

                {error && (
                    <Notification
                        icon={<IconX size="1.1rem" />}
                        color="red"
                        title="Login Failed"
                        withCloseButton={false}
                        mt="md"
                    >
                        {error}
                    </Notification>
                )}

                <form className="login-form" onSubmit={handleSubmit}>
                    <Stack spacing="xl">
                        <div className="login-from-container">
                            <TextInput
                                label="Email Address"
                                placeholder="Enter your email"
                                type="email"
                                autoComplete="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <PasswordInput
                                label="Password"
                                placeholder="Enter your password"
                                required
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className="login-btn-card-container">
                            <Button type="submit" fullWidth className="login-btn-card">
                                Login
                            </Button>
                        </div>
                    </Stack>
                </form>

                <Text size="xs" className="forgot-password">
                    <Anchor href="/forgot-password" className="forgot-password-link">
                        Forgot password?
                    </Anchor>
                </Text>
            </div>
        </Card>
    );
}
