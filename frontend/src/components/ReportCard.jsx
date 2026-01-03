import { motion } from "framer-motion";

export default function ReportCard({ report }) {
  if (!report) return null;

  const sections = report.split("\n\n");

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 style={{ color: "#38bdf8", marginBottom: "15px" }}>
        AI Investment Report
      </h2>

      {sections.map((text, i) => (
        <p
          key={i}
          style={{
            marginBottom: "12px",
            lineHeight: "1.7",
            color: "#d1d5db",
          }}
        >
          {text}
        </p>
      ))}
    </motion.div>
  );
}
