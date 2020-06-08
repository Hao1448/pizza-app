import styled from 'styled-components'
import { p, h2 } from 'base/mixins/text'
import { UiButton } from 'components'
// import Link from 'next/link';
import { useContext } from 'react';
import { CardContext } from 'base/cardContext'

const CardPizza = ({item: {price, title, img, text, id}}) => {
    const {incrementPizza} = useContext(CardContext);
    return (
        <Wrapper>
            <Row className="image">
                <Image src={img}/>
            </Row>
            <Row>
                <Title>{title}</Title>
            </Row>
            <Row>
                <Text>{text}</Text>
            </Row>
            <Row className='bottom'>
                <Title className='price'>{price} $</Title>
                <UiButton type="secondary" onClick={e => incrementPizza(id)}>Choose</UiButton>
            </Row>
        </Wrapper>
    )

}

const Wrapper = styled.div`
    border-radius: 20px;
    padding: 10px;
`
const Title = styled.div`
    ${h2};
    font-weight: bold;
`

const Text = styled.div`
    ${p};
    text-transform: capitalize;
    color: ${p => p.theme.color.grey_deepdark};
`

const Image = styled.img`
    max-width: 100%;
    transition: transform 0.2s;
    &:hover { 
        transform: translate(0, 5px);
    }
`
const Row = styled.div`
    & + & { 
        margin-top: 10px;
    }
    &.bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

export default CardPizza