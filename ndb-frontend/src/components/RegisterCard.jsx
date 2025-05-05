import React, { useState, useEffect } from "react";
import {
    TextInput,
    PasswordInput,
    Button,
    Stack,
    Title,
    Text,
    Card,
    Group,
    Stepper,
    Select,
    Checkbox
} from "@mantine/core";
import "./RegisterCard.css";

export function RegisterCard() {
    const [step, setStep] = useState(0);  // start step at 0 (role selection)
    const [userType, setUserType] = useState("");
    const [formData, setFormData] = useState({
        userType: "",
        fullName: "",
        emailAddress: "",
        address: "",
        phoneNumber: "",
        serviceProvided: [],
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const nextStep = () => {
        if (step === 0 && !userType) {
            alert("Please select a user type to proceed.");
            return;
        }
        setStep((prev) => prev + 1);
    };

    const prevStep = () => setStep((prev) => prev - 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Registration submitted:", formData);
    };

    // Update the total number of steps based on the selected user type
    const totalSteps = () => {
        //if (userType === "ADMIN") return 2;
        if (userType === "CONSUMER") return 3;
        if (userType === "RETAILER") return 4;
        return 1;
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

                {/* Only show Stepper if userType is selected and step > 0 */}
                {userType && step > 0 && (
                    <Stepper
                        active={step - 1} // Subtract 1 from step to align with Stepper's display
                        onStepClick={setStep}
                        breakpoint="sm"
                        className="register-stepper"
                        styles={{
                            stepIcon: {
                                backgroundColor: "#0D99FF",
                                borderColor: "#0D99FF",
                                color: "#ffffff"
                            }
                        }}
                    >
                        {Array.from({ length: totalSteps() }).map((_, i) => (
                            <Stepper.Step key={i} />
                        ))}
                    </Stepper>
                )}

                <form className="register-form" onSubmit={handleSubmit}>
                    <Stack spacing="lg" mt="lg">
                        {step === 0 && (
                            <div>
                                <Select
                                    label="Select Your User Type"
                                    placeholder="User Type"
                                    data={["CONSUMER", "RETAILER"]}
                                    value={userType}
                                    onChange={(value) => {
                                        setUserType(value);
                                        setFormData((prev) => ({ ...prev, userType: value }));
                                    }}
                                    required
                                />
                            </div>
                        )}

                        <div style={{ minHeight: '155px' }}>
                            {step === 1 && (
                                <>
                                    <TextInput
                                        label="Full Name"
                                        placeholder="Enter your name"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                    />
                                    <TextInput
                                        label="Email Address"
                                        placeholder="your.email@example.com"
                                        name="emailAddress"
                                        value={formData.emailAddress}
                                        onChange={handleChange}
                                        required
                                    />
                                </>
                            )}

                            {/*{step === 2 && (userType === "ADMIN") && (*/}
                            {/*    <>*/}
                            {/*        <PasswordInput*/}
                            {/*            label="Password"*/}
                            {/*            placeholder="Enter password"*/}
                            {/*            name="password"*/}
                            {/*            value={formData.password}*/}
                            {/*            onChange={handleChange}*/}
                            {/*            required*/}
                            {/*        />*/}
                            {/*        <PasswordInput*/}
                            {/*            label="Confirm Password"*/}
                            {/*            placeholder="Re-Enter password"*/}
                            {/*            name="confirmPassword"*/}
                            {/*            value={formData.confirmPassword}*/}
                            {/*            onChange={handleChange}*/}
                            {/*            required*/}
                            {/*        />*/}
                            {/*        <Text size="xs" color="dimmed" >*/}
                            {/*            Password must be at least 8 characters with a number and special character.*/}
                            {/*        </Text>*/}
                            {/*    </>*/}
                            {/*)}*/}

                            {step === 2 && (userType === "CONSUMER" || userType === "RETAILER") && (
                                <>
                                    <TextInput
                                        label="Address"
                                        placeholder="Enter Address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleChange}
                                        required
                                    />
                                    <TextInput
                                        label="Phone Number"
                                        placeholder="(00) 0000-0000"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        required
                                    />
                                </>
                            )}

                            {step === 3 && userType === "CONSUMER" && (
                                <>
                                    <PasswordInput
                                        label="Password"
                                        placeholder="Enter password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                    <PasswordInput
                                        label="Confirm Password"
                                        placeholder="Re-Enter password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        required
                                    />
                                    <Text size="xs" color="dimmed" >
                                        Password must be at least 8 characters with a number and special character.
                                    </Text>
                                </>
                            )}

                            {step === 3 && userType === "RETAILER" && (
                                <div style={{ minHeight: '140px' }}>
                                    <Checkbox.Group
                                        label="Services Provided"
                                        value={formData.serviceProvided}
                                        onChange={(value) =>
                                            setFormData((prev) => ({ ...prev, serviceProvided: value }))
                                        }
                                        required
                                    >
                                        <Stack spacing = "sm" mt = "xs">
                                            <Checkbox value="Sell" label="Sell" />
                                            <Checkbox value="Repair" label="Repair" />
                                        </Stack>
                                    </Checkbox.Group>
                                </div>
                            )}

                            {step === 4 && userType === "RETAILER" && (
                                <>
                                    <PasswordInput
                                        label="Password"
                                        placeholder="Enter password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                    <PasswordInput
                                        label="Confirm Password"
                                        placeholder="Re-Enter password"
                                        name="confirmPassword"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        required
                                    />
                                    <Text size="xs" color="dimmed" >
                                        Password must be at least 8 characters with a number and special character.
                                    </Text>
                                </>
                            )}
                        </div>


                        <Group position="apart" grow mt="xl">
                            {step > 0 && (
                                <Button onClick={prevStep} className="back-btn-card">
                                    Back
                                </Button>
                            )}
                            {step < totalSteps() ? (
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
