import { ObjectType } from "./types";

/**
 * Convert number to a time format
 * @param timestamp - string
 * @returns {boolean}
 */
export const formatTimestamp = (timestamp: string): string => {
  const date = new Date(+timestamp * 1000);
  const timeString = date.toLocaleTimeString();
  return timeString;
};

/**
 * Returns if two objects are identical
 * @param obj1 - object
 * @param obj2 - object
 * @returns {boolean}
 */
export const isIdenticalObject = (
  obj1: ObjectType,
  obj2: ObjectType
): boolean => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
};


