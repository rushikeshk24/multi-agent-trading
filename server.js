// server.js
import "./config/env.js";
import express from "express";
import cors from "cors";
import { runTradingAssistant } from "./orchestrator.js";

const app = express();

/* ✅ ENABLE CORS */
app.use(cors({
  origin: (origin, callback) => {
    // Allow requests from localhost on any port
    if (!origin || origin.startsWith('http://localhost:')) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
}));

app.use(express.json());

app.get("/analyze/:symbol", async (req, res) => {
  try {
    const symbol = req.params.symbol.toUpperCase();
    const result = await runTradingAssistant(symbol);
    res.json(result);
  } catch (err) {
    console.error("Analyze Error:", err.message);
    res.status(500).json({ error: "Analysis failed" });
  }
});

app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});
