import React, { useState } from "react";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import { SearchBar } from "../components/SearchBar";
import { DeviceCard } from "../components/DeviceCard";
import { CategoryFilter } from "../components/CategoryFilter";
import "../components/MarketPage.css";
import {Text, Title} from "@mantine/core";

export const MarketPage = () => {
    const categories = ["All Devices", "Phones", "Laptops", "Tablets", "Other"];
    const [selectedCategory, setSelectedCategory] = useState("All Devices");

    const marketDevices = [
        { id: 1, type: "phone", name: "iPhone 14 Pro Max", price: "$1,099" },
        { id: 2, type: "laptop", name: "MacBook Pro 16", price: "$2,499" },
        { id: 3, type: "tablet", name: "iPad Air", price: "$599" },
        { id: 4, type: "phone", name: "Samsung Galaxy S23 Ultra", price: "$1,199" },
        { id: 5, type: "laptop", name: "Dell XPS 13 Plus", price: "$1,299" },
        { id: 6, type: "tablet", name: "Samsung Galaxy Tab S9", price: "$849" },
        { id: 7, type: "phone", name: "Google Pixel 7 Pro", price: "$899" },
        { id: 8, type: "laptop", name: "Lenovo ThinkPad X1", price: "$1,649" },
        { id: 9, type: "other", name: "Apple Watch Ultra", price: "$799" },
    ];

    const filteredDevices =
        selectedCategory === "All Devices"
            ? marketDevices
            : marketDevices.filter((device) => {
                const category = selectedCategory.toLowerCase().slice(0, -1); // e.g. "Phones" -> "phone"
                return device.type === category;
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
                    <SearchBar placeholder="Search for devices, brands, or categories" />
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
                    {filteredDevices.map((device) => (
                        <DeviceCard
                            key={device.id}
                            type={device.type}
                            name={device.name}
                            price={device.price}
                            isMarketCard={true}
                        />
                    ))}
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};
