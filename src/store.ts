import {
  getExchangeInfoDataDefaultValue,
  getExchangeInfoDataTypes,
} from "./Component/Form/__utils/types";
import {
  getPublicMarketDataDefaultValue,
  getPublicMarketDataTypes,
} from "./Component/CardContainer/__utils/types";
import { create } from "zustand";

type useGetExchangeDataType = {
  data: getExchangeInfoDataTypes;
  saveData: (data: getExchangeInfoDataTypes) => void;
};

export const useGetExchangeData = create<useGetExchangeDataType>((set) => ({
  data: getExchangeInfoDataDefaultValue,
  saveData: (data: getExchangeInfoDataTypes) => set({ data }),
}));

type useGetPublicMarketDataType = {
  data: getPublicMarketDataTypes;
  saveData: (data: getPublicMarketDataTypes) => void;
};

export const useGetPublicMarketData = create<useGetPublicMarketDataType>(
  (set) => ({
    data: getPublicMarketDataDefaultValue,
    saveData: (data: getPublicMarketDataTypes) => set({ data }),
  })
);
