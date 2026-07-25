# 📈 Multi-Agent Trading Assistant

> AI-powered stock analysis platform that combines multiple intelligent agents to generate comprehensive trading insights using real-time market data and Large Language Models.

🌐 **Live Demo:** https://multi-agent-trading-1.onrender.com

📂 **GitHub Repository:** https://github.com/rushikeshk24/multi-agent-trading

---

## 🚀 Features

- 🤖 Multi-Agent AI Architecture
- 📊 Real-Time Stock Market Analysis
- 💹 Technical Indicators & Price History
- 📰 Latest News Aggregation
- 😊 AI-Based Sentiment Analysis
- 📑 Comprehensive Trading Report
- ⚠️ Risk Assessment
- 🎯 Confidence Score
- 📈 Interactive Dashboard
- ⚡ Fast LLM Responses using Groq

---

## 🌐 Live Demo

**Application:** https://multi-agent-trading-1.onrender.com

Try analyzing stocks like:

- AAPL
- TSLA
- NVDA
- MSFT
- GOOGL
- AMZN

---

## 🏗️ System Architecture

```
                User
                  │
                  ▼
        React Frontend (Vite)
                  │
                  ▼
          Express API Server
                  │
                  ▼
      Multi-Agent Orchestrator
                  │
 ┌────────┬────────┬─────────┬─────────┐
 ▼        ▼        ▼         ▼         ▼
Market  Finance   News   Sentiment  Report
Agent    Agent    Agent     Agent    Agent
 │         │        │          │        │
 └─────────┴────────┴──────────┴────────┘
                  │
                  ▼
             Groq LLM
                  │
                  ▼
        Final Trading Report
```

---

# 🖥️ Screenshots

> Add screenshots here after deployment.

```
screenshots/

home.png
analysis.png
report.png
```

Example:

```md
## Home Page

![Home](screenshots/home.png)

## Analysis Dashboard

![Dashboard](screenshots/dashboard.png)

## AI Report

![Report](screenshots/report.png)
```

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- Recharts
- Framer Motion
- React Icons
- Axios

### Backend

- Node.js
- Express.js
- LangChain
- Groq API
- Yahoo Finance API
- Axios

---

## 📦 Installation

```bash
git clone https://github.com/rushikeshk24/multi-agent-trading.git

cd multi-agent-trading

npm install

cd frontend

npm install
```

Create `.env`

```env
GROQ_API_KEY=YOUR_GROQ_API_KEY
```

---

## ▶️ Run Locally

Backend

```bash
npm start
```

Frontend

```bash
cd frontend
npm run dev
```

---

## 📡 API

### GET

```
/analyze/:symbol
```

Example

```
/analyze/AAPL
```

Returns

- Market Data
- Financial Metrics
- News
- Sentiment
- AI Report
- Confidence
- Risk Score

---

## 📂 Folder Structure

```
multi-agent-trading
│
├── agents
├── config
├── services
├── frontend
├── orchestrator.js
├── server.js
├── package.json
└── README.md
```

---

## 🎯 Future Improvements

- User Authentication
- Portfolio Management
- Watchlist
- Candlestick Charts
- Multiple LLM Support
- Historical Performance Analysis
- Email Reports
- Export PDF Reports

---

## 📄 License

MIT License

---

## ⚠️ Disclaimer

This project is built for educational purposes and should not be considered financial advice. Always conduct your own research before making investment decisions.

---

## 👨‍💻 Author

**Rushikesh Karlekar**

- GitHub: https://github.com/rushikeshk24
- LinkedIn: https://linkedin.com/in/rushikeshkarlekar

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)
![LangChain](https://img.shields.io/badge/LangChain-AI-success)
![Groq](https://img.shields.io/badge/Groq-LLM-orange)
![License](https://img.shields.io/badge/License-MIT-blue)
![Status](https://img.shields.io/badge/Status-Live-success)
