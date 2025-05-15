import React, { useEffect, useState } from "react";
import { PopupWrapper } from "../shared/PopupWrapper";
import { StatusCard } from "../shared/StatusCard";
import { DollarSign } from "lucide-react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from "recharts";
import "./PricePopup.css";

export const PricePopup = ({ isOpen, onClose, price, originalPrice, releaseDate, purchaseDate }) => {
    const [priceData, setPriceData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!isOpen) return;

        const release_year = new Date(releaseDate).getFullYear();
        const release_price = originalPrice;
        const purchase_date = new Date(purchaseDate).toISOString().split("T")[0];

        const fetchPriceData = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch("http://localhost:8080/api/model/predict-next-month-price", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ release_year, release_price, purchase_date })
                });

                if (!response.ok) {
                    throw new Error("Failed to fetch price predictions");
                }

                const data = await response.json();
                const formattedData = Object.entries(data).map(([month, price]) => ({
                    month,
                    price
                }));

                setPriceData(formattedData);
            } catch (err) {
                console.error("Error fetching price data:", err);
                setError("Could not load price predictions.");
            } finally {
                setLoading(false);
            }
        };

        fetchPriceData();
    }, [isOpen, originalPrice, releaseDate, purchaseDate]);

    return (
        <PopupWrapper isOpen={isOpen} onClose={onClose} title="Price Estimates">
            <div className="price-popup">
                <div className="chart-section">
                    <DollarSign className="price-icon" size={24} />
                    <h3 className="chart-title">Price Trends Over Time</h3>

                    <div className="chart-container">
                        {loading ? (
                            <p>Loading chart...</p>
                        ) : error ? (
                            <p className="error-message">{error}</p>
                        ) : priceData.length > 0 ? (
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart
                                    data={priceData}
                                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Line
                                        type="monotone"
                                        dataKey="price"
                                        stroke="#2563eb"
                                        activeDot={{ r: 8 }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        ) : (
                            <p>No price prediction data available.</p>
                        )}
                    </div>
                </div>

                <StatusCard icon={DollarSign} title="Current Price" value={price} />
            </div>
        </PopupWrapper>
    );
};
