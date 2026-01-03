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

export async function sentimentAgent(news) {
  if (!news || news.length === 0) return "Neutral";

  const prompt = `
Analyze the sentiment of the following news headlines:
${news.map(n => `- ${n.title}`).join("\n")}
Return only: Positive, Neutral, or Negative.
`;

  const res = await llm.invoke(prompt);
  return res.content.trim();
}
