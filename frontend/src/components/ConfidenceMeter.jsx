export default function ConfidenceMeter({ confidence, risk }) {
  return (
    <div className="card">
      <h3 style={{ color: "#38bdf8", marginBottom: "15px" }}>
        AI Confidence & Risk
      </h3>

      <p>Confidence Score: <b>{confidence}%</b></p>

      <div
        style={{
          background: "#020617",
          borderRadius: "10px",
          overflow: "hidden",
          marginTop: "10px",
        }}
      >
        <div
          style={{
            width: `${confidence}%`,
            height: "12px",
            background:
              confidence > 70
                ? "#22c55e"
                : confidence > 40
                ? "#facc15"
                : "#ef4444",
          }}
        />
      </div>

      <p style={{ marginTop: "12px" }}>
        Risk Level:{" "}
        <b
          style={{
            color:
              risk === "Low"
                ? "#22c55e"
                : risk === "Medium"
                ? "#facc15"
                : "#ef4444",
          }}
        >
          {risk}
        </b>
      </p>
    </div>
  );
}
