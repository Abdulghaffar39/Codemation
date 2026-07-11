import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const src = path.resolve(__dirname, '..', '..', 'Videos');
const dest = path.resolve(__dirname, '..', 'public', 'videos');

async function ensureDir(dir) {
  await fs.promises.mkdir(dir, { recursive: true });
}

async function copyRecursive(s, d) {
  const entries = await fs.promises.readdir(s, { withFileTypes: true });
  await ensureDir(d);
  for (const e of entries) {
    const srcPath = path.join(s, e.name);
    const destPath = path.join(d, e.name);
    if (e.isDirectory()) {
      await copyRecursive(srcPath, destPath);
    } else if (e.isFile()) {
      await fs.promises.copyFile(srcPath, destPath);
    }
  }
}

async function main() {
  if (!fs.existsSync(src)) {
    console.error('Source folder not found:', src);
    process.exit(1);
  }
  await ensureDir(dest);
  if (fs.promises.cp) {
    await fs.promises.cp(src, dest, { recursive: true });
  } else {
    await copyRecursive(src, dest);
  }
  console.log('Videos synced to', dest);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
