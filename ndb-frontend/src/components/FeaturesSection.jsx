import React from "react"
import { Container, Title, Text } from "@mantine/core"
import { FeatureCard } from "./FeatureCard"
import {
    ShieldCheck,
    ShoppingBag,
    Clock,
    Brain,
    AlertTriangle
} from "lucide-react"
export function FeaturesSection() {
    const features = [
        {
            icon: <ShieldCheck size={32} className="text-blue-600" />,
            title: "Verified Ownership via Blockchain",
            description:
                "All registered devices are minted as NFTs on Polygon. Transparent ownership history secured forever."
        },
        {
            icon: <ShoppingBag size={32} className="text-blue-600" />,
            title: "Trusted Resale Marketplace",
            description:
                "Buy and sell used devices with full authenticity. Transfer with verified ownership and warranty."
        },
        {
            icon: <Clock size={32} className="text-blue-600" />,
            title: "Warranty Tracking",
            description:
                "Know exactly how long warranty lasts. Manufacturers and retailers can upload/verify warranties."
        },
        {
            icon: <Brain size={32} className="text-blue-600" />,
            title: "AI-Powered Price Estimation",
            description:
                "See real-time value based on usage, age, and condition. Helps you price competitively and fairly."
        },
        {
            icon: <AlertTriangle size={32} className="text-blue-600" />,
            title: "Theft and Blacklist Protection",
            description:
                "Lost or stolen devices can be reported and flagged. Buyers get notified if a device is blacklisted."
        }
    ]
    return (
        <section className="py-20 bg-white w-full">
            <Container size="lg">
                <div className="text-center mb-12">
                    <Title order={2} className="text-3xl font-bold text-gray-800 mb-4">
                        Why Use Our Platform?
                    </Title>
                    <Text size="lg" className="text-gray-600 max-w-2xl mx-auto">
                        Our comprehensive solution ensures your devices are protected,
                        authenticated, and properly valued.
                    </Text>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    )
}
