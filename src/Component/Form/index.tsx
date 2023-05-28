import { useEffect } from 'react';
import { Select } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { ExchangeInfoType } from '../../__utils/types';
import { getListOfSymbols } from '../../__utils/helpers';
import axios, { AxiosResponse } from 'axios';
import { API_BASE_URL } from '../../__utils/constants';
import { useGetExchange } from '../../store';
import { FormContainer } from './style';

type Props = {
    isDarkMode:boolean
}

const Form = ({isDarkMode}: Props) => {
  const { symbols, formData, saveFormType, saveSymbols } = useGetExchange();

  useEffect(() => {
    (async () => {
      try {
        const response: AxiosResponse<ExchangeInfoType> = await axios.get(`${API_BASE_URL}/exchangeInfo`);
        saveSymbols(response.data.symbols);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    })();
  }, [saveSymbols]);

  return (
    <FormContainer isDarkMode={isDarkMode}>
      <Select
        size="large"
        placeholder="Select Crypto"
        style={{ width: 200 }}
        disabled={!symbols}
        onChange={_symbol => saveFormType({ ...formData, baseAsset: _symbol })}
        showSearch
      >
        {getListOfSymbols(symbols)?.map((symbol: string, idx: number) => (
          <Select.Option value={symbol} key={idx} className="select-option">
            {symbol}
          </Select.Option>
        ))}
      </Select>

      <ArrowRightOutlined className="arrow-icon" />

      <Select
        size="large"
        placeholder="Select Crypto"
        style={{ width: 200 }}
        disabled={!symbols}
        onChange={_symbol => saveFormType({ ...formData, quoteAsset: _symbol })}
        showSearch
      >
        {getListOfSymbols(symbols)?.map((symbol: string, idx: number) => (
          <Select.Option value={symbol} key={idx} className="select-option">
            {symbol}
          </Select.Option>
        ))}
      </Select>
    </FormContainer>
  );
};

export default Form;
