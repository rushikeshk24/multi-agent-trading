import { ChatGroq } from "@langchain/groq";
import dotenv from "dotenv";

dotenv.config(); // Make sure this is at the **very top**

const apiKey = process.env.GROQ_API_KEY;

if (!apiKey) {
  throw new Error("Groq API key not found. Please set GROQ_API_KEY in your .env");
}

const llm = new ChatGroq({
  model: "llama-3.1-8b-instant",
  apiKey: apiKey, // explicitly pass it
  temperature: 0,
});

export async function reportAgent({ financials, marketData, news, sentiment }) {
  try {
    const newsSummary = news.map(n => `- ${n.title}`).join("\n");

    const prompt = `
Generate a professional investment report for the stock:
Financials: ${JSON.stringify(financials, null, 2)}
Market Data: ${JSON.stringify(marketData, null, 2)}
News: ${newsSummary}
Overall Sentiment: ${sentiment}

Include:
1. Executive summary
2. Technical analysis
3. Financial insights
4. Buy/Hold/Sell recommendation
5. Risk assessment
`;

    const result = await llm.invoke(prompt);
    return result.content;
  } catch (err) {
    console.error("ReportAgent Error:", err.message);
    return "Unable to generate report at this time.";
  }
}
