import { CardContainerWrapper } from "./style";
import { useGetPublicMarketData } from "../../store";
import { Col, Row, Result, Spin } from "antd";
import Ticker from "./Ticker";
import TwentyFourTicker from "./TwentyFourTicker";
import RecentsTrades from "./RecentsTrades";

const CardContainer = () => {
  const { data } = useGetPublicMarketData();
  const { data: publicMarketData, isLoading, isError, isSuccess } = data;
  const { ticker, twentyFourTicker, recentTrade } = publicMarketData;

  if (isSuccess) {
    return (
      <CardContainerWrapper>
        <Row gutter={[16, 16]}>
          <Col xs={24} xl={12} xxl={12}>
            <Ticker ticker={ticker} />
          </Col>
          <Col xs={24} xl={12} xxl={12}>
            <TwentyFourTicker twentyFourTicker={twentyFourTicker} />
          </Col>
          <Col span={24}>
            <RecentsTrades recentTrade={recentTrade} />
          </Col>
        </Row>
      </CardContainerWrapper>
    );
  }

  if (isLoading || isError) {
    return (
      <CardContainerWrapper>
        <Result
          status={isError ? "warning" : "info"}
          title={
            isError &&
            "There has been a problem encountered. Please check another pair or try again later."
          }
          icon={isLoading && <Spin size="large" />}
          className={`${isLoading && "loading-result"}`}
        />
      </CardContainerWrapper>
    );
  }

  return (
    <CardContainerWrapper>
      <Result
        status="404"
        title="Please select a currency pair"
        subTitle="Hmmm, what's the currency pair to query."
      />
    </CardContainerWrapper>
  );
};

export default CardContainer;
