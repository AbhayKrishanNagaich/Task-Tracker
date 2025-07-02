// LOGIN/SIGNUP LOGIC
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

// LOGIN FUNCTION
if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    // Get user from localStorage
    const savedUser = JSON.parse(localStorage.getItem("taskUser"));

    // Check credentials
    if (savedUser && username === savedUser.username && password === savedUser.password) {
      alert("Login successful!");
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid login. Try again.");
    }
  });

  // Switch to Signup Form
  document.getElementById("toSignup").onclick = () => {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
    document.getElementById("formTitle").textContent = "Create Account";
  };

  // Switch to Login Form
  document.getElementById("toLogin").onclick = () => {
    signupForm.style.display = "none";
    loginForm.style.display = "block";
    document.getElementById("formTitle").textContent = "Login to Task Tracker";
  };
}

// SIGNUP FUNCTION
if (signupForm) {
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const newUsername = document.getElementById("newUsername").value.trim();
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Save user to localStorage
    localStorage.setItem("taskUser", JSON.stringify({
      username: newUsername,
      password: newPassword
    }));

    alert("Account created! Now login.");

    // Switch back to login form
    signupForm.style.display = "none";
    loginForm.style.display = "block";
    document.getElementById("formTitle").textContent = "Login to Task Tracker";
  });
}

// DASHBOARD: MODAL + TASK CREATION
const addBtn = document.getElementById("addTaskBtn");
const modal = document.getElementById("taskModal");
const close = document.getElementById("closeModal");
const save = document.getElementById("saveTask");
const list = document.getElementById("taskList");

if (addBtn) {
  // Show Modal
  addBtn.onclick = () => (modal.style.display = "flex");

  // Close Modal
  close.onclick = () => (modal.style.display = "none");

  // Save Task
  save.onclick = () => {
    const title = document.getElementById("taskTitle").value;
    const deadline = document.getElementById("taskDeadline").value;
    const status = document.getElementById("taskStatus").value;

    if (!title || !deadline) {
      alert("Please enter all fields");
      return;
    }

    // Create task card
    const task = document.createElement("div");
    task.className = "task-card";
    task.innerHTML = `
      <h3>${title}</h3>
      <p>Deadline: ${deadline}</p>
      <p>Status: ${status}</p>
    `;

    list.appendChild(task);

    // Clear modal inputs
    document.getElementById("taskTitle").value = "";
    document.getElementById("taskDeadline").value = "";
    document.getElementById("taskStatus").value = "Not Started";

    modal.style.display = "none";

    // ✅ You can also save task to localStorage here (in Day 5)
  };
}
