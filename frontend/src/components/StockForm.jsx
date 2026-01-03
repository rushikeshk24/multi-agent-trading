import { useState } from "react";
import { motion } from "framer-motion";

export default function StockForm({ onAnalyze }) {
  const [symbol, setSymbol] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (symbol.trim()) onAnalyze(symbol.toUpperCase());
  };

  return (
    <motion.form
      onSubmit={submit}
      className="form"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <input
        placeholder="Enter Stock Symbol (AAPL)"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
      />
      <button>Analyze</button>
    </motion.form>
  );
}
