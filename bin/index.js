#!/usr/bin/env node
import { copy } from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const targetDir = process.cwd();
const templateDir = path.join(__dirname, '../template');

copy(templateDir, targetDir).then(() => {
  console.log('✅ Frontend boilerplate copied!');
});
