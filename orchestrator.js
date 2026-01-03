// orchestrator.js
import { marketAgent } from "./agents/marketAgent.js";
import { financialAgent } from "./agents/financialAgent.js";
import { newsAgent } from "./agents/newsAgent.js";
import { sentimentAgent } from "./agents/sentimentAgent.js";
import { reportAgent } from "./agents/reportAgent.js";

export async function runTradingAssistant(symbol) {
  try {
    // Run all agents in parallel for efficiency
    const [marketData, financials, news] = await Promise.all([
      marketAgent(symbol),
      financialAgent(symbol),
      newsAgent(symbol)
    ]);

    // Sentiment analysis depends on news
    const sentiment = await sentimentAgent(news);

    // Generate report with all data
    const report = await reportAgent({ financials, marketData, news, sentiment });

    // Calculate confidence based on sentiment
    let confidence = 50; // default neutral
    if (sentiment === "Positive") confidence = 80;
    else if (sentiment === "Negative") confidence = 20;

    // Calculate risk based on sentiment and financials
    let risk = "Medium";
    if (sentiment === "Negative" || (financials.pe && financials.pe > 25)) risk = "High";
    else if (sentiment === "Positive" && financials.pe && financials.pe < 15) risk = "Low";

    return {
      marketData,
      financials,
      news,
      sentiment,
      report,
      confidence,
      risk,
    };
  } catch (err) {
    console.error("Orchestrator Error:", err.message);
    throw err; // frontend will see 500
  }
}
