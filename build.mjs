import fs from 'node:fs';
import path from 'node:path';

fs.rmSync('dist', { recursive: true, force: true });
fs.cpSync('public', 'dist', { recursive: true });
console.log('Copied public/ to dist/');
