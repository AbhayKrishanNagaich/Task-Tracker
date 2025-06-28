const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const formTitle = document.getElementById("formTitle");

// Navigation link handlers
document.getElementById("showLogin").addEventListener("click", () => {
    loginForm.style.display = "block";
    signupForm.style.display = "none";
    formTitle.textContent = "Login to Task Tracker";
    setActive("showLogin");
});

document.getElementById("showSignup").addEventListener("click", () => {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
    formTitle.textContent = "Create Account";
    setActive("showSignup");
});

document.getElementById("toSignup").addEventListener("click", () => {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
    formTitle.textContent = "Create Account";
    setActive("showSignup");
});

document.getElementById("toLogin").addEventListener("click", () => {
    loginForm.style.display = "block";
    signupForm.style.display = "none";
    formTitle.textContent = "Login to Task Tracker";
    setActive("showLogin");
});

function setActive(id) {
    document.getElementById("showLogin").classList.remove("active");
    document.getElementById("showSignup").classList.remove("active");
    document.getElementById(id).classList.add("active");
}

// Login logic
loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (username === "admin" && password === "admin123") {
        alert("Login successful!");
    } else {
        alert("Invalid username or password");
    }
});

// Signup logic
signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const newUsername = document.getElementById("newUsername").value.trim();
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (newPassword !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    alert(`Account created for ${newUsername}!`);
});
