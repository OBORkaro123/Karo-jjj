document.addEventListener("DOMContentLoaded", () => {
  fetchForexUpdates();
});
async function fetchForexUpdates() {
  try {
    const response = await fetch(
      "https://api.exchangerate-api.com/v4/latest/USD"
    );
    const data = await response.json();
    let updates = `<p>Base: ${data.base}</p>`;
    updates += "<ul>";
    for (const [currency, rate] of Object.entries(data.rates)) {
      updates += `<li style= "text-align: center; font-size: 15px; font-weight: bold; font-size:18px ;">${currency}: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;        ${rate}</li>`;
    }
    updates += "</ul>";
    document.getElementById("updates").innerHTML = updates;
  } catch (error) {
    console.error("Error fetching forex updates:", error);
  }
}
