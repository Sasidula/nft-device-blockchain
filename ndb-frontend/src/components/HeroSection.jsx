// src/components/HeroSection.jsx
import React from "react";
import { Button, Container, Title, Text, Group } from "@mantine/core";
import { ArrowRight, ShieldCheck, ShoppingBag } from "lucide-react";
import "./HeroSection.css";
import heroImage from '../assects/hero-image.jpg';

export function HeroSection() {
    return (
        <section className="hero-section">
            <Container size="xl">
                <div className="hero-content">
                    <div className="hero-image-wrapper">
                        <img
                            src= {heroImage}
                            alt= "Device verification illustration"
                            className="hero-image"
                        />
                    </div>
                    <div className="hero-text">
                        <Title order={1} className="hero-title">
                            Digitally Certify, Securely Resell, and Know the True Value of
                            Your Devices.
                        </Title>
                        <Text size="xl" className="hero-subtext">
                            Own your electronics with confidence. Register, verify, and trade
                            devices securely using blockchain and AI-powered pricing.
                        </Text>
                        <Group className="hero-buttons">
                            <Button
                                size="lg"
                                className="register-btn"
                                rightSection={<ShieldCheck size={18} />}
                            >
                                Register a Device
                            </Button>
                            <Button
                                size="lg"
                                className="marketplace-btn"
                                rightSection={<ShoppingBag size={18} />}
                            >
                                Explore Marketplace
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="learn-more-btn"
                                rightSection={<ArrowRight size={18} />}
                            >
                                Learn More
                            </Button>
                        </Group>
                    </div>
                </div>
            </Container>
        </section>
    );
}
