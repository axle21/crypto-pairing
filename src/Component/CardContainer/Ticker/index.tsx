import React from 'react'
import {CardStyled} from './style'
import { Row ,Col} from 'antd'
import DynamicForm from '../../../__layout/RowDynamic'
import {TickerType} from '../../../__utils/types'

type Props = {
  ticker:TickerType | undefined
}

const Ticker = ({ticker}:Props) => {

    const mapField = (): React.ReactNode | null => {
        if(ticker){
          return Object.entries(ticker).map(([key, value]: [string, any]) => (
            <DynamicForm key={key} label={key} data={value} />
          ));
        }

        return null

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
