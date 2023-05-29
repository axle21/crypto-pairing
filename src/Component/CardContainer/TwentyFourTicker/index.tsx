import { TwentyFourTickerType } from "../__utils/types";

import { CardStyled } from "./style";
import { Row, Col } from "antd";
import DynamicForm from "../../../__common/RowDynamic";

interface Props {
  twentyFourTicker: TwentyFourTickerType;
}

const TwentyFourTicker = ({ twentyFourTicker }: Props) => (
  <CardStyled>
    <Row>
      <Col span={24}>
        <Row className="header-section">
          <Col span={24} className="section-title">
            24h Ticker
          </Col>
        </Row>
        <Row className="body-section">
          {Object.entries(twentyFourTicker).map(
            ([key, value]: [string, string | number]) => (
              <DynamicForm key={key} label={key} data={value} />
            )
          )}
        </Row>
      </Col>
    </Row>
  </CardStyled>
);

export default TwentyFourTicker;
