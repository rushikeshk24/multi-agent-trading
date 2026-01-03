// agents/marketAgent.js
import { getMarketData } from "../services/yahooService.js";

export async function marketAgent(symbol) {
  if (!symbol) throw new Error("Symbol required");

  const data = await getMarketData(symbol);

  return {
    symbol: data.quote.symbol || symbol,
    currentPrice: data.quote.regularMarketPrice || 0,
    high: data.quote.regularMarketDayHigh || 0,
    low: data.quote.regularMarketDayLow || 0,
    volume: data.quote.regularMarketVolume || 0,
    ma50: data.quote.fiftyDayAverage || 0,
    ma200: data.quote.twoHundredDayAverage || 0,
    prices: data.prices,
  };
}
