# Frontend Cheat Sheet

Cheat sheet ini berisi ringkasan cepat untuk membantu kamu saat belajar frontend.

## 1. Git & GitHub

### Inisialisasi repo
```bash
git init
```

### Cek status
```bash
git status
```

### Tambahkan file
```bash
git add .
```

### Commit
```bash
git commit -m "Menambahkan fitur baru"
```

### Branch baru
```bash
git checkout -b feature/nama-feature
```

### Push ke GitHub
```bash
git remote add origin https://github.com/username/repo.git
git branch -M main
git push -u origin main
```

## 2. HTML

### Struktur dasar
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
```

### Form
```html
<form>
  <input type="text" placeholder="Nama" />
  <button type="submit">Kirim</button>
</form>
```

## 3. CSS

### Selector dasar
```css
h1 {
  color: blue;
}

.container {
  display: flex;
  gap: 16px;
}
```

### Flexbox
```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
}
```

### Grid
```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
```

### Responsive media query
```css
@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
```

## 4. JavaScript

### Variabel
```js
const nama = "Budi";
let umur = 20;
```

### Function
```js
function hitung(a, b) {
  return a + b;
}
```

### Array
```js
const angka = [1, 2, 3, 4];
console.log(angka[0]);
```

### Object
```js
const user = {
  name: "Budi",
  age: 20,
};
```

### DOM
```js
document.querySelector("h1").textContent = "Halo";
```

### Event listener
```js
document.getElementById("btn").addEventListener("click", () => {
  alert("Tombol ditekan");
});
```

### Fetch API
```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error));
```

## 5. React

### Komponen dasar
```jsx
function App() {
  return <h1>Hello React</h1>;
}

export default App;
```

### useState
```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
```

### useEffect
```jsx
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return <div>{data.length}</div>;
}
```

## 6. Tailwind CSS (opsional)

### Instal Tailwind
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Contoh class
```html
<div class="bg-blue-500 text-white p-4 rounded-lg">Halo</div>
```

## 7. Deployment

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
- upload folder build
- atau deploy via GitHub integration

## 8. Tips cepat
- Baca error dulu, jangan buru-buru copy paste
- Gunakan console.log untuk debug
- Pakai React dev tools jika perlu
- Simpan project di GitHub
- Buat satu project sampai selesai, bukan banyak setengah-setengah

## 9. Shortcut umum
```bash
npm install
npm run dev
npm run build
```

## 10. Checklist sebelum selesai project
- [ ] UI sudah rapi
- [ ] responsive
- [ ] fitur utama berfungsi
- [ ] tidak ada error di console
- [ ] project bisa dibuka di browser
- [ ] hasil dipush ke GitHub
- [ ] README dibuat singkat

---

Gunakan cheat sheet ini saat kamu sedang coding agar lebih cepat dan lebih fokus.
