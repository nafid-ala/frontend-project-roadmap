//
// File ini adalah starter JavaScript untuk to-do app.
// Tugas utama:
// 1. Ambil nilai input
// 2. Simpan task ke array
// 3. Tampilkan task ke list HTML
// 4. Simpan data ke localStorage
// 5. Hapus task saat tombol hapus ditekan
//
// Petunjuk:
// - Buka file index.html di browser
// - Ketik task, lalu klik tombol Tambah
// - Cek apakah task muncul di list
// - Cek item di localStorage di browser devtools
//

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

// Simpan data tasks ke localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = task.done ? "done" : "";

    const span = document.createElement("span");
    span.textContent = task.name;

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.done;
    checkbox.addEventListener("change", () => {
      tasks[index].done = !tasks[index].done;
      saveTasks();
      renderTasks();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Hapus";
    deleteBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

addBtn.addEventListener("click", () => {
  const taskName = taskInput.value.trim();

  if (!taskName) {
    alert("Tugas tidak boleh kosong!");
    return;
  }

  tasks.push({
    name: taskName,
    done: false,
  });

  saveTasks();
  renderTasks();
  taskInput.value = "";
  taskInput.focus();
});

renderTasks();
