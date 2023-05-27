import React from 'react'
import { Col, Row } from 'antd';
import {CardContainerWrapper} from './style'
import Ticker from './Ticker';
import TwentyFourTicker from './TwentyFourTicker';
import RecentsTrades from './RecentsTrades';


const CardContainer = () => {
  return (
    <CardContainerWrapper>
        
        <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
                <Ticker/>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={12} xxl={12}>
                <TwentyFourTicker/>
            </Col>
            <Col span={24}>
                <RecentsTrades/>
            </Col>
        </Row>
    </CardContainerWrapper>
  )
}

export default CardContainer
