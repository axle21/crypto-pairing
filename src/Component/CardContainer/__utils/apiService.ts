import axios, { AxiosResponse } from "axios";
import { API_BASE_URL } from "../../../__utils/constants";

export const getPublicMarketApi = async (
  baseAsset: string,
  quoteAsset: string
): Promise<AxiosResponse<any>> => {
  const dataParam = baseAsset + quoteAsset;
  const tickerPromise = axios.get(`${API_BASE_URL}/ticker?symbol=${dataParam}`);
  const ticker24Promise = axios.get(
    `${API_BASE_URL}/ticker/24hr?symbol=${dataParam}`
  );
  const tradesPromise = axios.get(`${API_BASE_URL}/trades?symbol=${dataParam}`);

  try {
    const [ticker, ticker24, trades] = await axios.all([
      tickerPromise,
      ticker24Promise,
      tradesPromise,
    ]);
    return {
      status: 200,
      data: {
        ticker: ticker.data,
        twentyFourTicker: ticker24.data,
        recentTrade: trades.data,
      },
    } as AxiosResponse<any>;
  } catch (error: any) {
    return {
      status: 500,
      data: {},
    } as AxiosResponse<any>;
  }
};
