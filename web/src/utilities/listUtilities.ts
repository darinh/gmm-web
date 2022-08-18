/**
 * Sorts an array of items by a property name
 * @param items The items to sort.
 * @param key The property name to sort by.
 * @param isSortedDescending Indicates whether the items should be sorted descending.
 * @returns A list of items sorted by the column key according to isSortedDescending.
 */
export function copyAndSort<T>(items: T[], key?: keyof T, isSortedDescending?: boolean): T[] {
  if (key === undefined) return items; // IColumn.fieldName is optional. -_-
  return items.slice(0).sort((a: T, b: T) => ((isSortedDescending ? a[key] < b[key] : a[key] > b[key]) ? 1 : -1));
}