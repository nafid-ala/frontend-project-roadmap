<!--
  Hari ke-14: To-do App Bertahap 3
  Tugas:
  1. filter tugas: semua / aktif / selesai
  2. validasi input
  3. code sudah siap untuk diubah ke React nanti
-->

<!DOCTYPE html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Day 14 - To-do App Filter</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        background: #f0fdf4;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
      }
      .card {
        width: 500px;
        background: white;
        padding: 24px;
        border-radius: 12px;
      }
      .row {
        display: flex;
        gap: 10px;
      }
      input {
        flex: 1;
        padding: 10px;
      }
      button {
        padding: 10px 14px;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        background: #16a34a;
        color: white;
      }
      .filter {
        display: flex;
        gap: 10px;
        margin: 16px 0;
      }
      .filter button {
        background: #e5e7eb;
        color: #111827;
      }
      .done span {
        text-decoration: line-through;
        color: #64748b;
      }
    </style>
  </head>
  <body>
    <div class="card">
      <h2>To-do App Filter</h2>
      <div class="row">
        <input id="taskInput" type="text" placeholder="Masukkan tugas" />
        <button id="addBtn">Tambah</button>
      </div>
      <div class="filter">
        <button data-filter="all">Semua</button>
        <button data-filter="active">Aktif</button>
        <button data-filter="completed">Selesai</button>
      </div>
      <ul id="taskList"></ul>
    </div>

    <script>
      const taskInput = document.getElementById("taskInput");
      const addBtn = document.getElementById("addBtn");
      const taskList = document.getElementById("taskList");
      const filterButtons = document.querySelectorAll(".filter button");

      let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      let currentFilter = "all";

      function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
      }

      function getFilteredTasks() {
        if (currentFilter === "active") {
          return tasks.filter((task) => !task.done);
        }

        if (currentFilter === "completed") {
          return tasks.filter((task) => task.done);
        }

        return tasks;
      }

      function renderTasks() {
        const filteredTasks = getFilteredTasks();
        taskList.innerHTML = "";

        filteredTasks.forEach((task, index) => {
          const li = document.createElement("li");
          li.className = task.done ? "done" : "";

          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.checked = task.done;
          checkbox.addEventListener("change", () => {
            const realIndex = tasks.indexOf(task);
            tasks[realIndex].done = !tasks[realIndex].done;
            saveTasks();
            renderTasks();
          });

          const text = document.createElement("span");
          text.textContent = task.name;

          const delBtn = document.createElement("button");
          delBtn.textContent = "Hapus";
          delBtn.addEventListener("click", () => {
            const realIndex = tasks.indexOf(task);
            tasks.splice(realIndex, 1);
            saveTasks();
            renderTasks();
          });

          li.appendChild(checkbox);
          li.appendChild(text);
          li.appendChild(delBtn);
          taskList.appendChild(li);
        });
      }

      addBtn.addEventListener("click", () => {
        const value = taskInput.value.trim();
        if (!value) {
          alert("Tugas tidak boleh kosong");
          return;
        }

        tasks.push({ name: value, done: false });
        saveTasks();
        renderTasks();
        taskInput.value = "";
      });

      filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
          currentFilter = button.dataset.filter;
          renderTasks();
        });
      });

      renderTasks();
    </script>
  </body>
</html>
