import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://multi-agent-trading.onrender.com",
});

export const analyzeStock = (symbol) =>
  API.get(`/analyze/${symbol}`);
