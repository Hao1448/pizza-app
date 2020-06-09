import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { Container, Grid, CardPizza } from 'components'


const WidgetCards = ({ pizzas }) => {
    return (
        <Wrapper>
            <Container>
                <Grid align="flex-end" >
                { pizzas.map((pizza) => 
                    <CardWrapper key={pizza.id} >
                        <CardPizza item={pizza} />
                    </CardWrapper>
                    )
                }
                </Grid>
            </Container>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 40px 0;
`
const CardWrapper = styled.div`
    grid-column: span 3;
    justify-self: center;
    ${breakpoint('xs', 'sm')`
        grid-column: span 12;
    `}
`
export default WidgetCards