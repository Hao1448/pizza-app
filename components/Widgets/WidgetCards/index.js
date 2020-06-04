import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { Container, Grid, CardPizza } from 'components'


const WidgetCards = () => {
    const pizza = {
        title: 'Pepperoni',
        price: 5
    }
    return (
        <Wrapper>
            <Container>
                <Grid>
                    <CardWrapper>
                        <CardPizza item={pizza}/>
                    </CardWrapper>
                    <CardWrapper>
                        <CardPizza item={pizza}/>
                    </CardWrapper>
                    <CardWrapper>
                        <CardPizza item={pizza}/>
                    </CardWrapper>
                    <CardWrapper>
                        <CardPizza item={pizza}/>
                    </CardWrapper>
                    <CardWrapper>
                        <CardPizza item={pizza}/>
                    </CardWrapper>
                    <CardWrapper>
                        <CardPizza item={pizza}/>
                    </CardWrapper>
                    <CardWrapper>
                        <CardPizza item={pizza}/>
                    </CardWrapper>
                    <CardWrapper>
                        <CardPizza item={pizza}/>
                    </CardWrapper>     
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
        grid-column: span 6;
    `}
`
export default WidgetCards