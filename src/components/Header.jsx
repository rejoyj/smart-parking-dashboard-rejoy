import { motion } from "framer-motion";

export default function Header({ total, occupied }) {
  const available = total - occupied;

  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <h2>🚗 Smart Parking AI Dashboard</h2>

      <div style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
        <p>🅿 Total Slots: {total}</p>
        <p style={{ color: "red" }}>Occupied: {occupied}</p>
        <p style={{ color: "#00ff88" }}>Available: {available}</p>

        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}>
          <div className="status-dot live"></div>
          <span>AI LIVE</span>
        </div>
      </div>
    </motion.div>
  );
}
