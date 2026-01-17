const fs = require('fs');
const path = require('path');

function fileExists(filePath) {
  return fs.existsSync(filePath);
}

function readText(filePath) {
  return fs.readFileSync(filePath, 'utf-8');
}

function resolveRootPath(relativePath) {
  return path.resolve(__dirname, '..', '..', relativePath);
}

function listFilesByExtension(dirPath, extension) {
  if (!fs.existsSync(dirPath)) {
    return [];
  }
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      return listFilesByExtension(fullPath, extension);
    }
    if (entry.isFile() && fullPath.endsWith(extension)) {
      return [fullPath];
    }
    return [];
  });
}

module.exports = {
  fileExists,
  readText,
  resolveRootPath,
  listFilesByExtension
};
