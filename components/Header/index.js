import styled from 'styled-components'
import { h1 } from 'base/mixins/text'
import { Container, UiButton, Grid } from 'components'

const Header = () => {
    return (
        <Wrapper>
            <Container>
                <Grid>
                    <Row className='title'>
                        <Title>Pizzeria Pizza App</Title>
                    </Row>
                    <Row className='button'>
                        <UiButton wide="true" type={'technical'}>Login</UiButton>
                    </Row>
                    <Row className='button '>
                        <UiButton wide="true">Cart</UiButton>
                    </Row>
                </Grid>
            </Container>
        </Wrapper>
    )
}


const Wrapper = styled.div``

const Row = styled.div`
   &.title {
        grid-column: span 6;
        grid-row: 1 / 3;
        align-self: center;
   }
   &.button {
        grid-column: 9 / span 3;
        & + & {
            margin-top: 10px;
        }
    }
`


const Title = styled.div`
    ${h1};
    text-transform: uppercase;
    text-align: center;
    color: ${p => p.theme.color.primary};
    font-weight: bold;
`


export default Header