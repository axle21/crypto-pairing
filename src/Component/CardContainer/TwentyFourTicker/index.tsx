import React from 'react'
import {CardStyled} from './style'
import { Row ,Col} from 'antd'
import DynamicForm from '../../../__layout/RowDynamic'
import {TwentyFourTickerType} from '../../../__utils/types'

type Props = {
    twentyFourTicker: TwentyFourTickerType | undefined
}

const TwentyFourTicker = ({twentyFourTicker}:Props) => {


    const mapField = (): React.ReactNode | null => {
        if(twentyFourTicker){
          return Object.entries(twentyFourTicker).map(([key, value]: [string, string | number]) => (
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
                                24h ticker
                            </Col>
                        </Row>
                        <Row className="body-section">

                                {
                                    mapField()
                                }

                        </Row>
                    </Col>
                </Row>
            </CardStyled>
    )
}

export default TwentyFourTicker
