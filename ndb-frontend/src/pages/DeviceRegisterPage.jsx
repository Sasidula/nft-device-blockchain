import React, { useState } from 'react';
import '../components/DeviceRegisterPage.css';
import { Header } from "../components/Header.jsx";
import { Text, Title } from "@mantine/core";
import {Footer} from "../components/Footer.jsx";
import axios from 'axios';

export const DeviceRegisterPage = () => {
    const [customerData, setCustomerData] = useState({
        name: '',
        brand: '',
        serialNumber: '',
        modelNumber: '',
        deviceType: '',
        price: '',
        warrantyStart: '',
        warrantyEnd: '',
        note: '',
        cpu: '',
        storage: '',
        ram: '',
        display: '',
        battery: '',
        os: '',
        ports: '',
        camera: '',
        adapter: '',
        ownerName: '',
        ownerEmail: ''
    });

    const [imageFile, setImageFile] = useState(null);


    const handleChange = (e) => {
        setCustomerData({
            ...customerData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async () => {
        try {
            // 1. Get owner info using email
            const email = customerData.ownerEmail;
            const userResponse = await axios.get(`http://localhost:8080/api/user/email/${email}`);
            const owner = userResponse.data[0];

            if (!owner || !owner.user) {
                alert("Invalid email or user not found.");
                return;
            }

            const userId = owner.user;

            const user = JSON.parse(localStorage.getItem("user"));
            if (!user?.user) {
                console.error("User not found in localStorage.");
                return;
            }

            let role;
            role = user.role;

            // 2. Convert image to blob
            let imageBlob = null;
            if (imageFile) {
                const reader = new FileReader();
                reader.readAsArrayBuffer(imageFile);

                await new Promise((resolve) => {
                    reader.onloadend = () => {
                        imageBlob = Array.from(new Uint8Array(reader.result)); // convert to array of bytes
                        resolve();
                    };
                });
            }

            // 2. Construct payload
            const devicePayload = {
                name: customerData.name,
                brand: customerData.brand,
                modelNumber: customerData.modelNumber,
                serialNumber: customerData.serialNumber,
                deviceType: customerData.deviceType,
                originalPrice: parseFloat(customerData.price),
                //releaseDate: new Date(customerData.warrantyStart).toISOString(),
                //purchaseDate: new Date().toISOString(),
                releaseDate: "2023-09-12T00:00:00.000+00:00",
                purchaseDate: new Date().toISOString(),
                imageBlob: imageBlob,
                nftTokenId: null,
                registeredBy: {
                    user: user.user
                },
                currentOwner: {
                    user: userId
                },
                blacklisted: false,
                //createdAt:null
                createdAt: new Date().toISOString()
            };

            const deviceResponse = await axios.post('http://localhost:8080/api/devices', devicePayload);
            const deviceId = deviceResponse.data.deviceId;

            // Step 4: Register specifications
            const specsPayload = {
                processor: customerData.cpu,
                storage: customerData.storage,
                ram: customerData.ram,
                display: customerData.display,
                battery: customerData.battery,
                os: customerData.os,
                ports: customerData.ports,
                camera: customerData.camera,
                powerAdapter: customerData.adapter,
                device: deviceId
            };

            await axios.post('http://localhost:8080/api/specs', specsPayload);

            // Step 5: Register warranty
            const warrantyPayload = {
                device: deviceId,
                //start_date: customerData.warrantyStart,
                //end_date: customerData.warrantyEnd,
                start_date: null,
                end_date: null,
                added_by: {
                    user: user.user
                },
                notes: customerData.note
            };

            await axios.post('http://localhost:8080/api/warranties', warrantyPayload);

            // Step 5: Register ownership
            const ownershipPayload = {
                device_id: deviceId,
                from_user_id: user.user,
                to_user_id: userId,
                transfer_date: new Date().toISOString(),
                transaction_hash: null,
                publicKey: null,
                privateKey: null
            };

            await axios.post('http://localhost:8080/api/history', ownershipPayload);

            alert("Device, specifications, and warranty registered successfully!");
            window.location.href = "/devices";

        } catch (error) {
            console.error("Error during registration:", error);
            alert("Something went wrong during device registration.");
        }
    };


    return (
        <div className="register-devices">
            <div className="form-container">
                <Header />
                <div className="device-register-page-container">
                    <div className="device-register-text">
                        <Title order={1} className="device-register-title">
                            Device Marketplace
                        </Title>
                        <Text size="xl" className="device-register-subtext">
                            Browse verified devices, compare prices, and buy with confidence.
                        </Text>
                    </div>
                </div>

                {/* Device Information */}
                <section>
                    <Text className="device-register-section-title">Device Information</Text>
                    <div className="form-grid">
                        <div className="form-group">
                            <label className="form-grid-text">Enter Device Name</label>
                            <input
                                type="text"
                                name="name"
                                value={customerData.name}
                                onChange={handleChange}
                                placeholder="Enter Device Name"
                                className="input-field"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-grid-text">Enter Device Brand</label>
                            <input
                                type="text"
                                name="brand"
                                value={customerData.brand}
                                onChange={handleChange}
                                placeholder="Enter Device Brand"
                                className="input-field"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-grid-text">Enter Serial Number</label>
                            <input
                                type="text"
                                name="serialNumber"
                                value={customerData.serialNumber}
                                onChange={handleChange}
                                placeholder="Enter Serial Number"
                                className="input-field"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-grid-text">Enter Model Number</label>
                            <input
                                type="text"
                                name="modelNumber"
                                value={customerData.modelNumber}
                                onChange={handleChange}
                                placeholder="Enter Model Number"
                                className="input-field"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-grid-text">Enter Device Type</label>
                            <select
                                name="deviceType"
                                value={customerData.deviceType}
                                onChange={handleChange}
                                className="input-field"
                            >
                                <option value="">Select Device Type</option>
                                <option value="Laptop">Laptop</option>
                                <option value="Phone">Phone</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="form-grid-text">Enter Price</label>
                            <input
                                type="text"
                                name="price"
                                value={customerData.price}
                                onChange={handleChange}
                                placeholder="Enter Price"
                                className="input-field"
                            />
                        </div>
                    </div>
                </section>

                {/* Warranty Information */}
                <section>
                    <Text className="device-register-section-title">Warranty Information</Text>
                    <div className="form-grid">
                        <div className="form-group">
                            <label className="form-grid-text">Warranty Start Date</label>
                            <input
                                type="text"
                                name="warrantyStart"
                                value={customerData.warrantyStart}
                                onChange={handleChange}
                                placeholder="Warranty Start Date"
                                className="input-field"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-grid-text">Warranty End Date</label>
                            <input
                                type="text"
                                name="warrantyEnd"
                                value={customerData.warrantyEnd}
                                onChange={handleChange}
                                placeholder="Warranty End Date"
                                className="input-field"
                            />
                        </div>
                    </div>

                    <textarea
                        name="note"
                        value={customerData.note}
                        onChange={handleChange}
                        placeholder="Note (e.g., warranty terms, coverage details)"
                        className="textarea-field"
                    />
                </section>

                {/* Specifications */}
                <section>
                    <Text className="device-register-section-title">Specifications</Text>
                    <div className="form-grid">
                        <div className="form-group">
                            <label className="form-grid-text">Processor (CPU)</label>
                            <input
                                type="text"
                                name="cpu"
                                value={customerData.cpu}
                                onChange={handleChange}
                                placeholder="Processor (CPU)"
                                className="input-field"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-grid-text">Storage</label>
                            <input
                                type="text"
                                name="storage"
                                value={customerData.storage}
                                onChange={handleChange}
                                placeholder="Storage"
                                className="input-field"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-grid-text">RAM</label>
                            <input
                                type="text"
                                name="ram"
                                value={customerData.ram}
                                onChange={handleChange}
                                placeholder="RAM"
                                className="input-field"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-grid-text">Display</label>
                            <input
                                type="text"
                                name="display"
                                value={customerData.display}
                                onChange={handleChange}
                                placeholder="Display"
                                className="input-field"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-grid-text">Battery</label>
                            <input
                                type="text"
                                name="battery"
                                value={customerData.battery}
                                onChange={handleChange}
                                placeholder="Battery"
                                className="input-field"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-grid-text">Operating System</label>
                            <input
                                type="text"
                                name="os"
                                value={customerData.os}
                                onChange={handleChange}
                                placeholder="Operating System"
                                className="input-field"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-grid-text">Ports</label>
                            <input
                                type="text"
                                name="ports"
                                value={customerData.ports}
                                onChange={handleChange}
                                placeholder="Ports"
                                className="input-field"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-grid-text">Camera</label>
                            <input
                                type="text"
                                name="camera"
                                value={customerData.camera}
                                onChange={handleChange}
                                placeholder="Camera"
                                className="input-field"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-grid-text">Power Adapter</label>
                            <input
                                type="text"
                                name="adapter"
                                value={customerData.adapter}
                                onChange={handleChange}
                                placeholder="Power Adapter"
                                className="input-field"
                            />
                        </div>
                    </div>
                    <div className= "device-image">
                        <div className="form-group">
                            <label className="form-grid-text">Upload Device Image</label>
                            <input
                                type="file"
                                id="deviceImage"
                                className="input-field-image"
                                accept="image/*"
                                onChange={(e) => setImageFile(e.target.files[0])}
                            />
                        </div>
                    </div>
                </section>

                {/* Owner Info */}
                <section>
                    <Text className="device-register-section-title">Owner Information</Text>
                    <div className="form-grid">
                        <div className="form-group">
                            <label className="form-grid-text">Enter your name</label>
                            <input
                                type="text"
                                name="ownerName"
                                value={customerData.ownerName}
                                onChange={handleChange}
                                placeholder="Enter your name"
                                className="input-field"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-grid-text">Enter your email</label>
                            <input
                                type="email"
                                name="ownerEmail"
                                value={customerData.ownerEmail}
                                onChange={handleChange}
                                placeholder="your.email@example.com"
                                className="input-field"
                            />
                        </div>
                    </div>

                    <p className="link-text">Don’t have an account? Sign up</p>
                </section>

                <button className="submit-button" onClick={handleSubmit}>
                    Register Device
                </button>
            </div>
        <div>
            <Footer/>
        </div>
    </div>
    );
};
