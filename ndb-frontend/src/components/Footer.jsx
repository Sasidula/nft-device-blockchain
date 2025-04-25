import React from "react"
import { Container, Title, Text, Group, Anchor } from "@mantine/core"
import { Mail, Github, Linkedin, Twitter } from "lucide-react"
export function Footer() {
    return (
        <footer className="bg-gray-100 py-16 w-full">
            <Container size="lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Quick Links */}
                    <div>
                        <Title order={4} className="text-lg font-bold text-gray-800 mb-4">
                            Quick Links
                        </Title>
                        <div className="space-y-2">
                            <Anchor
                                href="#"
                                className="block text-gray-600 hover:text-blue-600"
                            >
                                Home
                            </Anchor>
                            <Anchor
                                href="#"
                                className="block text-gray-600 hover:text-blue-600"
                            >
                                Register Device
                            </Anchor>
                            <Anchor
                                href="#"
                                className="block text-gray-600 hover:text-blue-600"
                            >
                                Marketplace
                            </Anchor>
                            <Anchor
                                href="#"
                                className="block text-gray-600 hover:text-blue-600"
                            >
                                About
                            </Anchor>
                            <Anchor
                                href="#"
                                className="block text-gray-600 hover:text-blue-600"
                            >
                                Contact
                            </Anchor>
                        </div>
                    </div>
                    {/* Developer */}
                    <div>
                        <Title order={4} className="text-lg font-bold text-gray-800 mb-4">
                            Developer
                        </Title>
                        <div className="space-y-2">
                            <Anchor
                                href="#"
                                className="block text-gray-600 hover:text-blue-600"
                            >
                                API Docs
                            </Anchor>
                            <Anchor
                                href="#"
                                className="block text-gray-600 hover:text-blue-600"
                            >
                                GitHub Repository
                            </Anchor>
                            <Anchor
                                href="#"
                                className="block text-gray-600 hover:text-blue-600"
                            >
                                Whitepaper
                            </Anchor>
                        </div>
                    </div>
                    {/* Contact Info */}
                    <div>
                        <Title order={4} className="text-lg font-bold text-gray-800 mb-4">
                            Contact Info
                        </Title>
                        <div className="space-y-3">
                            <Group gap="xs">
                                <Mail size={18} className="text-gray-600" />
                                <Text className="text-gray-600">support@yourplatform.com</Text>
                            </Group>
                            <div className="flex space-x-4 pt-2">
                                <Anchor href="#" className="text-gray-600 hover:text-blue-600">
                                    <Github size={24} />
                                </Anchor>
                                <Anchor href="#" className="text-gray-600 hover:text-blue-600">
                                    <Linkedin size={24} />
                                </Anchor>
                                <Anchor href="#" className="text-gray-600 hover:text-blue-600">
                                    <Twitter size={24} />
                                </Anchor>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 pt-6 border-t border-gray-200">
                    <Text size="sm" className="text-center text-gray-500">
                        © {new Date().getFullYear()} Device Verification Platform. All
                        rights reserved.
                    </Text>
                </div>
            </Container>
        </footer>
    )
}
