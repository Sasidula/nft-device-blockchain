import React from "react"
import {
    Container,
    Title,
    Text,
    TextInput,
    PasswordInput,
    Button,
    Stack,
    Anchor
} from "@mantine/core"
import {LoginHeader} from "../components/LoginHeader.jsx";
export function LoginPage() {
    return (
        <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <LoginHeader/>
            <Container size="xs">
                <div className="w-full max-w-md space-y-8">
                    <div className="text-center">
                        <Title order={1} className="text-3xl font-bold text-gray-900">
                            Welcome Back
                        </Title>
                        <Text className="mt-2 text-gray-600">
                            Log in to access your devices
                        </Text>
                    </div>
                    <form className="mt-8 space-y-6">
                        <Stack>
                            <TextInput
                                required
                                label="Email Address"
                                placeholder="Enter your email"
                                type="email"
                                autoComplete="email"
                            />
                            <PasswordInput
                                required
                                label="Password"
                                placeholder="Enter your password"
                                autoComplete="current-password"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                size="md"
                                className="bg-blue-600 hover:bg-blue-700"
                            >
                                Log in
                            </Button>
                        </Stack>
                    </form>
                    <Text className="text-center mt-4">
                        Don't have an account?{" "}
                        <Anchor
                            href="/register"
                            className="text-blue-600 hover:text-blue-700"
                        >
                            Sign up
                        </Anchor>
                    </Text>
                </div>
            </Container>
        </div>
    )
}
