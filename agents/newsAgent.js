import YahooFinance from "yahoo-finance2";

const yahooFinance = new YahooFinance({ suppressNotices: ["yahooSurvey"] });

export async function newsAgent(symbol) {
  try {
    const searchResults = await yahooFinance.search(symbol);
    const news = searchResults.news || [];

    const companyName = searchResults.quotes[0]?.shortname?.toLowerCase() || "";

    return news
      .filter(item => {
        const title = item.title.toLowerCase();
        return title.includes(symbol.toLowerCase()) || title.includes(companyName);
      })
      .slice(0, 5)
      .map(item => ({
        title: item.title,
        source: item.publisher,
        link: item.link,
      }));
  } catch (err) {
    console.error("NewsAgent Error:", err.message);
    return [];
  }
}
