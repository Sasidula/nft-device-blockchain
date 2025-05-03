import React from "react";
import { Container, Title, Text, Group, Anchor } from "@mantine/core";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import "./Footer.css";
import homeIcon from "../assects/home-icon-b.png";
import registerDeviceIcon from "../assects/register-device-icon.png";
import marketPlaceIcon from "../assects/market-place-icon-b.png";
import aboutIcon from "../assects/about-icon.png";
import contactIcon from "../assects/contact-icon.png";
import apiDocIcon from "../assects/api-doc-icon.png";
import githubIcon from "../assects/github-icon.png";
import whitePaperIcon from '../assects/whitepaper-icon.png';


export function Footer() {
    return (
        <footer className="footer">
            <Container size="xl">
                <div className="footer-grid">
                    {/* Quick Links */}
                    <div>
                        <Title order={4} className="footer-title">Quick Links</Title>
                        <div className="footer-links">
                            <Anchor href="#" className="footer-link">
                                <img src={homeIcon}  className="footer-icon" />
                                Home
                            </Anchor>
                            <Anchor href="#" className="footer-link">
                                <img src={registerDeviceIcon}  className="footer-icon" />
                                Register Device
                            </Anchor>
                            <Anchor href="#" className="footer-link">
                                <img src={marketPlaceIcon}  className="footer-icon" />
                                Marketplace
                            </Anchor>
                            <Anchor href="#" className="footer-link">
                                <img src={aboutIcon}  className="footer-icon" />
                                About
                            </Anchor>
                            <Anchor href="#" className="footer-link">
                                <img src={contactIcon}  className="footer-icon" />
                                Contact
                            </Anchor>
                        </div>
                    </div>

                    {/* Developer */}
                    <div>
                        <Title order={4} className="footer-title">Developer</Title>
                        <div className="footer-links">
                            <Anchor href="#" className="footer-link">
                                <img src={apiDocIcon}  className="footer-icon" />
                                API Docs
                            </Anchor>
                            <Anchor href="#" className="footer-link">
                                <img src={githubIcon}  className="footer-icon" />
                                GitHub Repository
                            </Anchor>
                            <Anchor href="#" className="footer-link">
                                <img src={whitePaperIcon}  className="footer-icon" />
                                Whitepaper
                            </Anchor>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <Title order={4} className="footer-title">Contact Info</Title>
                        <div className="footer-contacts">
                            <div className="footer-socials">
                                <Anchor href="#" className="social-icon"><Mail size={24} /></Anchor>
                                <Anchor href="#" className="social-icon"><Github size={24} /></Anchor>
                                <Anchor href="#" className="social-icon"><Linkedin size={24} /></Anchor>
                                <Anchor href="#" className="social-icon"><Twitter size={24} /></Anchor>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <Text size="sm" className="footer-copy">
                        © {new Date().getFullYear()} Device Verification Platform. All rights reserved.
                    </Text>
                </div>
            </Container>
        </footer>
    );
}
