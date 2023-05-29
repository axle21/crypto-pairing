import { SymbolTypes } from "./types";

/**
 * filter and format to map QUOTE also sort
 * @param baseAsset - string
 * @param symbols - array of symbols
 * @returns {string[]}
 */
export const getQuoteAssetsList = (symbols: SymbolTypes, baseAsset: string) => {
  if (baseAsset === "") {
    const quoteAssets = [
      ...new Set(symbols.map((symbol) => symbol.quoteAsset)),
    ];
    return quoteAssets.sort();
  } else {
    const filteredSymbols = symbols.filter(
      (symbol) => symbol.baseAsset === baseAsset
    );
    const quoteAssets = [
      ...new Set(filteredSymbols.map((symbol) => symbol.quoteAsset)),
    ];
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
  if (quoteAsset === "") {
    const baseAssets = [...new Set(symbols.map((symbol) => symbol.baseAsset))];
    return baseAssets.sort();
  } else {
    const filteredSymbols = symbols.filter(
      (symbol) => symbol.quoteAsset === quoteAsset
    );
    const baseAssets = [
      ...new Set(filteredSymbols.map((symbol) => symbol.baseAsset)),
    ];
    return baseAssets.sort();
  }
};
