import { motion } from "framer-motion";

export default function ParkingCard({ slot }) {
  const isOccupied = slot.status === "occupied";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4 }}
      className="card"
      style={{
        background: "rgba(255,255,255,0.05)",
        borderRadius: "16px",
        padding: "20px",
        backdropFilter: "blur(10px)",
        border: isOccupied
          ? "2px solid #ef4444"
          : "2px solid #22c55e",
      }}
    >
      <h3>Slot {slot.id}</h3>

      <motion.div
        animate={{
          scale: isOccupied ? 1.2 : 1,
        }}
        style={{
          marginTop: "10px",
          fontWeight: "bold",
          color: isOccupied ? "#ef4444" : "#22c55e",
        }}
      >
        {isOccupied ? "Occupied" : "Available"}
      </motion.div>
    </motion.div>
  );
}
