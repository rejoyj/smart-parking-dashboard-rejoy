import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ParkingCard from "../components/ParkingCard";
import { getParkingData } from "../services/api";

export default function Dashboard() {
  const [slots, setSlots] = useState([]);

  useEffect(() => {
    loadData();

    const interval = setInterval(() => {
      loadData();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const loadData = async () => {
    const data = await getParkingData();

    // fallback dummy data if backend empty
    if (!data || data.length === 0) {
      setSlots([
        { id: 1, status: "available" },
        { id: 2, status: "occupied" },
        { id: 3, status: "available" },
        { id: 4, status: "occupied" },
      ]);
    } else {
      setSlots(data);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        background:
          "linear-gradient(135deg,#020617,#0f172a,#020617)",
        color: "white",
      }}
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        style={{
          fontSize: "32px",
          marginBottom: "30px",
          fontWeight: "bold",
        }}
      >
        🚗 Smart Parking Dashboard
      </motion.h1>

      <motion.div
        layout
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
        }}
      >
        {slots.map((slot) => (
          <ParkingCard key={slot.id} slot={slot} />
        ))}
      </motion.div>
    </div>
  );
}
