import React, { useState } from "react";
import {
    TextInput,
    PasswordInput,
    Button,
    Stack,
    Title,
    Text,
    Card,
    Group,
    Divider,
    Stepper,
} from "@mantine/core";
import "./RegisterCard.css";

export function RegisterCard() {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        address: "",
        emailAddress: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Registration submitted:", formData);
    };

    return (
        <Card className="register-card" shadow="lg" padding="xl" radius="lg">
            <div className="register-card-content">
                <Title order={2} className="register-title">
                    Create Your Account
                </Title>
                <Text size="sm" color="dimmed" className="register-subtitle">
                    Please fill in the details to get started
                </Text>

                <Stepper
                    active={step}
                    onStepClick={setStep}
                    breakpoint="sm"
                    className="register-stepper"
                    styles={{
                        stepIcon: {
                            backgroundColor: "#0D99FF", // default bg
                            borderColor: "#0D99FF", // default border
                            color: "#ffffff",
                        },
                    }}
                >
                    <Stepper.Step  />
                    <Stepper.Step  />
                    <Stepper.Step  />
                </Stepper>

                <form className="register-form" onSubmit={handleSubmit}>
                    <Stack spacing="lg" mt="lg">
                        {step === 0 && (
                            <>
                                <TextInput
                                    label="Full Name"
                                    name="fullName"
                                    placeholder="John Doe"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                    required
                                />
                                <TextInput
                                    label="Phone Number"
                                    name="phoneNumber"
                                    placeholder="07XXXXXXXX"
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                    required
                                />
                            </>
                        )}

                        {step === 1 && (
                            <>
                                <TextInput
                                    label="Address"
                                    name="address"
                                    placeholder="123, Main Street"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                />
                                <TextInput
                                    label="Email Address"
                                    name="emailAddress"
                                    placeholder="your@email.com"
                                    type="email"
                                    autoComplete="email"
                                    value={formData.emailAddress}
                                    onChange={handleChange}
                                    required
                                />
                            </>
                        )}

                        {step === 2 && (
                            <>
                                <PasswordInput
                                    label="Password"
                                    name="password"
                                    placeholder="Create a password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    autoComplete="new-password"
                                />
                                <PasswordInput
                                    label="Confirm Password"
                                    name="confirmPassword"
                                    placeholder="Re-enter your password"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                            </>
                        )}

                        <Group position="apart" grow mt="xl">
                            {step > 0 && (
                                <Button onClick={prevStep} className="back-btn-card">
                                    Back
                                </Button>
                            )}
                            {step < 2 ? (
                                <Button onClick={nextStep} className="register-btn-card">
                                    Next
                                </Button>
                            ) : (
                                <Button type="submit" className="register-btn-card">
                                    Register
                                </Button>
                            )}
                        </Group>
                    </Stack>
                </form>
            </div>
        </Card>
    );
}
