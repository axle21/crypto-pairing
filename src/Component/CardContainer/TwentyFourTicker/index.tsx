import React from 'react'
import {CardStyled} from './style'
import { Row ,Col} from 'antd'
import DynamicForm from '../../../__layout/RowDynamic'

const TwentyFourTicker = () => {
    const sampleData:any = {
        "symbol": "AAVEDOWNUSDT",
        "priceChange": "0.00000000",
        "priceChangePercent": "0.000",
        "weightedAvgPrice": "0.00000000",
        "prevClosePrice": "0.00467300",
        "lastPrice": "0.00000000",
        "lastQty": "0.00000000",
        "bidPrice": "0.00000000",
        "bidQty": "0.00000000",
        "askPrice": "0.00000000",
        "askQty": "0.00000000",
        "openPrice": "0.00000000",
        "highPrice": "0.00000000",
        "lowPrice": "0.00000000",
        "volume": "0.00000000",
        "quoteVolume": "0.00000000",
        "openTime": 1681652752590,
        "closeTime": 1681739152590,
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
                            24h ticker
						</Col>
					</Row>
					<Row className="body-section">
						
                            {
                                mapField()
                            }
							{/* <FundRow label={fundLang.FUND_STRUCTURE_ORIGIN_LABEL} data={fundOrigin} />
							<FundRow label={fundLang.FUND_STRUCTURE_TRUSTEE_LABEL} data={fundType} />
							<div className="fund-row-gap">
								<FundRow label={fundLang.FUND_STRUCTURE_JURISDICTION_LABEL} data={jurisdiction} />
								<FundRow label={fundLang.FUND_STRUCTURE_SMSF_NAME_LABEL} data={fundName} />
								<FundRow label={fundLang.FUND_STRUCTURE_ABN_LABEL} data={abn} formatter={formatAbn} />
							</div>

							{fundType === "Corporate" && (
								<FundRow label={fundLang.FUND_STRUCTURE_COMPANY_NAME_LABEL} data={companyName} />
							)}
							{fundType === "Corporate" && (
								<FundRow label={fundLang.FUND_STRUCTURE_ACN_LABEL} data={acn} formatter={formatAcn} />
							)}*/}
						
					</Row>
				</Col>
			</Row>
		</CardStyled>
  )
}

export default TwentyFourTicker
