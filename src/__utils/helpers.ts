import {SymbolTypes,SymbolType} from './types'

export const getListOfSymbols = (symbols: SymbolTypes): string[] => {
    const mergedData: string[] = [];
    const uniqueData: string[] = [];
  
    symbols.forEach((asset: SymbolType) => {
      mergedData.push(asset.quoteAsset, asset.baseAsset);
    });
  
    mergedData.forEach((value) => {
      if (!uniqueData.includes(value)) {
        uniqueData.push(value);
      }
    });
    
    return uniqueData.sort();
};


export const formatTimestamp = (timestamp: string): string => {
    const date = new Date(timestamp);
  
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
  
   
    const formattedTime = `${hours}:${minutes}:${seconds}`;
  
    return formattedTime ;
};
  