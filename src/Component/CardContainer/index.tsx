import React from 'react'
import { Col, Row } from 'antd';
import {CardContainerWrapper} from './style'
import Ticker from './Ticker';
import TwentyFourTicker from './TwentyFourTicker';
import RecentsTrades from './RecentsTrades';
import {useGetExchange} from '../../store'
import axios from 'axios'
import {API_BASE_URL} from '../../__utils/constants'
import  {CardType} from '../../__utils/types'

const CardContainer = () => {
    const {formData} = useGetExchange()
    const {baseAsset,quoteAsset} = formData
    const [cardData , setCardData] = React.useState<CardType| null>(null)
    const {ticker , twentyFourTicker,recentTrade,isError} = cardData || {}

    React.useEffect(()=>{
        if(baseAsset !== '' && quoteAsset !== '' ){
            const dataParam = baseAsset+quoteAsset
            setCardData({...cardData,isLoading: true,isError:false} as CardType);
            axios.all([axios.get(`${API_BASE_URL}/ticker?symbol=${dataParam}`),
            axios.get(`${API_BASE_URL}/ticker/24hr?symbol=${dataParam}`),
            axios.get(`${API_BASE_URL}/trades?symbol=${dataParam}`)
        ])
            .then(axios.spread((ticker, ticker24,trades) => {
                // Handle the responses
                setCardData({...cardData, ticker:ticker.data, twentyFourTicker: ticker24.data,recentTrade:trades.data, isLoading: false, isError: false} as CardType);

            }))
            .catch(error => {
                // Handle error
                console.error('Error:', error.data);
                setCardData({...cardData,isLoading: false,isError:true} as CardType);
            });
        }

    },[baseAsset,quoteAsset])

    return (
        <CardContainerWrapper>
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
                    <Ticker ticker={ticker}/>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
                    <TwentyFourTicker twentyFourTicker={twentyFourTicker}/>
                </Col>
                <Col span={24}>
                    <RecentsTrades recentTrade={recentTrade}/>
                </Col>
            </Row>
        </CardContainerWrapper>
  )
}

export default CardContainer
