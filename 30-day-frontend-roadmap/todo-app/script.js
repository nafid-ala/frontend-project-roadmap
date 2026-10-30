/*
  File CSS ini untuk styling to-do app.
  Kamu bisa edit sesuai selera.
  Fokus belajar:
  - layout
  - spacing
  - button style
  - list style
  - responsive design
*/

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #eef2ff, #e0f2fe);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.app {
  width: min(90%, 500px);
  background: white;
  border-radius: 16px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
  padding: 24px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.input-group {
  display: flex;
  gap: 10px;
}

input {
  flex: 1;
  padding: 12px 14px;
  border: 1px solid #d1d5db;
  border-radius: 10px;
}

button {
  border: none;
  border-radius: 10px;
  background: #2563eb;
  color: white;
  padding: 12px 16px;
  cursor: pointer;
}

ul {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 10px 12px;
  border-radius: 8px;
  margin-bottom: 10px;
}

li button {
  background: #ef4444;
  padding: 8px 10px;
}

li.done span {
  text-decoration: line-through;
  color: #6b7280;
}
