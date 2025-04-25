import React from "react"
import { Card, Title, Text } from "@mantine/core"
export function FeatureCard({ icon, title, description }) {
    return (
        <Card
            shadow="sm"
            padding="xl"
            radius="md"
            className="border border-gray-100 hover:shadow-md transition-shadow duration-300 h-full"
        >
            <div className="flex flex-col h-full">
                <div className="mb-4">{icon}</div>
                <Title order={3} className="text-xl font-semibold text-gray-800 mb-2">
                    {title}
                </Title>
                <Text size="md" className="text-gray-600 flex-grow">
                    {description}
                </Text>
            </div>
        </Card>
    )
}
