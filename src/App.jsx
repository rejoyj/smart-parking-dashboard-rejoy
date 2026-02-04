import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import SlotCard from "./components/SlotCard";

const BACKEND = "https://smartparking-lyla.onrender.com";

export default function App() {
  const [slots, setSlots] = useState({ 1: false, 2: false, 3: false });

  // 🔥 fetch backend data
  const fetchData = async () => {
    try {
      const res = await axios.get(BACKEND);
      if (res.data.slots) {
        setSlots(res.data.slots);
      }
    } catch (err) {
      console.log("Backend offline");
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  const occupiedCount = Object.values(slots).filter(v => v).length;

  return (
    <div className="container">
      <Header total={3} occupied={occupiedCount} />

      <div className="grid" style={{ marginTop: "20px" }}>
        {Object.entries(slots).map(([id, status]) => (
          <SlotCard key={id} id={id} occupied={status} />
        ))}
      </div>
    </div>
  );
}
