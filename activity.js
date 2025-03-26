document.addEventListener("DOMContentLoaded", fetchActivities);
async function fetchActivities() {
  try {
    const response = await fetch("http://localhost:5000/api/content");
    const activities = await response.json();
    const feed = activities
      .map(
        (activity) =>
          ` <div class="activity"> <h3>${activity.title}</h3> <p>${
            activity.content
          }</p> <small>${new Date(
            activity.createdAt
          ).toLocaleString()}</small> </div> `
      )
      .join("");
    document.getElementById("activity-feed").innerHTML = feed;
  } catch (error) {
    console.error("Error fetching activity:", error);
  }
}
