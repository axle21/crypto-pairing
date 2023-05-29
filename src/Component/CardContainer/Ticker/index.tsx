import { CardStyled } from "./style";
import { Row, Col } from "antd";
import DynamicForm from "../../../__common/RowDynamic";
import { TickerType } from "../__utils/types";

interface Props {
  ticker: TickerType;
}

const Ticker = ({ ticker }: Props) => (
  <CardStyled>
    <Row>
      <Col span={24}>
        <Row className="header-section">
          <Col span={24} className="section-title">
            Ticker
          </Col>
        </Row>
        <Row className="body-section">
          {Object.entries(ticker).map(([key, value]: [string, any]) => (
            <DynamicForm key={key} label={key} data={value} />
          ))}
        </Row>
      </Col>
    </Row>
  </CardStyled>
);

export default Ticker;
