import React from "react"
import { Container, Button, Group, Text } from "@mantine/core"
import { Link, useNavigate } from "react-router-dom"
export function Header() {
    const navigate = useNavigate()
    return (
        <header className="py-4 border-b border-gray-100 bg-white w-full">
            <Container size="lg">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Text className="text-xl font-bold text-gray-900">TraceTech</Text>
                        <Group gap="lg">
                            <Link to="/" className="text-gray-600 hover:text-blue-600">
                                Home
                            </Link>
                            <Link to="#" className="text-gray-600 hover:text-blue-600">
                                My Devices
                            </Link>
                            <Link to="#" className="text-gray-600 hover:text-blue-600">
                                Marketplace
                            </Link>
                        </Group>
                    </div>
                    <Group>
                        <Button
                            variant="subtle"
                            color="gray"
                            onClick={() => navigate("/login")}
                        >
                            Login
                        </Button>
                        <Button
                            className="bg-blue-600 hover:bg-blue-700"
                            onClick={() => navigate("/register")}
                        >
                            Sign Up
                        </Button>
                    </Group>
                </div>
            </Container>
        </header>
    )
}
