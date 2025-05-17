# 🛡️ NFT-Based Electronic Device Registration & Marketplace Platform

This project is a **blockchain-integrated full-stack platform** that allows users to **register electronic devices as NFTs**, **verify authenticity**, track **ownership history**, and **buy/sell devices** securely. It combines **AI-driven price estimation** with **smart contracts**, ensuring a transparent and decentralized marketplace for electronic goods.

---

## 💡 Key Features

- 🔗 **Device NFT Registration**  
  Converts device metadata into NFTs using the Polygon blockchain for immutable ownership records.

- 🧾 **Authenticity & Ownership History**  
  Each device includes an embedded history of past owners and transfers, viewable to buyers.

- 🛒 **Decentralized Marketplace**  
  Users can list devices, browse listings, and purchase directly via a secure marketplace.

- 🤖 **AI Price Estimation**  
  Predicts current and future prices based on brand, age, original value, and usage duration using ML models (XGBoost/Random Forest).

- 🧍‍♂️ **User Roles**  
  Supports Admin, Registered Users, and Guests with different access levels.

---

## ⚙️ System Architecture

- **Frontend**: React.js with Material UI
- **Backend**: Spring Boot (Java) + MySQL
- **Blockchain**: Polygon Network (Smart Contracts via Web3)
- **AI Module**: Python Flask API (for price prediction)
- **APIs**: Device registration, marketplace listing, ownership transfer, authentication, and history tracking

---

## 🖼️ Screenshots

- ✅ Register Device Page
- 📊 Market Page with Filters
- 🔐 Ownership Transfer Confirmation Popup
- 📉 AI Price Predictor Panel
- 📁 Device History Viewer

*(Screenshots to be added here)*

---

## 🧠 AI Model Details

- **Model**: XGBoost Regressor
- **Input Features**:
    - Original Price
    - Brand
    - Device Age (years/months)
    - Usage Status
- **Output**: Current & Future Price Prediction

---

## 📦 Smart Contract Features

- Verifies device authenticity
- Stores NFT token ID and metadata
- Ensures secure transfer between owners
- Written in Solidity and deployed on Polygon Testnet

---

## 🧪 Tech Stack

| Layer        | Technology               |
|--------------|---------------------------|
| Frontend     | React.js, Material UI     |
| Backend      | Spring Boot (Java), MySQL |
| AI Service   | Python Flask + XGBoost    |
| Blockchain   | Solidity + Polygon (Mumbai) |
| Dev Tools    | Postman, Ganache, Metamask, Truffle |

---

## 🚀 Future Improvements

- Live blockchain explorer integration
- Device verification via QR scan
- NFT resale royalties
- Profile verification (KYC)
- Mobile app version

---

## 👨‍💻 Contributors

- [Sasidula_Jayara](https://github.com/Sasidula) – Blockchain & Ai
- [Indusara Prthapasinghe](https://github.com/Hiruna20) – Frontend (React + UI/UX)
- [Jithmi Perera](https://github.com/JithmiPerera) – Backend APIs

---

## 📁 Setup Instructions

1. Clone this repo
2. Run the Spring Boot server (`/backend`)
3. Start the React frontend (`/frontend`)
4. Run the Python Flask AI server (`/ai-model`)
5. Connect to MetaMask & interact with smart contracts via Web3

---
