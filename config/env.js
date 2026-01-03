import dotenv from "dotenv";

const result = dotenv.config();

if (result.error) {
  console.error("❌ Failed to load .env");
} else {
  console.log("✅ .env loaded");
}

if (!process.env.GROQ_API_KEY) {
  console.error("❌ GROQ_API_KEY is undefined");
} else {
  console.log("✅ GROQ_API_KEY detected");
}
