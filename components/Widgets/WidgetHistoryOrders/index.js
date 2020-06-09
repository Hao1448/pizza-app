import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import {
    Grid,
    CardCart
} from 'components'
import { p } from 'base/mixins/text.js'

const WidgetHistoryOrders = ({products, total}) => {
    return (
        <Wrapper>
            <Grid>
                <Content>
                    {products.map(product => {
                        return <CardCart key={product.id} product={product} disableChangeFlag={true} total={total} />
                    })}
                </Content>
                <PriceCol>
                    <Brand>Total price</Brand>
                    {<Price>{total} $</Price>}
                </PriceCol>
            </Grid>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 40px 0;
    border-radius: 20px;
    background: ${p => p.theme.color.white};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
    ${breakpoint('xs', 'sm')`
        padding: 40px 20px;
    `}
`
const PriceCol = styled.div`
    grid-column: 10 / span 2;
    ${breakpoint('xs', 'sm')`
        text-align: center;
    `}
`

const Brand = styled.div`
    ${p};
    align-self: center;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    margin: 0 0 15px;
    color: ${p => p.theme.color.grey_dark};
`

const Price = styled.div`
    justify-self: center;
    align-self: center;
    font-size: 24px;
    ${breakpoint('xs', 'sm')`
        grid-column: span 6;
        text-align: center;
    `}
`

const Content = styled.div`
    position: relative;
    grid-column: span 12;
    ${breakpoint('xs', 'sm')`
        grid-column: span 12;
    `}
`

export default WidgetHistoryOrders