// ==== LOGIN / SIGNUP ====
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    const storedUser = localStorage.getItem("user");
    const storedPass = localStorage.getItem("pass");

    if (user === storedUser && pass === storedPass) {
      window.location.href = "dashboard.html";
    } else {
      alert("Invalid login");
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
    const user = document.getElementById("newUsername").value;
    const pass = document.getElementById("newPassword").value;
    const confirm = document.getElementById("confirmPassword").value;

    if (pass !== confirm) {
      alert("Passwords do not match!");
      return;
    }

    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);
    alert("Account created! Please login.");

    signupForm.style.display = "none";
    loginForm.style.display = "block";
    document.getElementById("formTitle").textContent = "Login to Task Tracker";
  });
}

// ==== DASHBOARD LOGIC ====
const TASKS_KEY = "tasks";
let tasks = JSON.parse(localStorage.getItem(TASKS_KEY)) || [];

function saveTasks() {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}

function renderTasks() {
  const list = document.getElementById("taskList");
  if (!list) return;

  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const card = document.createElement("div");
    card.className = "task-card";
    card.innerHTML = `
      <h3>${task.title}</h3>
      <p>Deadline: ${task.deadline}</p>
      <p>Status: ${task.status}</p>
      <button class="edit-btn" data-index="${index}">Edit</button>
      <button class="delete-btn" data-index="${index}">Delete</button>
    `;
    list.appendChild(card);
  });

  document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.onclick = (e) => {
      const i = e.target.getAttribute("data-index");
      if (confirm("Are you sure you want to delete this task?")) {
        tasks.splice(i, 1);
        saveTasks();
        renderTasks();
      }
    };
  });

  document.querySelectorAll(".edit-btn").forEach(btn => {
    btn.onclick = (e) => {
      const i = e.target.getAttribute("data-index");
      const task = tasks[i];

      document.getElementById("taskTitle").value = task.title;
      document.getElementById("taskDeadline").value = task.deadline;
      document.getElementById("taskStatus").value = task.status;
      modal.dataset.editing = i;
      modal.style.display = "flex";
    };
  });
}

const addBtn = document.getElementById("addTaskBtn");
const modal = document.getElementById("taskModal");
const close = document.getElementById("closeModal");
const save = document.getElementById("saveTask");

if (addBtn) {
  addBtn.onclick = () => {
    modal.style.display = "flex";
    modal.removeAttribute("data-editing");
    document.getElementById("taskTitle").value = "";
    document.getElementById("taskDeadline").value = "";
    document.getElementById("taskStatus").value = "Not Started";
  };

  close.onclick = () => (modal.style.display = "none");

  save.onclick = () => {
    const title = document.getElementById("taskTitle").value;
    const deadline = document.getElementById("taskDeadline").value;
    const status = document.getElementById("taskStatus").value;

    if (!title || !deadline) {
      alert("Please fill all fields");
      return;
    }

    const editingIndex = modal.dataset.editing;
    if (editingIndex !== undefined) {
      tasks[editingIndex] = { title, deadline, status };
    } else {
      tasks.push({ title, deadline, status });
    }

    saveTasks();
    renderTasks();
    modal.style.display = "none";
  };

  renderTasks();
}
