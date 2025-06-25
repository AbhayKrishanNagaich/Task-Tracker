/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f4f7fa;
}

/* Navbar */
.navbar {
  background-color: #2c3e50;
  padding: 15px 30px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navbar .logo {
  font-size: 24px;
  font-weight: bold;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav-links li a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links li a:hover {
  color: #f39c12;
}

/* Main Container */
.container {
  max-width: 600px;
  margin: 40px auto;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
}

header {
  text-align: center;
  margin-bottom: 30px;
}

header h1 {
  color: #34495e;
  margin-bottom: 10px;
}

header p {
  color: #7f8c8d;
  font-size: 14px;
}

/* Task Form */
.task-form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.task-form input {
  flex: 1;
  padding: 10px;
  border: 1px solid #bdc3c7;
  border-radius: 5px;
}

.task-form button {
  background-color: #27ae60;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.task-form button:hover {
  background-color: #1e8449;
}

/* Task List */
.task-list li {
  background-color: #ecf0f1;
  padding: 12px;
  border-radius: 5px;
  margin-bottom: 10px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.delete-btn {
  background-color: #e74c3c;
  border: none;
  padding: 6px 10px;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.delete-btn:hover {
  background-color: #c0392b;
}
