import styled from 'styled-components'
import { h1 } from 'base/mixins/text'
import { Container, UiButton, Grid } from 'components'
import Link from 'next/link';
import { useContext } from 'react';
import { CardContext } from 'base/cardContext'

const Header = () => {
    const { pizzas } = useContext(CardContext);
    
    return (
        <Wrapper>
            <Container>
                <Grid>
                    <Row className='title'>
                        <Link Link href="/">
                            <Title>Pizzeria Pizza App</Title>
                        </Link>
                    </Row>
                    <Row className='button'>
                        <UiButton wide="true" type={'technical'}>Login</UiButton>
                    </Row>
                    <Row className='button '>
                        <Link href='/cart'>
                            <UiButton wide="true">Cart{pizzas.length ?   ` +  ${ pizzas.length}` : ''}</UiButton>
                        </Link>
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
    cursor: pointer;
    text-transform: uppercase;
    text-align: center;
    color: ${p => p.theme.color.primary};
    font-weight: bold;
`


export default Header