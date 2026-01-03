// services/yahooService.js
import YahooFinance from "yahoo-finance2";

const yahooFinance = new YahooFinance({ suppressNotices: ["yahooSurvey"] });

export async function getMarketData(symbol) {
  try {
    const quote = await yahooFinance.quote(symbol);

    // 3 months ago
    const period1 = new Date();
    period1.setMonth(period1.getMonth() - 3);

    const chart = await yahooFinance.chart(symbol, {
      period1,
      interval: "1d",
    });

    return {
      quote,
      prices: chart.quotes.map(q => ({
        date: q.date,
        close: q.close,
      })),
    };
  } catch (err) {
    console.error("YahooService Error:", err.message);
    return { quote: {}, prices: [] }; // avoid backend crash
  }
}
    