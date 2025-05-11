import { useState, useEffect } from "react";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import { SearchBar } from "../components/SearchBar";
import { DeviceCard } from "../components/DeviceCard";
import { CategoryFilter } from "../components/CategoryFilter";
import "../components/MarketPage.css";
import {Text, Title} from "@mantine/core";
import axios from "axios";

export const MarketPage = () => {
    const categories = ["All Devices", "Smartphone", "Laptops", "Tablets", "Other"];
    const [selectedCategory, setSelectedCategory] = useState("All Devices");
    const [searchText, setSearchText] = useState("");
    const [marketDevices, setMarketDevices] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/market")
            .then((response) => {
                setMarketDevices(response.data);
            })
            .catch((error) => {
                console.error("Error fetching market devices:", error);
            });
    }, []);

    const filteredDevices = marketDevices.filter((item) => {
        const device = item.ownership.devices;
        const matchesCategory =
            selectedCategory === "All Devices" ||
            device.deviceType.toLowerCase() === selectedCategory.toLowerCase().slice(0, -1);

        const matchesSearch =
            device.name.toLowerCase().includes(searchText.toLowerCase());

        return matchesCategory && matchesSearch;
    });


    return (
        <div className="market">
            <Header/>
            <div className="market-page-container">
                <div className= "market-text">
                    <Title order={1} className="market-title">
                        Device Marketplace
                    </Title>
                    <Text size="xl" className="market-subtext">
                        Browse verified devices, compare prices, and buy with confidence.
                    </Text>
                </div>
                <div className="market-searchbar">
                    <SearchBar
                        placeholder="Search for devices, brands, or categories"
                        searchText={searchText}
                        setSearchText={setSearchText}
                    />
                </div>
            </div>
            <div className="market-body">
                <div className="category-filter">
                    <CategoryFilter
                        categories={categories}
                        selectedCategory={selectedCategory}
                        onCategoryChange={setSelectedCategory}
                    />
                </div>
                <div className="device-grid">
                    {filteredDevices.map((item) => {
                        const device = item.ownership.devices;
                        return (
                            <DeviceCard
                                key={item.id}
                                id={device.deviceId}
                                type={device.deviceType}
                                name={device.name}
                                price={item.price}
                                isMarketCard={true}
                            />
                        );
                    })}
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};
