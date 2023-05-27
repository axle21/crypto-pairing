
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


export type SymbolTypes = Array<SymbolType>


export type FormType = {
	readonly baseAsset: string;
	readonly quoteAsset: string;
};


export type PairingType = {
	readonly isPairing: string;
	readonly isPairingError: string;
};

export type TickerType = {
	symbol: string;
	priceChange: string;
	priceChangePercent: string;
	weightedAvgPrice: string;
	openPrice: string;
	highPrice: string;
	lowPrice: string;
	lastPrice: string;
	volume: string;
	quoteVolume: string;
	openTime: number;
	closeTime: number;
	firstId: number;
	lastId: number;
	count: number;
  };


export type TwentyFourTickerType= {
	symbol: string;
	priceChange: string;
	priceChangePercent: string;
	weightedAvgPrice: string;
	prevClosePrice: string;
	lastPrice: string;
	lastQty: string;
	bidPrice: string;
	bidQty: string;
	askPrice: string;
	askQty: string;
	openPrice: string;
	highPrice: string;
	lowPrice: string;
	volume: string;
	quoteVolume: string;
	openTime: number;
	closeTime: number;
	firstId: number;
	lastId: number;
	count: number;
};

export type RecentTradeType =  {
	id: React.Key;
	price: string;
	qty: string;
	quoteQty: string;
	time: number ;
	isBuyerMaker: boolean;
	isBestMatch: boolean;
  }

export type CardType =  {
	ticker: TickerType;
	twentyFourTicker:TwentyFourTickerType;
	recentTrade: Array<RecentTradeType>;
	isLoading:boolean,
	isError: boolean,
}

