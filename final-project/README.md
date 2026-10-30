# Final Project: Portfolio + Task Dashboard

Project akhir ini dibuat untuk menampilkan kemampuan frontend secara nyata. Aplikasi ini menggabungkan:
- halaman profil / portfolio
- task manager
- fitur CRUD task
- localStorage
- responsive layout

## Alur aplikasi
1. User membuka halaman portfolio
2. User melihat profil, skill, dan project showcase
3. User bisa menambah tugas baru di task manager
4. User bisa menandai tugas sebagai selesai atau belum selesai
5. User bisa edit tugas bila ingin merubah teks
6. User bisa hapus tugas
7. Data tersimpan di localStorage agar tetap ada saat reload halaman

## Fitur utama
- tambah task
- hapus task
- edit task
- checklist task
- filter: semua / aktif / selesai
- simpan data ke localStorage
- responsive design

## Struktur folder
```bash
final-project/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── README.md
└── .gitignore
```

## Cara menjalankan
```bash
npm install
npm run dev
```

Lalu buka browser sesuai URL yang muncul di terminal, biasanya:
```bash
http://localhost:3000
```

## Target pembelajaran
- React
- state management
- conditional rendering
- list rendering
- localStorage
- UI yang lebih rapi

## Catatan penting
- Data task disimpan secara otomatis ke localStorage
- Project ini bisa dijadikan portofolio saat sudah siap
- Jika ingin tampil lebih profesional, bisa ditambah gambar, dark mode, atau chart
