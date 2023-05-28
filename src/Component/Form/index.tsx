import React from 'react';
import { Button, Col, Select } from 'antd';
import { ArrowRightOutlined, UndoOutlined } from '@ant-design/icons';
import { ExchangeInfoType } from '../../__utils/types';
import { getBaseAssetsList, getQuoteAssetsList } from '../../__utils/helpers';
import axios, { AxiosResponse } from 'axios';
import { API_BASE_URL } from '../../__utils/constants';
import { useGetExchange } from '../../store';
import { FormContainer } from './style';

type Props = {
  isDarkMode: boolean;
};

const Form = ({ isDarkMode }: Props) => {
  const { symbols, formData, saveFormType, saveSymbols } = useGetExchange();
  const { baseAsset, quoteAsset } = formData;

  React.useEffect(() => {
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
    <FormContainer isDarkMode={isDarkMode} gutter={[16, 16]}>
      <Col span={24}>
        <Select
          size="large"
          placeholder="Select Crypto"
          style={{ width: 200 }}
          disabled={!symbols}
          value={baseAsset ? baseAsset : null}
          onChange={_symbol => saveFormType({ ...formData, baseAsset: _symbol })}
          showSearch
        >
          {getBaseAssetsList(symbols, quoteAsset)?.map((symbol: string, idx: number) => (
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
          value={quoteAsset ? quoteAsset : null}
          onChange={_symbol => saveFormType({ ...formData, quoteAsset: _symbol })}
          showSearch
        >
          {getQuoteAssetsList(symbols, baseAsset)?.map((symbol: string, idx: number) => (
            <Select.Option value={symbol} key={idx} className="select-option">
              {symbol}
            </Select.Option>
          ))}
        </Select>
      </Col>
      <Col span={24}>
        <Button
          size="large"
          icon={<UndoOutlined />}
          disabled={baseAsset === '' && quoteAsset === ''}
          onClick={() => saveFormType({ baseAsset: '', quoteAsset: '' })}
        >
          Reset
        </Button>
      </Col>
    </FormContainer>
  );
};

export default Form;
