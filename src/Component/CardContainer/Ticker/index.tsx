import React from 'react'
import {CardStyled} from './style'
import { Row ,Col} from 'antd'
import DynamicForm from '../../../__layout/RowDynamic'

const Ticker = () => {
    const sampleData:any = {
        "symbol": "AAVEDOWNUSDT",
        "priceChange": "0.00000000",
        "priceChangePercent": "0",
        "weightedAvgPrice": "0.00000000",
        "openPrice": "0.00000000",
        "highPrice": "0.00000000",
        "lowPrice": "0.00000000",
        "lastPrice": "0.00000000",
        "volume": "0.00000000",
        "quoteVolume": "0.00000000",
        "openTime": 1685089660336,
        "closeTime": 1685176060336,
        "firstId": -1,
        "lastId": -1,
        "count": 0
    }
   
    const mapField = (): React.ReactNode => {
        return Object.entries(sampleData).map(([key, value]: [string, any]) => (
          <DynamicForm key={key} label={key} data={value} />
        ));
      };
   
  return (
    <CardStyled >
			<Row>
				<Col span={24}>
					<Row className="header-section">
						<Col span={24} className='section-title'>
							Ticker
						</Col>
					</Row>
					<Row className="body-section">{mapField()}</Row>
				</Col>
			</Row>
		</CardStyled>
  )
}

export default Ticker
