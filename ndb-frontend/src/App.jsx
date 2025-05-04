import React from "react"
import { HeroSection } from "./components/HeroSection"
import { FeaturesSection } from "./components/FeaturesSection"
import { Footer } from "./components/Footer.jsx"
import { Header } from "./components/Header.jsx"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import {DevicesPage} from "./pages/DevicesPage.jsx";
import {MarketPage} from "./pages/MarketPage.jsx";
function HomePage() {
    return (
        <>
            <Header />
            <main className="flex-grow">
                <HeroSection />
                <FeaturesSection />
            </main>
            <Footer />
        </>
    )
}
export function App() {
    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen w-full bg-white">
                <Routes>
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    <Route path="/devices" element={<DevicesPage />} />
                    <Route path="/market" element={<MarketPage />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;
