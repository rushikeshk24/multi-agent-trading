import { useState } from "react";
import StockForm from "./components/StockForm";
import ReportCard from "./components/ReportCard";
import PriceChart from "./components/PriceChart";
import Tabs from "./components/Tabs";
import ConfidenceMeter from "./components/ConfidenceMeter";
import { analyzeStock } from "./api";

export default function App() {
  const [symbol, setSymbol] = useState("");       // current stock symbol
  const [report, setReport] = useState("");       // AI report
  const [financials, setFinancials] = useState({}); // financial metrics
  const [news, setNews] = useState([]);           // news headlines
  const [chartData, setChartData] = useState([]); // price chart
  const [confidence, setConfidence] = useState(0);
  const [risk, setRisk] = useState("Medium");
  const [activeTab, setActiveTab] = useState("Summary");
  const [loading, setLoading] = useState(false);

  const analyze = async (symbol) => {
    setSymbol(symbol.toUpperCase());
    setLoading(true);

    // reset previous data
    setReport("");
    setFinancials({});
    setNews([]);
    setChartData([]);
    setConfidence(0);
    setRisk("Medium");

    try {
      const res = await analyzeStock(symbol);
      const data = res.data;

      setReport(data.report || "No report available");
      setFinancials(data.financials || {});
      setNews(data.news || []);
      setChartData(data.marketData?.prices || []);
      setConfidence(data.confidence || 0);
      setRisk(data.risk || "Medium");
    } catch (err) {
      console.error("Analyze Error:", err);
      setReport("Error fetching report");
      setNews([]);
      setFinancials({});
      setChartData([]);
      setConfidence(0);
      setRisk("Medium");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 font-sans">
      <h1 className="text-3xl font-bold mb-4">📈 Multi-Agent Trading Assistant</h1>

      {/* Stock input form */}
      <StockForm onAnalyze={analyze} />

      {/* Loading indicator */}
      {loading && (
        <div className="loading py-4 text-blue-600 font-medium">
          AI analyzing market for {symbol}...
        </div>
      )}

      {/* Tabs */}
      <Tabs active={activeTab} setActive={setActiveTab} />

      {/* Summary Tab */}
      {activeTab === "Summary" && (
        <>
          <ConfidenceMeter confidence={confidence} risk={risk} />
          <ReportCard report={report} />
        </>
      )}

      {/* Financials / Charts Tab */}
      {activeTab === "Financials" && (
        <div className="my-4">
          {Object.keys(financials).length === 0 ? (
            <p>No financial data available</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="card p-4 shadow rounded">
                <h3 className="font-semibold">Company</h3>
                <p>{financials.company}</p>
              </div>
              <div className="card p-4 shadow rounded">
                <h3 className="font-semibold">Revenue</h3>
                <p>${financials.revenue.toLocaleString()}</p>
              </div>
              <div className="card p-4 shadow rounded">
                <h3 className="font-semibold">EPS</h3>
                <p>{financials.eps}</p>
              </div>
              <div className="card p-4 shadow rounded">
                <h3 className="font-semibold">PE Ratio</h3>
                <p>{financials.pe}</p>
              </div>
              <div className="card p-4 shadow rounded">
                <h3 className="font-semibold">Dividend</h3>
                <p>{financials.dividend}</p>
              </div>
              <div className="card p-4 shadow rounded">
                <h3 className="font-semibold">Market Cap</h3>
                <p>${financials.marketCap?.toLocaleString()}</p>
              </div>
            </div>
          )}

          {/* Price Chart */}
          {chartData.length > 0 && (
            <div className="my-4">
              <PriceChart data={chartData} />
            </div>
          )}
        </div>
      )}

      {/* News Tab */}
      {activeTab === "News" && (
        <div className="my-4 grid gap-2">
          {news.length === 0 ? (
            <p>No news available for {symbol}</p>
          ) : (
            news.map((item, idx) => (
              <p key={idx} className="card p-2 shadow rounded hover:bg-gray-50">
                📰{" "}
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {item.title}
                </a>{" "}
                ({item.source})
              </p>
            ))
          )}
        </div>
      )}
    </div>
  );
}
