const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('path');
const {
  fileExists,
  readText,
  resolveRootPath,
  listFilesByExtension
} = require('../scripts/lib/checks');

test('core files exist', () => {
  const required = [
    'index.html',
    'vercel.json',
    '.htaccess',
    'components/404.html',
    'components/404.css'
  ];

  required.forEach((file) => {
    assert.ok(fileExists(resolveRootPath(file)), `${file} should exist`);
  });
});

test('HTML includes required metadata', () => {
  const html = readText(resolveRootPath('index.html'));
  assert.ok(/<meta\s+charset="UTF-8"\s*\/?>/.test(html));
  assert.ok(html.includes('viewport'));
  assert.ok(html.includes('<title>'));
});

test('CSS assets are present', () => {
  const cssFiles = listFilesByExtension(resolveRootPath('components'), '.css');
  assert.ok(cssFiles.length > 0, 'Expected at least one CSS file in components');
});

test('404 page references assets', () => {
  const html = readText(resolveRootPath('components/404.html'));
  assert.ok(html.includes('404'), '404 page should include 404 reference');
  assert.ok(html.includes('Assets/Erro/404.gif'), '404 page should reference GIF asset');
});
