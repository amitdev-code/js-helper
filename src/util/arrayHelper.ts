export class ArrayHelper {
  /**
   * Sorts an array of objects by a specified property, including nested properties.
   * @param data - Array of objects to sort.
   * @param key - The key (property name) to sort by. Supports dot notation for nested properties.
   * @param order - Sort order: 'asc' for ascending, 'desc' for descending. Defaults to 'asc'.
   * @returns The sorted array of objects.
   */
  static sortByLabel<T>(
    data: T[],
    key: string,
    order: "asc" | "desc" = "asc"
  ): T[] {
    const getValue = (obj: any, path: string): any => {
      return path.split(".").reduce((acc, part) => acc && acc[part], obj);
    };

    return [...data].sort((a, b) => {
      const valueA = getValue(a, key);
      const valueB = getValue(b, key);

      if (valueA > valueB) return order === "asc" ? 1 : -1;
      if (valueA < valueB) return order === "asc" ? -1 : 1;
      return 0;
    });
  }

  /**
   * Merges two arrays based on the specified labels.
   * Each element from array1 is merged into array2 if all the labels match.
   * @param array1 - The first array of objects to merge.
   * @param array2 - The second array of objects to merge into.
   * @param labels - Array of keys (properties) to match for merging. Supports dot notation for nested properties.
   * @returns A new array with merged objects.
   */
  static mergeByLabels<T, U>(
    array1: T[],
    array2: U[],
    labels: string[]
  ): Array<T & U> {
    const getValue = (obj: any, path: string): any => {
      return path.split(".").reduce((acc, part) => acc && acc[part], obj);
    };

    return array2.map((item2) => {
      const match = array1.find((item1) =>
        labels.every(
          (label) => getValue(item1, label) === getValue(item2, label)
        )
      );

      // Explicitly cast the merged result to T & U
      return match
        ? ({ ...item2, ...match } as T & U)
        : ({ ...item2 } as T & U);
    });
  }

  /**
   * Filters an array of objects based on multiple conditions, including nested properties.
   * @param data - The array of objects to filter.
   * @param conditions - An object representing the conditions to match. Supports dot notation for nested properties.
   * @returns A new array of objects that match all the conditions.
   */
  static filterByConditions<T>(
    data: T[],
    conditions: Record<string, any>
  ): T[] {
    // Helper function to access nested properties using dot notation
    const getValue = (obj: any, path: string): any => {
      return path.split(".").reduce((acc, part) => acc && acc[part], obj);
    };

    // Filter the array based on conditions
    return data.filter((item) => {
      return Object.keys(conditions).every((key) => {
        const itemValue = getValue(item, key);
        return itemValue === conditions[key];
      });
    });
  }

  /**
   * Groups an array of objects by a specified property or nested property.
   * @param data - The array of objects to group.
   * @param key - The property or nested property to group by (supports dot notation).
   * @returns An object where the keys are the grouped property values, and the values are arrays of objects.
   */
  static groupBy<T>(data: T[], key: string): Record<string, T[]> {
    const getValue = (obj: any, path: string): any => {
      return path.split(".").reduce((acc, part) => acc && acc[part], obj);
    };

    return data.reduce((acc, item) => {
      const groupKey = getValue(item, key) ?? "undefined";
      if (!acc[groupKey]) {
        acc[groupKey] = [];
      }
      acc[groupKey].push(item);
      return acc;
    }, {} as Record<string, T[]>);
  }
}
