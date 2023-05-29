export type FormType = {
  readonly baseAsset: string;
  readonly quoteAsset: string;
};

export const defaultFormData: FormType = { baseAsset: "", quoteAsset: "" };

export type ExchangeInfoType = {
  readonly timezone: string;
  readonly serverTime: string;
  readonly symbols: SymbolTypes;
};

export type SymbolType = {
  readonly symbol: string;
  readonly status: string;
  readonly baseAsset: string;
  readonly quoteAsset: string;
};

export type SymbolTypes = Array<SymbolType>;

export const exchangeInfoDefaultValue: ExchangeInfoType = {
  timezone: "",
  serverTime: "",
  symbols: [],
};

export type getExchangeInfoDataTypes = {
  data: ExchangeInfoType;
  isSuccess: boolean;
  isError: boolean;
  isLoading: boolean;
};

export const getExchangeInfoDataDefaultValue = {
  data: exchangeInfoDefaultValue,
  isSuccess: false,
  isError: false,
  isLoading: false,
};
