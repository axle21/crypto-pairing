import axios, { AxiosResponse } from "axios";
import { API_BASE_URL } from "../../../__utils/constants";

export const getExchangeInfoApi = async (): Promise<AxiosResponse<any>> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/exchangeInfo`);
    return response;
  } catch (error) {
    console.error("Error fetching exchange info:", error);
    throw error;
  }
};
