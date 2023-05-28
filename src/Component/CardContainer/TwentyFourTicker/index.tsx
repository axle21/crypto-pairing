import { TwentyFourTickerType } from '../types';
import React from 'react';
import { CardStyled } from './style';
import { Row, Col, Spin, Result } from 'antd';
import DynamicForm from '../../../__common/RowDynamic';
import { defaultTwentyFourTickerValue } from '../types';
import { MehOutlined, SearchOutlined } from '@ant-design/icons';
import { isIdenticalObject } from '../../../__utils/helpers';


type Props = {
    twentyFourTicker: TwentyFourTickerType;
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
};

const renderBody = (
    twentyFourTicker: TwentyFourTickerType,
    isSuccess: boolean,
    isError: boolean,
    isLoading: boolean
  ): React.ReactNode => {
    if (!isIdenticalObject(defaultTwentyFourTickerValue, twentyFourTicker) && isSuccess) {
      return Object.entries(twentyFourTicker).map(([key, value]: [string, string | number]) => (
        <DynamicForm key={key} label={key} data={value} />
      ));
    }
  
    return isError && !isLoading ? (
      <Result icon={<MehOutlined />} title="Invalid symbol! There is no match." />
    ) : isLoading ? (
      <Result icon={<Spin size="large" />} title="Please wait..." />
    ) : (
      <Result icon={<SearchOutlined />} title="No data available!" />
    );
  };
  
  const TwentyFourTicker = ({ twentyFourTicker, isSuccess, isError, isLoading }: Props) => (
    <CardStyled>
      <Row>
        <Col span={24}>
          <Row className="header-section">
            <Col span={24} className="section-title">
              24h ticker
            </Col>
          </Row>
          <Row className="body-section">
            {renderBody(twentyFourTicker, isSuccess, isError, isLoading)}
          </Row>
        </Col>
      </Row>
    </CardStyled>
  );
  
  export default TwentyFourTicker;
  