const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

const COPY_TARGETS = [
  'index.html',
  'styles.css',
  'vercel.json',
  '.htaccess',
  'components',
  'Assets'
];

function copyRecursive(source, destination) {
  const stat = fs.statSync(source);
  if (stat.isDirectory()) {
    fs.mkdirSync(destination, { recursive: true });
    for (const entry of fs.readdirSync(source)) {
      copyRecursive(path.join(source, entry), path.join(destination, entry));
    }
    return;
  }
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(source, destination);
}

function build() {
  if (fs.existsSync(DIST)) {
    fs.rmSync(DIST, { recursive: true, force: true });
  }
  fs.mkdirSync(DIST, { recursive: true });

  COPY_TARGETS.forEach((target) => {
    const sourcePath = path.join(ROOT, target);
    if (!fs.existsSync(sourcePath)) {
      return;
    }
    const destinationPath = path.join(DIST, target);
    copyRecursive(sourcePath, destinationPath);
  });

  const marker = path.join(DIST, 'BUILD_INFO.json');
  fs.writeFileSync(
    marker,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        files: COPY_TARGETS.filter((target) => fs.existsSync(path.join(ROOT, target)))
      },
      null,
      2
    )
  );
}

build();
