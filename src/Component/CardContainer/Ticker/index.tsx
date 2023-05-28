import React from 'react';
import { CardStyled } from './style';
import { Row, Col, Spin, Result } from 'antd';
import DynamicForm from '../../../__common/RowDynamic';
import { TickerType, defaultTickerValue } from '../types';
import { MehOutlined, SearchOutlined } from '@ant-design/icons';
import { isIdenticalObject } from '../../../__utils/helpers';

type Props = {
  ticker: TickerType;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
};

const renderBody = (
  ticker: any,
  isSuccess: boolean,
  isError: boolean,
  isLoading: boolean
): React.ReactNode => {
  if (!isIdenticalObject(defaultTickerValue, ticker) && isSuccess) {
    return Object.entries(ticker).map(([key, value]: [string, any]) => (
      <DynamicForm key={key} label={key} data={value} />
    ));
  }

  return isError && !isLoading ? (
    <Result icon={<MehOutlined />} title="Invalid symbol! There is no match." />
  ) : isLoading ? (
    <Result icon={<Spin size="large" />} title="Please wait..." />
  ) : (
    <Result icon={<SearchOutlined className="search-icons" />} title="No data available!" />
  );
};

const Ticker = ({ ticker, isSuccess, isError, isLoading }: Props) => (
  <CardStyled>
    <Row>
      <Col span={24}>
        <Row className="header-section">
          <Col span={24} className="section-title">
            Ticker
          </Col>
        </Row>
        <Row className="body-section">
          {renderBody(ticker, isSuccess, isError, isLoading)}
        </Row>
      </Col>
    </Row>
  </CardStyled>
);

export default Ticker