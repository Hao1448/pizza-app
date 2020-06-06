import styled from 'styled-components'
import { p, h2 } from 'base/mixins/text'
import pricelize from 'base/utils/pricelize'
import img_pizza from 'assets/images/img_pizza.jpg'
import { UiButton } from 'components'
// import Link from 'next/link';

const CardPizza = ({item: {price, title}}) => {
    return (
        <Wrapper>
            <Row className="image">
                <Image src={img_pizza}/>
            </Row>
            <Row>
                <Title>{title}</Title>
            </Row>
            <Row>
                <Text>Spicy pepperoni, large portion of mozzarella, tomato sauce</Text>
            </Row>
            <Row className='bottom'>
                <Title className='price'>{pricelize(price)} $</Title>
                <UiButton type="secondary">Choose</UiButton>
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
    color: ${p => p.theme.color.grey};
`

const Image = styled.img`
    cursor: pointer;
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