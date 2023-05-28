import {SymbolTypes,FormType} from './__utils/types'
import {create} from 'zustand';

type CounterState = {
  symbols: SymbolTypes;
  formData: FormType;
  saveSymbols: (data:SymbolTypes) => void;
  saveFormType : (data:FormType) => void;
};

export const useGetExchange = create<CounterState>((set) => ({
    symbols: [],
    formData: {baseAsset:'',quoteAsset:''},
    saveSymbols: (data: SymbolTypes) => set({ symbols :data }),
    saveFormType: (data: FormType) => set({ formData : data }),
}));