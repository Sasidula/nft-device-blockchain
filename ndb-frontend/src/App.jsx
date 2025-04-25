import React from "react"
import { HeroSection } from "./components/HeroSection"
import { FeaturesSection } from "./components/FeaturesSection"
import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx"


function App() {
    return (
        <div className="flex flex-col min-h-screen w-full bg-white">
            <Header />
            <main className="flex-grow">
                <HeroSection />
                <FeaturesSection />
            </main>
            <Footer />
        </div>
    );
}

export default App;
