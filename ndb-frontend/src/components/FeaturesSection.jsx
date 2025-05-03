// src/components/FeaturesSection.jsx
import React from "react";
import { Container, Title, Text } from "@mantine/core";
import {
    ShieldCheck,
    ShoppingBag,
    Clock,
    Brain,
    AlertTriangle,
} from "lucide-react";
import "./FeaturesSection.css";

// FeatureCard component inside the same file
function FeatureCard({ icon, title, description }) {
    return (
        <div className="feature-card">
            <div className="feature-icon-wrapper">{icon}</div>
            <h3 className="feature-title">{title}</h3>
            <p className="feature-description">{description}</p>
        </div>
    );
}

export function FeaturesSection() {
    const features = [
        {
            icon: <ShieldCheck size={32} className="icon" />,
            title: "Verified Ownership via Blockchain",
            description:
                "All registered devices are minted as NFTs on Polygon. Transparent ownership history secured forever.",
        },
        {
            icon: <ShoppingBag size={32} className="icon" />,
            title: "Trusted Resale Marketplace",
            description:
                "Buy and sell used devices with full authenticity. Transfer with verified ownership and warranty.",
        },
        {
            icon: <Clock size={32} className="icon" />,
            title: "Warranty Tracking",
            description:
                "Know exactly how long warranty lasts. Manufacturers and retailers can upload/verify warranties.",
        },
        {
            icon: <Brain size={32} className="icon" />,
            title: "AI-Powered Price Estimation",
            description:
                "See real-time value based on usage, age, and condition. Helps you price competitively and fairly.",
        },
        {
            icon: <AlertTriangle size={32} className="icon" />,
            title: "Theft and Blacklist Protection",
            description:
                "Lost or stolen devices can be reported and flagged. Buyers get notified if a device is blacklisted.",
        },
    ];

    return (
        <section className="features-section">
            <Container size="xl">
                <div className="features-header">
                    <Title order={2} className="features-title">
                        Why Use Our Platform?
                    </Title>
                    <Text size="lg" className="features-subtext">
                        Our comprehensive solution ensures your devices are protected,
                        authenticated, and properly valued.
                    </Text>
                </div>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}
