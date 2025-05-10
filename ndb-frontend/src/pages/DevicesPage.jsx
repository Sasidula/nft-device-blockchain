import React from "react";
import { Header }  from "../components/Header.jsx";
import { Footer }  from "../components/Footer.jsx";
import { SearchBar } from "../components/SearchBar.jsx";
import { DeviceCard } from "../components/DeviceCard.jsx";
import "../components/DevicesPage.css";
import {Button, Group, Text, Title} from "@mantine/core";
import {ArrowRight, ShieldCheck, ShoppingBag} from "lucide-react";

export const DevicesPage = () => {
    const devices = [
        { id: 1, type: "phone", name: "iPhone 13 Pro", dateAdded: "2023-05-12" },
        { id: 2, type: "laptop", name: "MacBook Air M2", dateAdded: "2023-04-03" },
        { id: 3, type: "tablet", name: "iPad Pro 12.9", dateAdded: "2023-03-22" },
        { id: 4, type: "phone", name: "Samsung Galaxy S22", dateAdded: "2023-02-15" },
        { id: 5, type: "laptop", name: "Dell XPS 15", dateAdded: "2023-01-30" },
        { id: 6, type: "other", name: "Apple Watch Series 8", dateAdded: "2022-12-25" },
        { id: 7, type: "tablet", name: "Samsung Galaxy Tab S8", dateAdded: "2022-11-11" },
    ];

    return (
        <div className="devices">
            <Header/>
            <div className="devices-page-container">
                <div className= "device-text">
                    <Title order={1} className="device-title">
                        My Devices
                    </Title>
                    <Text size="xl" className="device-subtext">
                        View and manage your registered devices. Track ownership, warranty, and resale options.
                    </Text>
                </div>
                <div className="search-bar-wrapper">
                    <SearchBar placeholder="Search Devices by Model, NFT or Serial Number" />
                </div>

                <div className="device-section">
                    <Text className="register-title">
                        Registered Devices
                    </Text>
                    <div className="device-list">
                        {devices.map((device) => (
                            <DeviceCard
                                key={device.id}
                                type={device.type}
                                name={device.name}
                                dateAdded={device.dateAdded}
                            />
                        ))}
                    </div>
                </div>
                <div className="action-section">
                    <text className="action-title">
                        Device Action
                    </text>
                    <Group className="action-buttons">
                        <Button
                            size="md"
                            className="register-btn"
                        >
                            Register New Device
                        </Button>
                        <Button
                            size="md"
                            className="report-btn"
                        >
                            Report Lost/Stolen
                        </Button>
                    </Group>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};
