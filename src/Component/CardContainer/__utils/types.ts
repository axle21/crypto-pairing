export type TickerType = {
  readonly symbol: string;
  readonly priceChange: string;
  readonly priceChangePercent: string;
  readonly weightedAvgPrice: string;
  readonly openPrice: string;
  readonly highPrice: string;
  readonly lowPrice: string;
  readonly lastPrice: string;
  readonly volume: string;
  readonly quoteVolume: string;
  readonly openTime: number;
  readonly closeTime: number;
  readonly firstId: number;
  readonly lastId: number;
  readonly count: number;
};

export const defaultTickerValue: TickerType = {
  symbol: "",
  priceChange: "",
  priceChangePercent: "",
  weightedAvgPrice: "",
  openPrice: "",
  highPrice: "",
  lowPrice: "",
  lastPrice: "",
  volume: "",
  quoteVolume: "",
  openTime: 0,
  closeTime: 0,
  firstId: 0,
  lastId: 0,
  count: 0,
};

export type TwentyFourTickerType = {
  readonly symbol: string;
  readonly priceChange: string;
  readonly priceChangePercent: string;
  readonly weightedAvgPrice: string;
  readonly prevClosePrice: string;
  readonly lastPrice: string;
  readonly lastQty: string;
  readonly bidPrice: string;
  readonly bidQty: string;
  readonly askPrice: string;
  readonly askQty: string;
  readonly openPrice: string;
  readonly highPrice: string;
  readonly lowPrice: string;
  readonly volume: string;
  readonly quoteVolume: string;
  readonly openTime: number;
  readonly closeTime: number;
  readonly firstId: number;
  readonly lastId: number;
  readonly count: number;
};

export const defaultTwentyFourTickerValue: TwentyFourTickerType = {
  symbol: "",
  priceChange: "",
  priceChangePercent: "",
  weightedAvgPrice: "",
  prevClosePrice: "",
  lastPrice: "",
  lastQty: "",
  bidPrice: "",
  bidQty: "",
  askPrice: "",
  askQty: "",
  openPrice: "",
  highPrice: "",
  lowPrice: "",
  volume: "",
  quoteVolume: "",
  openTime: 0,
  closeTime: 0,
  firstId: 0,
  lastId: 0,
  count: 0,
};

export type RecentTradeType = {
  readonly id: React.Key;
  readonly price: string;
  readonly qty: string;
  readonly quoteQty: string;
  readonly time: number;
  readonly isBuyerMaker: boolean;
  readonly isBestMatch: boolean;
};

export const defaultRecentTradeType: RecentTradeType = {
  id: "",
  price: "",
  qty: "",
  quoteQty: "",
  time: 0,
  isBuyerMaker: false,
  isBestMatch: false,
};

export type PublicMarketDataTypes = {
  readonly ticker: TickerType;
  readonly twentyFourTicker: TwentyFourTickerType;
  readonly recentTrade: Array<RecentTradeType>;
};

export const publicMarketDataDefaultValue: PublicMarketDataTypes = {
  ticker: defaultTickerValue,
  twentyFourTicker: defaultTwentyFourTickerValue,
  recentTrade: [],
};

export type getPublicMarketDataTypes = {
  data: PublicMarketDataTypes;
  isSuccess: boolean;
  isError: boolean;
  isLoading: boolean;
};

export const getPublicMarketDataDefaultValue = {
  data: publicMarketDataDefaultValue,
  isSuccess: false,
  isError: false,
  isLoading: false,
};
