import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { Container, Grid, CardOrder } from 'components'
import Link from 'next/link';

const WidgetListOrders = ({ orders }) => {
    let dateFormat = require('dateformat')
    return (
        <Wrapper>
            <Container>
                <Grid>
                    {orders.map(order => {
                        let data = JSON.parse(order.data)
                        let address = data.address

                        let orderDate = new Date(order.createdAt)
                        let formatDate =  dateFormat(orderDate, "dddd, mmmm dS, yyyy, h:MM:ss TT")
                    return (
                        <Link key={order.id} href={`/order/${order.id}`}>
                            <CardWrapper>
                                <CardOrder num={order.id} address={address} date={formatDate}/> 
                            </CardWrapper>
                        </Link>
                    )})}
                </Grid>
            </Container>
        </Wrapper>
    )
}



const Wrapper = styled.div``
const CardWrapper = styled.div`
    cursor: pointer;
    grid-column: span 12;
    ${breakpoint('xs', 'sm')`
        grid-column: span 12;
    `}
`
export default WidgetListOrders