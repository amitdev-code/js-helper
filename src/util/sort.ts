export class ArrayUtils {
    /**
     * Sorts an array of objects by a specified property.
     * @param data - Array of objects to sort.
     * @param key - The key (property name) to sort by.
     * @param order - Sort order: 'asc' for ascending, 'desc' for descending. Defaults to 'asc'.
     * @returns The sorted array of objects.
     */
    static sortByLabel<T>(data: T[], key: keyof T, order: 'asc' | 'desc' = 'asc'): T[] {
      return [...data].sort((a, b) => {
        if (a[key] > b[key]) return order === 'asc' ? 1 : -1;
        if (a[key] < b[key]) return order === 'asc' ? -1 : 1;
        return 0;
      });
    }
  }
  