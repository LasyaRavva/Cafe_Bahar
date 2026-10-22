import test from 'node:test';
import assert from 'node:assert/strict';
import { filterMenuItems, formatMenuPrice, menuCategories, menuItems } from '../src/menu-data.js';

test('menu records have names, known categories, and well-formed source prices', () => {
  assert.ok(menuItems.length > 0);
  for (const item of menuItems) {
    assert.equal(typeof item.name, 'string');
    assert.ok(item.name.trim());
    assert.ok(menuCategories.includes(item.category));
    assert.ok((typeof item.price === 'number' && Number.isFinite(item.price) && item.price >= 0) || item.price === 'MRP');
  }
});

test('menu has no duplicate item records', () => {
  const keys = menuItems.map(item => item.name.toLocaleLowerCase());
  assert.equal(new Set(keys).size, keys.length);
});

test('search trims whitespace and matches case-insensitively', () => {
  assert.deepEqual(filterMenuItems(menuItems, 'All', '  CHICKEN BIRYANI  ').map(item => item.name), [
    'Chicken Biryani Family Pack', 'Chicken Biryani (2 pcs)', 'Chicken Biryani'
  ]);
});

test('category and search filters combine and empty searches return all category items', () => {
  assert.ok(filterMenuItems(menuItems, 'Biryani', 'mutton').every(item => item.category === 'Biryani' && item.name.toLowerCase().includes('mutton')));
  assert.equal(filterMenuItems(menuItems, 'Desserts', '   ').length, menuItems.filter(item => item.category === 'Desserts').length);
});

test('no-match searches return an empty result and prices render as transcribed photo values', () => {
  assert.deepEqual(filterMenuItems(menuItems, 'All', 'not-on-this-menu'), []);
  assert.equal(formatMenuPrice(100), '₹100');
  assert.equal(formatMenuPrice('MRP'), 'MRP');
});
