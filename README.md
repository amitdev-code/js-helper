# js-servus

[![npm version](https://img.shields.io/npm/v/js-servus)](https://www.npmjs.com/package/js-servus)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D12.0.0-brightgreen)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

`js-servus` is a lightweight and versatile JavaScript/TypeScript utility library that simplifies common coding tasks. It provides powerful, reusable functions for tasks like sorting, filtering, grouping, and merging objects with support for nested properties. Perfect for developers who want to save time and focus on building great applications.

---

## Installation

Install the package using npm:

```bash
npm install js-servus
```

---

## Features

- Sort arrays of objects by single or nested properties.
- Merge arrays of objects based on specified keys, including nested keys.
- Filter objects with multiple conditions, supporting nested properties.
- Group arrays of objects by properties or nested keys.
- Lightweight and fully TypeScript-compatible.

---

## Usage Examples

### 1. Sorting Arrays by Nested Properties

```typescript
import { ArrayHelper } from 'js-servus';

const data = [
  { id: 1, name: 'Alice', address: { city: 'New York' } },
  { id: 2, name: 'Bob', address: { city: 'Los Angeles' } },
  { id: 3, name: 'Charlie', address: { city: 'New York' } },
];

const sorted = ArrayHelper.sortByLabel(data, 'address.city', 'asc');
console.log(sorted);
```

### 2. Merging Arrays Based on Keys

```typescript
import { ArrayHelper } from 'js-servus';

const array1 = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
];

const array2 = [
  { id: 1, age: 30 },
  { id: 2, age: 25 },
];

const merged = ArrayHelper.mergeArrays(array1, array2, ['id']);
console.log(merged);
```

### 3. Filtering Arrays by Multiple Conditions

```typescript
import { ArrayHelper } from 'js-servus';

const data = [
  { id: 1, name: 'Alice', age: 30, address: { city: 'New York' } },
  { id: 2, name: 'Bob', age: 25, address: { city: 'Los Angeles' } },
];

const filtered = ArrayHelper.filterByConditions(data, { 'address.city': 'New York', age: 30 });
console.log(filtered);
```

### 4. Grouping Arrays by Properties

```typescript
import { ArrayHelper } from 'js-servus';

const data = [
  { id: 1, category: 'fruit', details: { type: 'citrus' } },
  { id: 2, category: 'fruit', details: { type: 'berry' } },
  { id: 3, category: 'vegetable', details: { type: 'root' } },
];

const grouped = ArrayHelper.groupBy(data, 'details.type');
console.log(grouped);
```

---

## API Documentation

### ArrayHelper
- `sortByLabel<T>(data: T[], key: string, order: 'asc' | 'desc'): T[]` - Sorts an array of objects by a specified property or nested property.
- `mergeArrays<T, U>(array1: T[], array2: U[], keys: string[]): (T & U)[]` - Merges two arrays based on matching keys.
- `filterByConditions<T>(data: T[], conditions: Record<string, any>): T[]` - Filters objects by multiple conditions, supporting nested properties.
- `groupBy<T>(data: T[], key: string): Record<string, T[]>` - Groups objects by a specified property or nested property.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## Support

If you encounter any issues, please [open an issue](https://github.com/amitdev-code/js-servus/issues) on GitHub.
