import React from "react"
import { Container, Button, Group, Text } from "@mantine/core"
export function Header() {
    return (
        <header className="py-4 border-b border-gray-100 bg-white w-full">
            <Container size="lg">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Text className="text-xl font-bold text-gray-900">TraceTech</Text>
                        <Group gap="lg">
                            <a href="#" className="text-gray-600 hover:text-blue-600">
                                Home
                            </a>
                            <a href="#" className="text-gray-600 hover:text-blue-600">
                                My Devices
                            </a>
                            <a href="#" className="text-gray-600 hover:text-blue-600">
                                Marketplace
                            </a>
                        </Group>
                    </div>
                    <Group>
                        <Button variant="subtle" color="gray">
                            Login
                        </Button>
                        <Button className="bg-blue-600 hover:bg-blue-700">Sign Up</Button>
                    </Group>
                </div>
            </Container>
        </header>
    )
}
