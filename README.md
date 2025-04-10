# 🦚 create-frontend for Wagtail & Django

A simple starter kit that integrates **Parcel**, **Tailwind CSS**, **Alpine.js**, and **Axios** into your **Wagtail/Django** project — ready to go with just one command.

---

## 🚀 Quick Start

Use this package to scaffold the frontend environment in any Django/Wagtail project:

```bash
npx github:zalewskimedia/create-frontend
```

This will:

- Create a `package.json`
- Setup a `src/` directory containing:
  - `js/` for your JavaScript (with Alpine & Axios)
  - `css/` for your Tailwind styles
- Configure build targets with **Parcel**

---

## ⚙️ Setup Steps

### 1. Update paths in `package.json`

After installation, adjust the `"distDir"` paths in your `package.json` to point to your project's static directories:

```json
"targets": {
  "main": {
    "source": "src/js/index.js",
    "distDir": "your_app/static/js",
    "publicUrl": "/static/js/"
  },
  "styles": {
    "source": "src/css/style.css",
    "distDir": "your_app/static/css",
    "publicUrl": "/static/css/"
  },
  "images": {
    "distDir": "your_app/static/images",
    "publicUrl": "/static/images/"
  },
  "fonts": {
    "distDir": "your_app/static/fonts",
    "publicUrl": "/static/fonts/"
  }
}
```

Replace `your_app` with the actual name of your Django app where static files live.

---

### 2. Install dependencies

```bash
yarn install
```

---

### 3. Run the dev server

This will watch your files and auto-rebuild on save:

```bash
yarn dev
```

---

### 4. Build for production

```bash
yarn build
```

---

## 🧩 Included by Default

- ⚡ [Parcel](https://parceljs.org/) – blazing fast bundler
- 🎨 [Tailwind CSS](https://tailwindcss.com/)
- 🧠 [Alpine.js](https://alpinejs.dev/) – reactive JS framework
- 🔌 [Axios](https://axios-http.com/) – promise-based HTTP client

---

## 🤝 Designed For

This is designed for modern **Wagtail** or **Django** projects that want to:

- Avoid Webpack complexity
- Use modern frontend tooling
- Keep everything neatly integrated in one repo

---

## 💡 Author

Made with ❤️ by [Wojciech Zalewski](https://github.com/zalewskimedia)

