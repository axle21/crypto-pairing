import {getPublicMarketDataTypes} from '../../CardContainer/__utils/types'
import {FormType} from '../../Form/__utils/types'


type getPublicMarketApiType = (baseAsset:string, quoteAsset:string) => Promise<{ status: number; data: any }>;


const usePublicMarketData = ( getPublicMarketDataDefaultValue: getPublicMarketDataTypes,
    saveData: (data: getPublicMarketDataTypes) => void,
    getPublicMarketApi: getPublicMarketApiType) => {

  const handleOnFinish = async (values: FormType) => {
    const { baseAsset, quoteAsset } = values;
    saveData({ ...getPublicMarketDataDefaultValue, isLoading: true });

    const res = await getPublicMarketApi(baseAsset, quoteAsset);
    const { status, data } = res;

    if (status === 200) {
        saveData({
        ...getPublicMarketDataDefaultValue,
        data: data,
        isLoading: false,
        isSuccess: true,
      });
    } else {
        saveData({
        ...getPublicMarketDataDefaultValue,
        isLoading: false,
        isError: true,
      });
    }
  };

  return {  handleOnFinish };
};

export default usePublicMarketData;