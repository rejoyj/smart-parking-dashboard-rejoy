const BASE_URL = "http://localhost:5000"; // change later

export async function getParkingData() {
  try {
    const res = await fetch(`${BASE_URL}/status`);
    return await res.json();
  } catch (err) {
    console.log(err);
    return [];
  }
}
