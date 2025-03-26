document.addEventListener("DOMContentLoaded", () => {
  fetchForexTrends();
});
async function fetchForexTrends() {
  try {
    const response = await fetch(
      "https://api.exchangerate-api.com/v4/latest/USD"
    );
    const data = await response.json();
    const labels = Object.keys(data.rates).slice(0, 10);
    const values = Object.values(data.rates).slice(0, 10);
    const ctx = document.getElementById("trendChart").getContext("2d");
    new Chart(ctx, {
      type: "line",
      data: {
        labels,
        datasets: [
          {
            label: "Exchange Rates",
            data: values,
            borderColor: "blue",
            fill: false,
          },
        ],
      },
    });
  } catch (error) {
    console.error("Error fetching forex trends:", error);
  }
}
