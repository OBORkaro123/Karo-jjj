document.getElementById("signup-form").addEventListener("submit", async (e) => {
//  e.preventDefault();
    alert("Signup successful");
  const userData = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    sex: document.getElementById("sex").value,
    nationality: document.getElementById("nationality").value,
    idNumber: document.getElementById("id").value,
    age: document.getElementById("age").value,
    password: document.getElementById("password").value,
  };
  const response = await fetch("http://localhost:5000/api/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });
  const result = await response.json();
  if (response.ok) {
    alert("Signup successful");
    window.location.href = "account.html";
  } else {
    alert(result.error || "Signup failed");
  }
});
