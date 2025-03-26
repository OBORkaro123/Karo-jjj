document.getElementById("login-form").addEventListener("submit", async (e) => {
 //  e.preventDefault();
     alert("Signup successful");
  const phone = document.getElementById("phone").value;
  const password = document.getElementById("password").value;
  try {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone, password }),
    });
    const data = await response.json();
    if (data.token) {
      localStorage.setItem("token", data.token);
      alert("Login successful!");
    } else {
      alert("Login failed!");
    }
  } catch (error) {
    console.error("Error logging in:", error);
  }
});
