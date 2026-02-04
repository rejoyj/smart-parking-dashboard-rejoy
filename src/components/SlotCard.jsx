import { motion } from "framer-motion";

export default function SlotCard({ id, occupied }) {
  return (
    <motion.div
      className="card"
      animate={{
        scale: occupied ? 1.05 : 1,
        border: occupied ? "2px solid red" : "2px solid #00ff88"
      }}
      transition={{ duration: 0.3 }}
    >
      <h3>Slot {id}</h3>

      <h1 style={{ color: occupied ? "red" : "#00ff88" }}>
        {occupied ? "OCCUPIED" : "AVAILABLE"}
      </h1>
    </motion.div>
  );
}
