import React from 'react'
import {CardStyled} from './style'
import { Table ,Col,Row,Checkbox } from 'antd'
import type { ColumnsType } from 'antd/es/table';
import {RecentTradeType} from '../../../__utils/types'
import {formatTimestamp} from '../../../__utils/helpers'
//recentTrade


const columns: ColumnsType<RecentTradeType>= [
  {
    title: 'Id',
    dataIndex: 'id',
    width:100

  },
  {
    title: 'Price',
    dataIndex: 'price',
    width:200,
    sorter: (a: RecentTradeType, b: RecentTradeType) => a.price.localeCompare(b.price),
		render: (price: string, _: any) => <>{price}</>,
  },
  {
    title: 'Quantity',
    dataIndex: 'qty',
    width:200,
    sorter: (a: RecentTradeType, b: RecentTradeType) => a.qty.localeCompare(b.qty),
		render: (qty: string, _: any) => <>{qty}</>,
  },
  {
    title: 'Quote Qty',
    dataIndex: 'quoteQty',
    width:200,
    sorter: (a: RecentTradeType, b: RecentTradeType) => a.quoteQty.localeCompare(b.quoteQty),
		render: (quoteQty: string, _: any) => <>{quoteQty}</>,
  },
  {
    title: 'Time',
    dataIndex: 'time',
    width:150,
    sorter: (a: RecentTradeType, b: RecentTradeType) => a.time - b.time,
		render: (time: string, _: any) => <>{formatTimestamp(time)}</>,
  },
  {
    title: 'isBuyerMaker',
    dataIndex: 'isBuyerMaker',
    width:120,
    render: (isBuyerMaker: boolean, _: any) => <div className='checkbox-container'><Checkbox checked={isBuyerMaker}/></div>,
  },
  {
    title: 'isBestMatch',
    dataIndex: 'isBestMatch',
    width:120,
    render: (isBestMatch: boolean, _: any) => <div className='checkbox-container'><Checkbox checked={isBestMatch}/></div>,
  },

];

type Props = {
    recentTrade : Array<RecentTradeType> | undefined
}

const RecentsTrades = ({recentTrade} :  Props) => {

  return (
    <CardStyled >
        <Row>
            <Col span={24}>
                <Row className="header-section">
                    <Col span={24} className='section-title'>
                        Ticker
                    </Col>
                </Row>
                <Row className="body-section">
                    {
                        recentTrade && <Table columns={columns} dataSource={recentTrade} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
                    }

                </Row>
            </Col>
        </Row>
	</CardStyled>
  )
}

export default RecentsTrades


