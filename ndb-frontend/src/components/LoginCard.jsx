import React from "react";
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
import "./LoginCard.css";

export function LoginCard() {
    return (
        <Card className="login-card" shadow="sm" padding="xl" radius="md">
            <div className="login-card-content">
                <Title order={2} className="login-title">
                    Welcome Back
                </Title>
                <Text size="md" className="login-subtitle">
                    Log in to access your account
                </Text>

                <form className="login-form">
                    <Stack spacing="xl">
                        <div className="login-from-container">
                            <TextInput
                                label="Email Address"
                                placeholder="Enter your email"
                                type="email"
                                autoComplete="email"
                                required
                            />
                            <PasswordInput
                                label="Password"
                                placeholder="Enter your password"
                                required
                                autoComplete="current-password"
                            />
                        </div>

                        <div className="login-btn-card-container">
                            <Button type="submit" fullWidth className="login-btn-card">
                                Login
                            </Button>
                        </div>
                    </Stack>
                </form>

                <Text className="forgot-password">
                    <Anchor href="/forgot-password" className="forgot-password-link">
                        Forgot password?
                    </Anchor>
                </Text>
            </div>
        </Card>
    );
}
