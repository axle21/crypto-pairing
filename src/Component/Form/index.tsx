import React from 'react'
import { Select } from 'antd';
import {FormContainer} from './style'
import {GrLinkNext} from 'react-icons/gr'
import { SymbolTypes } from '../../__utils/types'
import { getListOfSymbols } from '../../__utils/helpers'

type Props = {
    setPairing: (pair:number,symbol : string) => void
    symbols: SymbolTypes
}


const Form = ( {setPairing,symbols} :Props) => {



    return (
        <FormContainer >
            
            <Select
            size="large"
            placeholder="Select Crypto"
            style={{ width: 200 }}
            disabled={!symbols}
            onChange={(symbol) => setPairing(1,symbol )}
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
            onChange={(symbol) => setPairing(2,symbol )}
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
