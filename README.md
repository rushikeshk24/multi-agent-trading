# Multi-Agent Trading Assistant

A sophisticated stock analysis platform that leverages multiple AI agents to provide comprehensive trading insights using free large language models.

## 🚀 Features

- **Multi-Agent Analysis**: Utilizes specialized AI agents for market data, financial metrics, news analysis, sentiment evaluation, and report generation
- **Real-Time Data**: Fetches live market data from Yahoo Finance API
- **Sentiment Analysis**: Analyzes news sentiment to gauge market mood
- **Interactive Dashboard**: Modern React frontend with charts, confidence meters, and detailed reports
- **Risk Assessment**: Automated risk evaluation based on multiple factors
- **Confidence Scoring**: AI-powered confidence ratings for trading decisions

## 🏗️ Architecture

The system consists of:

### Backend (Node.js/Express)
- **Orchestrator**: Coordinates multiple AI agents for parallel processing
- **Market Agent**: Retrieves real-time stock prices, volume, and technical indicators
- **Financial Agent**: Analyzes company financial metrics (P/E ratio, market cap, etc.)
- **News Agent**: Gathers and processes relevant news articles
- **Sentiment Agent**: Performs sentiment analysis on news content
- **Report Agent**: Generates comprehensive trading reports using LangChain and Groq LLM

### Frontend (React/Vite)
- **Stock Analysis Form**: Input interface for stock symbols
- **Interactive Charts**: Price history visualization using Recharts
- **Tabbed Interface**: Organized display of analysis results
- **Confidence Meter**: Visual representation of AI confidence levels
- **Report Cards**: Detailed analysis summaries

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Groq API key (free at [groq.com](https://groq.com))

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rushikeshk24/multi-agent-trading.git
   cd multi-agent-trading
   ```

2. **Install backend dependencies**
   ```bash
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   cd ..
   ```

4. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   GROQ_API_KEY=your_groq_api_key_here
   ```

## 🚀 Usage

1. **Start the backend server**
   ```bash
   npm start
   ```
   Server will run on http://localhost:5000

2. **Start the frontend (in a new terminal)**
   ```bash
   cd frontend
   npm run dev
   ```
   Frontend will run on http://localhost:5173

3. **Access the application**
   Open your browser and navigate to http://localhost:5173

4. **Analyze a stock**
   - Enter a stock symbol (e.g., AAPL, TSLA, GOOGL)
   - Click "Analyze" to get comprehensive analysis
   - View results in the interactive dashboard

## 📡 API Endpoints

### GET /analyze/:symbol
Analyzes a stock symbol and returns comprehensive data.

**Parameters:**
- `symbol` (string): Stock ticker symbol (e.g., AAPL)

**Response:**
```json
{
  "marketData": {
    "symbol": "AAPL",
    "currentPrice": 150.25,
    "high": 152.00,
    "low": 148.50,
    "volume": 45000000,
    "ma50": 145.30,
    "ma200": 140.75,
    "prices": [...]
  },
  "financials": {
    "pe": 28.5,
    "marketCap": 2500000000000,
    ...
  },
  "news": [...],
  "sentiment": "Positive",
  "report": "Comprehensive analysis report...",
  "confidence": 80,
  "risk": "Low"
}
```

## 📁 Project Structure

```
multi-agent-trading/
├── server.js                 # Main Express server
├── orchestrator.js           # Agent coordination logic
├── package.json              # Backend dependencies
├── .env                      # Environment variables (create this)
├── agents/                   # AI agent implementations
│   ├── marketAgent.js
│   ├── financialAgent.js
│   ├── newsAgent.js
│   ├── sentimentAgent.js
│   └── reportAgent.js
├── config/
│   └── env.js               # Environment configuration
├── services/
│   └── yahooService.js      # Yahoo Finance API integration
└── frontend/                # React frontend
    ├── package.json
    ├── vite.config.js
    ├── index.html
    ├── src/
    │   ├── App.jsx
    │   ├── api.js
    │   ├── components/
    │   │   ├── StockForm.jsx
    │   │   ├── ReportCard.jsx
    │   │   ├── PriceChart.jsx
    │   │   ├── ConfidenceMeter.jsx
    │   │   └── Tabs.jsx
    │   └── assets/
    └── public/
```

## 🛠️ Technologies Used

### Backend
- **Node.js**: Runtime environment
- **Express.js**: Web framework
- **LangChain**: LLM orchestration framework
- **Groq**: Fast LLM inference (free tier available)
- **Yahoo Finance API**: Financial data provider
- **Axios**: HTTP client

### Frontend
- **React**: UI framework
- **Vite**: Build tool and dev server
- **Recharts**: Charting library
- **Framer Motion**: Animation library
- **React Icons**: Icon components
- **Axios**: HTTP client

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

This application is for educational and informational purposes only. It should not be considered as financial advice. Always do your own research and consult with financial professionals before making investment decisions.

## 🙏 Acknowledgments

- Groq for providing fast LLM inference
- Yahoo Finance for market data
- LangChain for AI agent orchestration
- The open-source community for amazing tools and libraries</content>
<parameter name="filePath">c:\Users\rushi\Desktop\multi-agent-trading\README.md