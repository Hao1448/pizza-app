import React, { Fragment } from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import {
    UiButton,
    CardCart,
    Grid,
    CardEmptyCart
} from 'components'
import { p , h2 } from 'base/mixins/text.js'

const WidgetOrder = ({ products, total, toOrder }) => {
    return (
            <Wrapper>
                <Top>
                    <Title>Your order</Title>
                    {products.length > 0 ? (
                        products.map(product => {
                            return ( 
                             <Card key={product.id}>
                                <CardCart product={product} />
                            </Card>
                            )
                        })
                    ) : (
                        <Blank>
                            <CardEmptyCart
                                title="Your cart is empty"
                                text="You can choose pizza on the main page"
                                button="Go back to main page"
                            ></CardEmptyCart>
                        </Blank>
                    )}
                </Top>
                 {products.length > 0 && ( 
                    <Fragment>
                        <Bottom>
                            <Grid>
                                <Text>Итоговая стоимость</Text>
                                <Price>{total} $</Price>
                            </Grid>
                        </Bottom>
                        <UiButton onClick={toOrder} wide>
                            Оформить заказ
                        </UiButton>
                    </Fragment>
                )} 
            </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 40px 0 0;
    border-radius: 20px;
    background: ${p => p.theme.color.white};
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
    ${breakpoint('xs', 'sm')`
        padding: 0;
    `}
`

const Top = styled.div`
    padding: 0 20px 0;
    ${breakpoint('xs', 'sm')`
        padding: 20px 15px;
    `}
`
const Title = styled.div`
    display: none;
    ${h2};
    margin-bottom: 35px;
    grid-column: 3 / span 8;
    ${breakpoint('xs', 'sm')`
        margin-bottom: 35px;
        display: block;
    `}
`

const Card = styled.div`
    & + & {
        margin-top: 55px;
    }
`
const Bottom = styled.div`
    padding: 30px 40px;
    background: ${p => p.theme.color.grey};
    margin: 40px  0 -20px;
    ${breakpoint('xs', 'sm')`
        padding: 20px 15px;
    `}
`

const Price = styled.div`
    grid-column: 10 / span 3;
    font-size: 24px;
    line-height: 160%;
    align-items: center;
    ${breakpoint('xs', 'sm')`
        grid-column: span 12;
        margin: 0px;
    `}
`
const Text = styled.div`
    ${h2};
    grid-column: 3 / span 5;
    line-height: 120%;
    align-items: center;
    ${breakpoint('xs', 'sm')`
        grid-column: span 12;
        margin: 0px;
    `}
`

const Blank = styled.div`
    margin: 0 -20px;
    ${breakpoint('xs', 'sm')`
        margin: 0;
    `}
`

export default WidgetOrder
