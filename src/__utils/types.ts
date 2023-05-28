
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

export interface ObjectType {
	[key: string]: any;
}