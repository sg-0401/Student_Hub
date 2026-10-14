const screens = {
  login: document.getElementById("login"),
  home: document.getElementById("home"),
  profile: document.getElementById("profile")
};

function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove("active"));
  screens[name].classList.add("active");
}

document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("loginMessage");

  if (!email || !password) {
    message.textContent = "Please enter both email and password.";
    return;
  }

  message.textContent = "";
  showScreen("home");
});

document.getElementById("profileBtn").addEventListener("click", () => showScreen("profile"));
document.getElementById("backBtn").addEventListener("click", () => showScreen("home"));

document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.getElementById("themeBtn").textContent =
    document.body.classList.contains("dark") ? "☀️ Light" : "🌙 Dark";
});
