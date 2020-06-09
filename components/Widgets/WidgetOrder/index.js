import React, { Fragment } from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import {
    UiButton,
    CardCart,
    Grid,
    CardEmptyCart
} from 'components'
import { h2 } from 'base/mixins/text.js'
import Link from 'next/link'

const WidgetOrder = ({ products, toOrder }) => {
    let total = 0;
    for(let pizza of products) {
        total += pizza.count * 100 * pizza.price;
    }
    total /= 100;
    return (
            <Wrapper>
                <Top>
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
                                <Text>Final price</Text>
                                <Price>{total} $</Price>
                            </Grid>
                        </Bottom>
                        <Link href="/add-address">
                            <UiButton onClick={toOrder} wide>
                                Order
                            </UiButton>
                        </Link>
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
    ${breakpoint('xs', 'sm')`
        padding: 20px 15px;
    `}
`

const Card = styled.div`
    & + & {
        margin-top: 55px;
    }
`
const Bottom = styled.div`
    padding: 30px 0 40px;
    background: ${p => p.theme.color.grey};
    margin: 40px  0 -20px;
    ${breakpoint('xs', 'sm')`
        padding: 20px 15px 30px;
        margin: 0 0 -20px;
    `}
`

const Price = styled.div`
    grid-column: 10 / span 3;
    font-size: 24px;
    line-height: 160%;
    align-items: center;
    ${breakpoint('xs', 'sm')`
        grid-column: span 12;
        text-align: center;
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
        text-align: center;
    `}
`

const Blank = styled.div`
    margin: 0 -20px;
    ${breakpoint('xs', 'sm')`
        margin: 0;
    `}
`

export default WidgetOrder
