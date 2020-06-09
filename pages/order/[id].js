import {useState, useEffect} from 'react';
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { h1} from 'base/mixins/text.js'
import fetch from 'isomorphic-unfetch';
import { WidgetHistoryOrders, Grid, Container } from 'components'
export async function getServerSideProps({ req, query: { id } }) {
    return {
      props: { id },
    };
  }


const OrderPage = ({id}) => {
    const [arrPizza, setArrPizza] = useState(); 
    const [ pizzas, setPizzas ] = useState();
    const [ address, setAddress ] = useState();

    useEffect(() => {
        fetch('/api/pizza')
            .then(r => r.json())
            .then(data => setArrPizza(data))
    }, [])

    useEffect(() => {
        fetch(`/api/order/${id}`)
            .then(r => r.json())
            .then(data => {
                setPizzas(data.pizzas)
                setAddress(data.address)
            })
    }, [])

    if(!arrPizza || !pizzas) {
        return 'Loading...'
    }

    const products = pizzas.map(pizza => {
        const dbPizza = arrPizza.find(dbPizza => pizza.id == dbPizza.id);
        return {
            count: pizza.count,
            ...dbPizza
        }
    })

     let total = 0;
        for(let pizza of products) {
            total += pizza.count * 100 * pizza.price;
        }
        total /= 100;
    return (
        <Wrapper>
            <Container>
                <Grid>
                    <Title>Your order</Title>
                    <Widget>
                        <WidgetHistoryOrders products={products} total={total}/>
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