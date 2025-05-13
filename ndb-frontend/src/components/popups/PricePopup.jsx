import React from "react";
import { PopupWrapper } from "../shared/PopupWrapper";
import { StatusCard } from "../shared/StatusCard";
import {DollarSign, Shield} from "lucide-react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";
import "./PricePopup.css"; // import the CSS file

export const PricePopup = ({ isOpen, onClose, price }) => {
    const priceData = [
        { month: "Jan", price: 2499 },
        { month: "Feb", price: 2450 },
        { month: "Mar", price: 2399 },
        { month: "Apr", price: 2425 },
        { month: "May", price: 2499 }
    ];

    return (
        <PopupWrapper isOpen={isOpen} onClose={onClose} title="Price Estimates">
            <div className="price-popup">
                <div className="chart-section">
                    <DollarSign className="price-icon" size={24} />
                    <h3 className="chart-title">Price trends over time</h3>
                    <div className="chart-container">
                        <LineChart
                            width={500}
                            height={300}
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
                    </div>
                </div>

                <StatusCard icon={DollarSign} title="Price" value={price} />
            </div>
        </PopupWrapper>
    );
};
