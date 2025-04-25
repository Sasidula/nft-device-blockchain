import React, { useState } from "react"
import {
    TextInput,
    PasswordInput,
    Button,
    Text,
    Title,
    Container,
    Stack
} from "@mantine/core"
import {RegisterHeader} from "../components/RegisterHeader.jsx";
export const RegisterPage = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        emailAddress: "",
        password: "",
        confirmPassword: ""
    })
    const handleChange = e => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit = e => {
        e.preventDefault()
        console.log("Form submitted:", formData)
        // Submit logic would go here
    }
    const handleLogin = () => {
        console.log("Navigate to login page")
        navigate('/register');
    }
    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <RegisterHeader/>
            <Container size="sm" className="flex-grow py-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                    <Title
                        order={1}
                        className="text-center text-2xl font-bold text-gray-800"
                    >
                        Create Your Account
                    </Title>
                    <Text className="text-center text-gray-600 mt-2 mb-6">
                        Please fill in your details to get started
                    </Text>
                    <form onSubmit={handleSubmit}>
                        <Stack spacing="md">
                            <TextInput
                                label="Full Name"
                                name="fullName"
                                placeholder="Enter your full name"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                            <TextInput
                                label="Phone Number"
                                name="phoneNumber"
                                placeholder="Enter your phone number"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                            />
                            <TextInput
                                label="Email Address"
                                name="emailAddress"
                                placeholder="Enter your email address"
                                value={formData.emailAddress}
                                onChange={handleChange}
                                required
                                type="email"
                            />
                            <PasswordInput
                                label="Create Password"
                                name="password"
                                placeholder="Create a secure password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <PasswordInput
                                label="Confirm Password"
                                name="confirmPassword"
                                placeholder="Confirm your password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                            <Button type="submit" fullWidth size="md" className="mt-4">
                                Create account
                            </Button>
                            <div className="text-center mt-4">
                                <Text size="sm" className="text-gray-600">
                                    Already have an account?{" "}
                                    <span
                                        className="text-blue-600 cursor-pointer hover:underline"
                                        onClick={handleLogin}
                                    >
                                        Log in
                                    </span>
                                </Text>
                            </div>
                        </Stack>
                    </form>
                </div>
            </Container>
        </div>
    )
}
