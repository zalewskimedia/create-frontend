#!/usr/bin/env node

const path = require("path");
const fs = require("fs-extra");
const readline = require("readline");

// Tworzymy CLI prompt
const askAppName = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve => {
    rl.question("📛 What's your Wagtail app name? ", answer => {
      rl.close();
      resolve(answer.trim());
    });
  });
};

(async () => {
  const templateDir = path.join(__dirname, "..", "template");
  const targetDir = process.cwd();

  console.log("🚀 Scaffolding frontend...");

  const appName = await askAppName();

  // 1. Skopiuj szablon
  await fs.copy(templateDir, targetDir, { overwrite: true });

  // 2. Zmień nazwy plików JS i CSS
  await fs.rename(
    path.join(targetDir, "src/js/app.js"),
    path.join(targetDir, `src/js/${appName}.js`)
  );
  await fs.rename(
    path.join(targetDir, "src/css/app.css"),
    path.join(targetDir, `src/css/${appName}.css`)
  );

  // 3. Zamień import w pliku JS
  const jsPath = path.join(targetDir, `src/js/${appName}.js`);
  let jsContent = await fs.readFile(jsPath, "utf-8");
  jsContent = jsContent.replace(/import\s+['"].*\.css['"]/, `import '../css/${appName}.css'`);
  await fs.writeFile(jsPath, jsContent, "utf-8");

  // 4. Podmień `package.json` targets
  const pkgPath = path.join(targetDir, "package.json");
  const pkg = await fs.readJSON(pkgPath);

  pkg.targets = {
    main: {
      source: `src/js/${appName}.js`,
      distDir: `${appName}/static/js`,
      publicUrl: "/static/js/"
    },
    styles: {
      source: `src/css/${appName}.css`,
      distDir: `${appName}/static/css`,
      publicUrl: "/static/css/"
    },
    images: {
      source: `src/img/**/*.{png,jpg,jpeg,svg,gif,webp}`,
      distDir: `${appName}/static/images`,
      publicUrl: "/static/images/"
    },
    fonts: {
      source: `src/fonts/**/*.{woff,woff2,ttf,otf,eot}`,
      distDir: `${appName}/static/fonts`,
      publicUrl: "/static/fonts/"
    }
  };

  await fs.writeJSON(pkgPath, pkg, { spaces: 2 });

  console.log("✅ Frontend template created successfully.");
})();

