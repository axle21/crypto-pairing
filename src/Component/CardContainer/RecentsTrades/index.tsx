import React from "react";
import { CardStyled } from "./style";
import { Table, Col, Row, Checkbox } from "antd";
import type { ColumnsType } from "antd/es/table";
import { RecentTradeType } from "../__utils/types";
import { formatTimestamp } from "../../../__utils/helpers";

const columns: ColumnsType<RecentTradeType> = [
  {
    title: "Id",
    dataIndex: "id",
    width: 100,
  },
  {
    title: "Price",
    dataIndex: "price",
    width: 200,
    sorter: (a, b) => a.price.localeCompare(b.price),
    render: (price) => <>{price}</>,
  },
  {
    title: "Quantity",
    dataIndex: "qty",
    width: 200,
    sorter: (a, b) => a.qty.localeCompare(b.qty),
    render: (qty) => <>{qty}</>,
  },
  {
    title: "Quote Qty",
    dataIndex: "quoteQty",
    width: 200,
    sorter: (a, b) => a.quoteQty.localeCompare(b.quoteQty),
    render: (quoteQty) => <>{quoteQty}</>,
  },
  {
    title: "Time",
    dataIndex: "time",
    width: 150,
    sorter: (a, b) => a.time - b.time,
    render: (time) => <>{formatTimestamp(time)}</>,
  },
  {
    title: "isBuyerMaker",
    dataIndex: "isBuyerMaker",
    width: 120,
    render: (isBuyerMaker) => (
      <div className="checkbox-container">
        <Checkbox checked={isBuyerMaker} />
      </div>
    ),
  },
  {
    title: "isBestMatch",
    dataIndex: "isBestMatch",
    width: 120,
    render: (isBestMatch) => (
      <div className="checkbox-container">
        <Checkbox checked={isBestMatch} />
      </div>
    ),
  },
];

type Props = {
  recentTrade: Array<RecentTradeType>;
};

const RecentsTrades: React.FC<Props> = ({ recentTrade }) => (
  <CardStyled>
    <Row>
      <Col span={24}>
        <Row className="header-section">
          <Col span={24} className="section-title">
            Recents Trade
          </Col>
        </Row>
        <Row className="body-section">
          <Table
            columns={columns}
            dataSource={recentTrade}
            pagination={{ pageSize: 50 }}
            scroll={{ y: 250 }}
          />
        </Row>
      </Col>
    </Row>
  </CardStyled>
);

export default RecentsTrades;
