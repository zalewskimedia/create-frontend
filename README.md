# Frontend setup for Wagtail/Django projects

A simple starter kit that integrates **Parcel**, **Tailwind CSS**, **Alpine.js**, and **Axios** into your **Wagtail/Django** project — ready to go with just one command.

---

## 🚀 Quick Start

Use this package to scaffold the frontend environment in any Django/Wagtail project:

```bash
npx @elevennodes/wagtail-frontend
```

This will:

- Create a `package.json`
- Setup a `src/` directory containing:
  - `js/` for your JavaScript (with Alpine & Axios)
  - `css/` for your Tailwind styles
- Configure build targets (Wagtail) with **Parcel**
- Ask for your main app name to automatically update all paths

---

## ⚙️ Setup Steps

### 1. Paths in `package.json` will be automatically updated

During installation, you'll be prompted to enter your main app name. The paths in `package.json` will be automatically configured based on your input. For example:

```json
"targets": {
  "main": {
    "source": "src/js/index.js",
    "distDir": "app_name/static/js",
    "publicUrl": "/static/js/"
  },
  "styles": {
    "source": "src/css/style.css",
    "distDir": "app_name/static/css",
    "publicUrl": "/static/css/"
  },
  "images": {
    "distDir": "app_name/static/images",
    "publicUrl": "/static/images/"
  },
  "fonts": {
    "distDir": "app_name/static/fonts",
    "publicUrl": "/static/fonts/"
  }
}
```

This replace `app_name` with the actual name of your Wagtail app where static files live.



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

You can freely extend this package with any additional libraries that your project requires. Simply install them using your preferred package manager (npm or yarn) and they will be automatically included in your build.

---

## 💡 Author

Made with ❤️ by [Wojciech Zalewski](https://github.com/zalewskimedia)