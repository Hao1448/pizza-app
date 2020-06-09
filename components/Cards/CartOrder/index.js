import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { p, h2 } from 'base/mixins/text.js'
import { Grid } from 'components'

const CardOrder = ({ num, address, date }) => {
        return (
            <Wrapper>
                <Grid>
                    <Column className="num">
                        <Title>Order №</Title>
                        <Text className="num">{num}</Text>
                    </Column>
                    <Column className="address">
                        <Title>Address</Title>
                        <Text>St: {address.street}</Text>
                        <Text>House number: {address.house}</Text>
                        {address.flat && <Text>Flat: {address.flat}</Text>}
                        {address.floor && <Text>Floor: {address.floor}</Text>}
                        <Text>Customer: {address.name}</Text>
                    </Column> 
                    <Column className="date">
                        <Title>Date</Title>
                        <Text>{date}</Text>
                    </Column>
                </Grid>
            </Wrapper>
        )
    }

const Wrapper = styled.div`
    padding: 20px;
    border: 2px solid ${p => p.theme.color.primary};
    border-radius: 20px;
    transition: box-shadow 0.2s;
    &:hover, &:focus, &:active {
        border: 2px solid ${p => p.theme.color.primary_dark};
        box-shadow: 0 0 10px 5px  ${p => p.theme.color.primary};
    }
`

const Column = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
     &.date {
        grid-column: span 4;
        ${breakpoint('xs', 'sm')`
            grid-column: span 5;
        `}
    } 
    &.address {
        grid-column: 4 / span 5;
        ${breakpoint('xs', 'sm')`
            grid-column: span 5;
        `}
    } 
    &.num {
        grid-column: 1 / span 2;
        ${breakpoint('xs', 'sm')`
            grid-column: span 12;
        `}
    } 
`

const Text = styled.div`
    ${p};
    margin: 0;
    &.num {
        ${h2}
        margin: 0;
    }
`

const Title = styled.div`
    ${p}
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    margin: 0 0 15px;
    color: ${p => p.theme.color.grey_dark};
    ${breakpoint('xs', 'sm')`
       
    `}
`
export default CardOrder