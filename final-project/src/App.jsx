import { useEffect, useMemo, useState } from 'react';

// Data awal task untuk demo
const defaultTasks = [
  { id: 1, text: 'Mengerjakan project frontend', done: false },
  { id: 2, text: 'Membuat portofolio', done: true },
  { id: 3, text: 'Belajar React hooks', done: false },
];

// Data skill untuk ditampilkan di portfolio
const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Git', 'Responsive Design'];

function App() {
  // Load task dari localStorage jika ada, kalau tidak pakai defaultTasks
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('portfolioTasks');
    return saved ? JSON.parse(saved) : defaultTasks;
  });

  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('all');
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  // Simpan task saat state berubah
  useEffect(() => {
    localStorage.setItem('portfolioTasks', JSON.stringify(tasks));
  }, [tasks]);

  // Filter task berdasarkan status
  const filteredTasks = useMemo(() => {
    if (filter === 'active') {
      return tasks.filter((task) => !task.done);
    }

    if (filter === 'completed') {
      return tasks.filter((task) => task.done);
    }

    return tasks;
  }, [tasks, filter]);

  const completedCount = tasks.filter((task) => task.done).length;

  // Tambah task baru
  const addTask = () => {
    const value = input.trim();
    if (!value) return;

    setTasks((prev) => [
      ...prev,
      {
        id: Date.now(),
        text: value,
        done: false,
      },
    ]);
    setInput('');
  };

  // Toggle status task selesai/belum selesai
  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  // Hapus task
  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // Mulai mode edit
  const startEdit = (task) => {
    setEditingId(task.id);
    setEditText(task.text);
  };

  // Simpan perubahan edit
  const saveEdit = (id) => {
    const value = editText.trim();
    if (!value) return;

    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, text: value } : task
      )
    );

    setEditingId(null);
    setEditText('');
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">F</span>
          <span>Frontend</span>
        </div>

        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </nav>
      </header>

      <main className="layout">
        <section className="profile card" id="about">
          <div className="avatar">FA</div>

          <div className="profile-text">
            <span className="tag">Frontend Developer</span>
            <h1>Fadli Ahmad</h1>
            <p>
              Saya adalah frontend developer yang sedang belajar dan membangun
              project nyata untuk memperkuat kemampuan UI/UX, JavaScript, dan React.
            </p>

            <div className="cta-row">
              <button className="primary">Hire Me</button>
              <button className="secondary">Download CV</button>
            </div>
          </div>
        </section>

        <section className="stats card">
          <div>
            <strong>2+</strong>
            <span>Years Learning</span>
          </div>
          <div>
            <strong>8</strong>
            <span>Projects Built</span>
          </div>
          <div>
            <strong>{completedCount}</strong>
            <span>Tasks Done</span>
          </div>
        </section>

        <section className="skills card" id="skills">
          <h2>Skills</h2>
          <div className="skill-list">
            {skills.map((skill) => (
              <span key={skill} className="skill-item">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="projects card" id="projects">
          <h2>Featured Project</h2>
          <div className="project-box">
            <h3>Portfolio + Task Dashboard</h3>
            <p>
              Aplikasi ini menggabungkan profil personal dan to-do manager dengan
              fitur CRUD, filter, dan storage local di browser.
            </p>
          </div>
        </section>

        <section className="todo card">
          <div className="todo-header">
            <h2>Task Manager</h2>
            <span>{tasks.length} total task</span>
          </div>

          <div className="input-row">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Masukkan task baru..."
              onKeyDown={(e) => {
                if (e.key === 'Enter') addTask();
              }}
            />
            <button onClick={addTask}>Tambah</button>
          </div>

          <div className="filters">
            <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>
              Semua
            </button>
            <button className={filter === 'active' ? 'active' : ''} onClick={() => setFilter('active')}>
              Aktif
            </button>
            <button className={filter === 'completed' ? 'active' : ''} onClick={() => setFilter('completed')}>
              Selesai
            </button>
          </div>

          <ul className="task-list">
            {filteredTasks.length === 0 ? (
              <li className="empty">Belum ada task.</li>
            ) : (
              filteredTasks.map((task) => (
                <li key={task.id} className={task.done ? 'done' : ''}>
                  <label>
                    <input
                      type="checkbox"
                      checked={task.done}
                      onChange={() => toggleTask(task.id)}
                    />

                    {editingId === task.id ? (
                      <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        className="edit-input"
                      />
                    ) : (
                      <span>{task.text}</span>
                    )}
                  </label>

                  <div className="task-actions">
                    {editingId === task.id ? (
                      <button className="save-btn" onClick={() => saveEdit(task.id)}>
                        Simpan
                      </button>
                    ) : (
                      <button className="edit-btn" onClick={() => startEdit(task)}>
                        Edit
                      </button>
                    )}

                    <button className="delete-btn" onClick={() => deleteTask(task.id)}>
                      Hapus
                    </button>
                  </div>
                </li>
              ))
            )}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
