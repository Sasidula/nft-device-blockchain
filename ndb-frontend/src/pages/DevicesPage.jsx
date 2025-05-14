import React, { useEffect, useState } from "react";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import { SearchBar } from "../components/SearchBar.jsx";
import { DeviceCard } from "../components/DeviceCard.jsx";
import "../components/DevicesPage.css";
import { Button, Group, Text, Title } from "@mantine/core";
import { ReportDevicePopup } from "../components/popups/ReportDevicePopup.jsx";

export const DevicesPage = () => {
    const [devices, setDevices] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [showReportDevicePopup, setShowReportDevicePopup] = useState(false)

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user?.user) {
            console.error("User not found in localStorage.");
            return;
        }

        fetch(`http://localhost:8080/api/devices/owner/${user.user}`)
            .then((res) => {
                if (!res.ok) throw new Error("Failed to fetch devices");
                return res.json();
            })
            .then((data) => {
                setDevices(data);
            })
            .catch((err) => console.error("Error fetching devices:", err));
    }, []);

    return (
        <div className="devices">
            <Header />
            <div className="devices-page-container">
                <div className="device-text">
                    <Title order={1} className="device-title">My Devices</Title>
                    <Text size="xl" className="device-subtext">
                        View and manage your registered devices. Track ownership, warranty, and resale options.
                    </Text>
                </div>

                <div className="search-bar-wrapper">
                    <SearchBar
                        placeholder="Search Devices by Model, NFT or Serial Number"
                        searchText={searchText}
                        setSearchText={setSearchText}
                    />
                </div>

                <div className="device-section">
                    <Text className="register-title">Registered Devices</Text>
                    <div className="device-list">
                        {devices
                            .filter((device) => {
                                const text = searchText.toLowerCase();
                                return (
                                    device.name?.toLowerCase().includes(text) ||
                                    String(device.deviceId).toLowerCase().includes(text) ||
                                    device.deviceType?.toLowerCase().includes(text)
                                );
                            })
                            .map((device) => (
                                <DeviceCard
                                    key={device.deviceId}
                                    id={device.deviceId}
                                    type={device.deviceType}
                                    name={device.name}
                                    dateAdded={device.purchaseDate}
                                />)
                            )
                        }
                    </div>
                </div>

                <div className="action-section">
                    <Text className="action-title">Device Action</Text>
                    <Group className="action-buttons">
                        <Button
                            size="md"
                            className="report-btn"
                            onClick={() => setShowReportDevicePopup(true)}
                        >
                            Report Lost/Stolen
                        </Button>
                    </Group>
                </div>
            </div>
            <ReportDevicePopup
                isOpen={showReportDevicePopup}
                onClose={() => setShowReportDevicePopup(false)}
            />
            <Footer />
        </div>
    );
};
