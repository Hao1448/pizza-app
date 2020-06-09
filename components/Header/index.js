import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { h1 } from 'base/mixins/text'
import { Container, UiButton, Grid } from 'components'
import Link from 'next/link';
import { useContext } from 'react';
import { CardContext } from 'base/cardContext'

const Header = () => {
    const { pizzas } = useContext(CardContext);
    let pizzasCount = 0;
    for(let pizza of pizzas) {
        pizzasCount += pizza.count;
    }
    
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
                        <Link Link href="/orders">
                            <UiButton wide="true" type={'technical'}>History</UiButton>
                        </Link>
                    </Row>
                    <Row className='button '>
                        <Link href='/cart'>
                            <UiButton wide="true">Cart{pizzasCount ?   ` +  ${ pizzasCount}` : ''}</UiButton>
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
        ${breakpoint('xs', 'md')`
            grid-column: span 12;
        `}
   }
   &.button {
        grid-column: 9 / span 3;
        & + & {
            margin-top: 10px;
        }
        ${breakpoint('xs', 'md')`
            grid-column: span 6;
            & + & {
                margin-top: 0;
            }
        `}
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