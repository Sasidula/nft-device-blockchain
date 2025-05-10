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
} from "@mantine/core";
import axios from "axios";
import "./LoginCard.css";

export function LoginCard() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/api/user/login", {
                email,
                password,
            });

            console.log("Login successful:", response.data);
            // TODO: Redirect user or store token in localStorage/sessionStorage
        } catch (err) {
            console.error("Login failed:", err.response?.data || err.message);
            setError("Invalid email or password");
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

                <form className="login-form" onSubmit={handleSubmit}>
                    <Stack spacing="xl">
                        <div className="login-from-container">
                            <TextInput
                                label="Email Address"
                                placeholder="Enter your email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.currentTarget.value)}
                                autoComplete="email"
                                required
                            />
                            <PasswordInput
                                label="Password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.currentTarget.value)}
                                required
                                autoComplete="current-password"
                            />
                        </div>

                        {error && (
                            <Text color="red" size="sm" className="login-error">
                                {error}
                            </Text>
                        )}

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
