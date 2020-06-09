import {useState, useEffect} from 'react';
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { Grid, Container, WidgetListOrders } from 'components'
import { h1 } from 'base/mixins/text.js'
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';


const OrderPage = () => {
    const [ orders, setOrders ] = useState();
    let dateFormat = require('dateformat');
    useEffect(() => {
        fetch('/api/orders')
            .then(r => r.json())
            .then(data => setOrders(data))
    }, [])

    if(!orders) {
        return 'Loading...'
    }
    return (
        <Wrapper>
            <Container>
                <Grid>
                    <Title>Your orders</Title>
                    <Widget>
                        <WidgetListOrders orders={orders}/>
                   </Widget>
                </Grid>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    margin: 10px 0 100px;
    ${breakpoint('xs', 'sm')`
        margin: 135px 0 50px;
    `}
`
const Title = styled.div`
    ${h1};
    margin: 0;
    grid-column: 3 / span 8;
    ${breakpoint('xs', 'sm')`
        display: none
    `}
`
const Widget = styled.div`
    position: relative;
    grid-column: 3 / span 8;
    margin: 0 -20px;
    ${breakpoint('xs', 'sm')`
        grid-column: span 12;
        margin: 0;
    `}
`
export default OrderPage;