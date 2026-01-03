import { getMarketData } from "../services/yahooService.js";

export async function financialAgent(symbol) {
  try {
    const data = await getMarketData(symbol);
    const quote = data.quote;

    return {
      symbol: quote.symbol || symbol,
      company: quote.longName || quote.shortName || symbol,
      revenue: quote.totalRevenue ?? 0,
      eps: quote.trailingEps ?? 0,
      pe: quote.trailingPE ?? 0,
      dividend: quote.trailingAnnualDividendRate ?? 0,
      marketCap: quote.marketCap ?? 0,
    };
  } catch (err) {
    console.error("FinancialAgent Error:", err.message);
    return {};
  }
}
