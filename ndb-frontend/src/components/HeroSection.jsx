import React from "react"
import { Button, Container, Title, Text, Group } from "@mantine/core"
import { ArrowRight, ShieldCheck, ShoppingBag } from "lucide-react"
export function HeroSection() {
    return (
        <section className="py-20 bg-gradient-to-b from-blue-50 to-white w-full">
            <Container size="lg">
                <div className="flex flex-col md:flex-row items-center gap-10">
                    <div className="flex-1 space-y-6">
                        <Title
                            order={1}
                            className="text-4xl md:text-5xl font-bold text-gray-800"
                        >
                            Digitally Certify, Securely Resell, and Know the True Value of
                            Your Devices.
                        </Title>
                        <Text size="xl" className="text-gray-600 max-w-2xl">
                            Own your electronics with confidence. Register, verify, and trade
                            devices securely using blockchain and AI-powered pricing.
                        </Text>
                        <Group className="pt-4">
                            <Button
                                size="lg"
                                color="blue"
                                className="bg-blue-600 hover:bg-blue-700"
                                rightSection={<ShieldCheck size={18} />}
                            >
                                Register a Device
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                color="blue"
                                rightSection={<ShoppingBag size={18} />}
                            >
                                Explore Marketplace
                            </Button>
                            <Button
                                size="lg"
                                variant="subtle"
                                color="blue"
                                rightSection={<ArrowRight size={18} />}
                            >
                                Learn More
                            </Button>
                        </Group>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1581092160607-ee22732f9e34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                            alt="Device verification illustration"
                            className="rounded-lg shadow-2xl max-w-full h-auto max-h-96 object-cover"
                        />
                    </div>
                </div>
            </Container>
        </section>
    )
}
