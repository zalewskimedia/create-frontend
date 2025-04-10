#!/usr/bin/env node

const path = require("path");
const fs = require("fs-extra");

const templateDir = path.join(__dirname, "..", "template");
const targetDir = process.cwd();

console.log("🚀 Scaffolding frontend...");

// Kopiuj wszystko z `template` do katalogu roboczego
fs.copy(templateDir, targetDir, { overwrite: true }, err => {
  if (err) {
    console.error("❌ Error copying template files:", err);
    process.exit(1);
  }
  console.log("✅ Frontend template created successfully.");
});

