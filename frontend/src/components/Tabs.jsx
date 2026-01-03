export default function Tabs({ active, setActive }) {
  const tabs = ["Summary", "Financials", "News"];

  return (
    <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          style={{
            background: active === tab ? "#2563eb" : "#020617",
            border: "1px solid #1e293b",
            color: "white",
            padding: "10px 18px",
            borderRadius: "10px",
          }}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
