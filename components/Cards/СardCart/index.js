import React from 'react'
import styled, { withTheme } from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { p, h2 } from 'base/mixins/text.js'
import { Grid, UiIcon, FieldCounter } from 'components'
import icondelete from 'public/static/icons/icn_delete.svg'
import { useContext } from 'react';
import { CardContext } from 'base/cardContext'

const CardCart = (props) => {
        const { incrementPizza, removePizza, decrementPizza } = useContext(CardContext)
        
        const { product = {}, disableChangeFlag = false, total } = props
        const { price = 10, count = 1, id, img, title } = product
        
        const { theme } = props
        return (
            <Wrapper>
                <Grid align="center">
                    <Column className="image">
                        <Image
                            src={img}
                        />
                    </Column>
                    <Column className="text">
                        <Text>
                            <Brand>Product</Brand>
                            <Title>{title}</Title>
                        </Text>
                    </Column>
                    <Column className="counter">
                        <Brand>Quantity</Brand>
                        {disableChangeFlag ? count :
                        (<FieldCounter
                            handleIncrement={() => incrementPizza(id)}
                            handleDecrement={() => decrementPizza(id)}
                            count={count}
                        />) }
                    </Column>
                    <Column className="price">
                        <Brand>Price</Brand>
                        <Price>{Math.round(price * 100 * count) / 100} $</Price>
                    </Column>
                    { !disableChangeFlag && (<Column className="remove">
                        <UiIcon
                            onClick={() => removePizza(id)}
                            src={icondelete}
                            width="26px"
                            height="26px"
                            color={theme.color.grey_dark}
                            hoverColor={theme.color.primary}
                        />
                    </Column>) }
                </Grid>
            </Wrapper>
        )
    }

const Wrapper = styled.div`
`

const Column = styled.div`
    &.image {
        grid-column: span 2;
        margin: 0 20px;
        ${breakpoint('xs', 'sm')`
            grid-column: span 4;
            margin: 0;
        `}
    }

    &.text {
        grid-column: span 5;
        ${breakpoint('xs', 'sm')`
            grid-column: span 8;
            text-align: center;
        `}
    }

    &.counter {
        grid-column: span 2;
        ${breakpoint('xs', 'sm')`
            grid-column: span 5;
            text-align: center;
        `}
    }

    &.price {
        grid-column: span 2;
        ${breakpoint('xs', 'sm')`
            grid-column: span 6;
            text-align: center;
        `}
    } 

    &.remove {
        grid-column: span 1;
        ${breakpoint('xs', 'sm')`
            grid-column: span 1;
        `}
        & > div {
            cursor: pointer;
        }
    }
`

const Image = styled.img`
    max-width: 100%;
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
const Text = styled.div`
    grid-column: span 5;
    ${breakpoint('xs', 'sm')`
        grid-column: span 8;
    `}
`

const Title = styled.div`
    ${h2};
    font-family: ${p => p.theme.fonts.primary};
`
const Price = styled.div`
    grid-column: span 3;
    justify-self: center;
    align-self: center;
    font-family: ${p => p.theme.fonts.primary};
    font-size: 24px;
    ${breakpoint('xs', 'sm')`
        grid-column: span 6;
        text-align: center;
    `}
`
export default withTheme(CardCart)
