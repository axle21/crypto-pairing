import { useEffect } from 'react';
import { isIdenticalObject } from '../../../__utils/helpers';
import {getExchangeInfoDataTypes} from './types'


interface Props {
  getExchangeInfoDataDefaultValue: getExchangeInfoDataTypes;
  data: getExchangeInfoDataTypes;
  saveData: (data: getExchangeInfoDataTypes) => void;
  getExchangeInfoApi: () => Promise<any>;

}

const useGetExchangeInfoData = ({
  getExchangeInfoDataDefaultValue,
  data,
  saveData,
  getExchangeInfoApi,
}: Props): void => {
  useEffect(() => {
    (async () => {
      if (isIdenticalObject(getExchangeInfoDataDefaultValue, data)) {
        saveData({ ...getExchangeInfoDataDefaultValue, isLoading: true });
        try {
          const res = await getExchangeInfoApi();
          const { status, data } = res;
          if (status === 200) {
            saveData({
              ...getExchangeInfoDataDefaultValue,
              data,
              isLoading: false,
              isSuccess: true,
            });
          } else {
            saveData({
              ...getExchangeInfoDataDefaultValue,
              isLoading: false,
              isError: true,
            });
          }
        } catch (error) {
          saveData({
            ...getExchangeInfoDataDefaultValue,
            isLoading: false,
            isError: true,
          });
        }
      }
    })();
  }, [data, saveData, getExchangeInfoDataDefaultValue, getExchangeInfoApi]);
};

export default useGetExchangeInfoData;
