import { SymbolTypes, ObjectType } from './types';

/** 
 * filter and format to map QUOTE also sort
 * @param baseAsset - string
 * @param symbols - array of symbols
 * @returns {string[]}
 */
export const getQuoteAssetsList = (symbols: SymbolTypes, baseAsset: string) => {
  if (baseAsset === '') {
    const quoteAssets = [...new Set(symbols.map(symbol => symbol.quoteAsset))];
    return quoteAssets.sort();
  } else {
    const filteredSymbols = symbols.filter(symbol => symbol.baseAsset === baseAsset);
    const quoteAssets = [...new Set(filteredSymbols.map(symbol => symbol.quoteAsset))];
    return quoteAssets.sort();
  }
};

/**
 * filter and format to map BASE also sort
 * @quoteAsset baseAsset - string
 * @param symbols - array of symbols
 * @returns {string[]}
 */
export const getBaseAssetsList = (symbols: SymbolTypes, quoteAsset: string) => {
  if (quoteAsset === '') {
    const baseAssets = [...new Set(symbols.map(symbol => symbol.baseAsset))];
    return baseAssets.sort();
  } else {
    const filteredSymbols = symbols.filter(symbol => symbol.quoteAsset === quoteAsset);
    const baseAssets = [...new Set(filteredSymbols.map(symbol => symbol.baseAsset))];
    return baseAssets.sort();
  }
};

/**
 * Convert number to a time format
 * @param timestamp - string
 * @returns {boolean}
 */
export const formatTimestamp = (timestamp: string): string => {
  const date = new Date(timestamp);

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const formattedTime = `${hours}:${minutes}:${seconds}`;

  return formattedTime;
};

/**
 * Returns if two objects are identical
 * @param obj1 - object
 * @param obj2 - object
 * @returns {boolean}
 */
export const isIdenticalObject = (obj1: ObjectType, obj2: ObjectType): boolean => {
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
