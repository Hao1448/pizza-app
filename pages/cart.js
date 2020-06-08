import React, {useState, useEffect, useContext} from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { WidgetOrder, Grid, Container } from 'components'
import { h1 } from 'base/mixins/text.js'
import fetch from 'isomorphic-unfetch';
import { CardContext } from 'base/cardContext'

const Cart = () => {
    const [arrPizza, setArrPizza] = useState(); // все пиццы из БД
    const { pizzas, incrementPizzas } = useContext(CardContext); // пиццы из заказа

    useEffect(() => {
        fetch('/api/pizza')
            .then(r => r.json())
            .then(data => setArrPizza(data))
    }, [])

    if(!arrPizza) {
        return 'Loading...'
    }

    const products = pizzas.map(pizza => {
        const dbPizza = arrPizza.find(dbPizza => pizza.id == dbPizza.id);
        return {
            count: pizza.count,
            ...dbPizza
        }
    })

    return (
        <Wrapper>
            <Container>
                <Grid>
                    <Title>Your order</Title>
                    <Widget>
                        <WidgetOrder
                            products={products}
                            // total={total_price}
                            // toOrder={() => misc.toggleDrawer('order')}
                        />
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

export default Cart