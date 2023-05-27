import React from 'react'
import { Select } from 'antd';
import {FormContainer} from './style'
import {GrLinkNext} from 'react-icons/gr'
import { ExchangeInfoType} from '../../__utils/types'
import { getListOfSymbols } from '../../__utils/helpers'
import axios, {AxiosResponse} from 'axios'
import {API_BASE_URL} from '../../__utils/constants'
import {useGetExchange} from '../../store'

type Props = unknown


const Form = () => {
    const {symbols,formData,saveFormType, saveSymbols} = useGetExchange()

    React.useEffect(() => {
        const fetchData = async () => {
        try {
            const response: AxiosResponse<ExchangeInfoType> = await axios.get(
            `${API_BASE_URL}/exchangeInfo`
            );
            saveSymbols(response.data.symbols)

        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };

        fetchData();
    }, [saveSymbols]);

    return (
        <FormContainer >
            <Select
            size="large"
            placeholder="Select Crypto"
            style={{ width: 200 }}
            disabled={!symbols}
            onChange={(_symbol) => saveFormType({...formData ,baseAsset: _symbol })}
            showSearch
            >
                {getListOfSymbols(symbols)?.map((symbol: string, idx: number) => (
                    <Select.Option value={symbol} key={idx} className="select-option">
                        {symbol}
                    </Select.Option>
                ))}
            </Select>

            <GrLinkNext className="arrow-icon"/>

            <Select
            size="large"
            placeholder="Select Crypto"
            style={{ width: 200 }}
            disabled={!symbols}
            onChange={(_symbol) => saveFormType({...formData ,quoteAsset: _symbol  })}
            showSearch
            >
                {getListOfSymbols(symbols)?.map((symbol: string, idx: number) => (
                    <Select.Option value={symbol} key={idx} className="select-option">
                        {symbol}
                    </Select.Option>
                ))}
            </Select>

        </FormContainer>
  )
}

export default Form
