const users = [{ username: "admin", password: "admin123" }];

function logCheck() {
  if (localStorage.isLoggedIn) {
    window.location.href = "content.html";
  }
}
logCheck();

document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const inputUsername = document.getElementById("username").value;
    const inputPassword = document.getElementById("password").value;

    const user = users.find(
      (u) => u.username === inputUsername && u.password === inputPassword
    );

    if (user) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("date", new Date());
      window.location.href = "content.html";
    } else {
      alert("Invalid username or password");
    }
  });
