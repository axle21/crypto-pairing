import React from 'react';
import { Col, Row } from 'antd';
import { CardContainerWrapper } from './style';
import Ticker from './Ticker';
import TwentyFourTicker from './TwentyFourTicker';
import RecentsTrades from './RecentsTrades';
import { useGetExchange } from '../../store';
import axios from 'axios';
import { API_BASE_URL } from '../../__utils/constants';
import { CardType } from './types';
import {
    defaultTwentyFourTickerValue,
    defaultTickerValue
} from './types';


const fetchData = (dataParam : string) => {
    const tickerPromise = axios.get(`${API_BASE_URL}/ticker?symbol=${dataParam}`);
    const ticker24Promise = axios.get(`${API_BASE_URL}/ticker/24hr?symbol=${dataParam}`);
    const tradesPromise = axios.get(`${API_BASE_URL}/trades?symbol=${dataParam}`);
  
    return axios.all([tickerPromise, ticker24Promise, tradesPromise])
      .then(axios.spread((ticker, ticker24, trades) => {
        return {
          ticker: ticker.data,
          twentyFourTicker: ticker24.data,
          recentTrade: trades.data
        };
      }));
};

const cardDataDefaultValue = {
    ticker: defaultTickerValue,
    twentyFourTicker: defaultTwentyFourTickerValue,
    recentTrade: [],
    isLoading: false,
    isError: false,
    isSuccess: false,
};

const CardContainer = () => {
    const { formData } = useGetExchange();
    const { baseAsset, quoteAsset } = formData;
    const [cardData, setCardData] = React.useState<CardType>(cardDataDefaultValue);
    const { ticker, twentyFourTicker, recentTrade, isError, isLoading, isSuccess } = cardData;

    React.useEffect(() => {
        if (baseAsset !== '' && quoteAsset !== '') {
          const dataParam = baseAsset + quoteAsset;
      
          setCardData({ ...cardDataDefaultValue, isLoading: true });
      
          fetchData(dataParam)
            .then(data => {
              setCardData({
                ...cardData,
                ...data,
                isLoading: false,
                isError: false,
                isSuccess: true
              });
            })
            .catch(error => {
              console.error('Error:', error.data);
              setCardData({ ...cardDataDefaultValue, isError: true });
            });
        } else {
          setCardData({ ...cardDataDefaultValue });
        }
      }, [baseAsset, quoteAsset]);

    return (
        <CardContainerWrapper>
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
                    <Ticker ticker={ticker} isError={isError} isLoading={isLoading} isSuccess={isSuccess} />
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
                    <TwentyFourTicker
                        twentyFourTicker={twentyFourTicker}
                        isError={isError}
                        isLoading={isLoading}
                        isSuccess={isSuccess}
                    />
                </Col>
                <Col span={24}>
                    <RecentsTrades recentTrade={recentTrade} isLoading={isLoading} />
                </Col>
            </Row>
        </CardContainerWrapper>
    );
};

export default CardContainer;
