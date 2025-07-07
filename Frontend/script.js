
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    const savedUser = JSON.parse(localStorage.getItem("taskUser"));

    if (savedUser && username === savedUser.username && password === savedUser.password) {
      alert("Login successful!");
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid login. Try again.");
    }
  });

  document.getElementById("toSignup").onclick = () => {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
    document.getElementById("formTitle").textContent = "Create Account";
  };

  document.getElementById("toLogin").onclick = () => {
    signupForm.style.display = "none";
    loginForm.style.display = "block";
    document.getElementById("formTitle").textContent = "Login to Task Tracker";
  };
}

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

    localStorage.setItem("taskUser", JSON.stringify({
      username: newUsername,
      password: newPassword
    }));

    alert("Account created! Now login.");
    signupForm.style.display = "none";
    loginForm.style.display = "block";
    document.getElementById("formTitle").textContent = "Login to Task Tracker";
  });
}

const addBtn = document.getElementById("addTaskBtn");
const modal = document.getElementById("taskModal");
const close = document.getElementById("closeModal");
const save = document.getElementById("saveTask");
const list = document.getElementById("taskList");

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  list.innerHTML = "";

  tasks.forEach((task) => {
    const card = document.createElement("div");
    card.className = "task-card";
    card.innerHTML = `
      <h3>${task.title}</h3>
      <p>Deadline: ${task.deadline}</p>
      <p>Status: ${task.status}</p>
    `;
    list.appendChild(card);
  });
}

if (addBtn) {
  loadTasks(); // 
  addBtn.onclick = () => (modal.style.display = "flex");
  close.onclick = () => (modal.style.display = "none");

  save.onclick = () => {
    const title = document.getElementById("taskTitle").value;
    const deadline = document.getElementById("taskDeadline").value;
    const status = document.getElementById("taskStatus").value;

    if (!title || !deadline) {
      alert("Please enter all fields");
      return;
    }

    const newTask = { title, deadline, status };
    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    existingTasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(existingTasks));

    loadTasks(); 
    modal.style.display = "none";

    document.getElementById("taskTitle").value = "";
    document.getElementById("taskDeadline").value = "";
    document.getElementById("taskStatus").value = "Not Started";
  };
}