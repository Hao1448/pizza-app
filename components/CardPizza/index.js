import styled from 'styled-components'
import { h2 } from '../../base/mixins/text'
import pricelize from '../../base/utils/pricelize'
import img_pizza from '../../assets/images/img_pizza.jpg'
// import Link from 'next/link';

const CardPizza = () => {
    return (
        <Wrapper>
            <Image src={img_pizza}/>
            <Content>
                <Title>Pepperoni</Title>
                <Text>Spicy pepperoni, large portion of mozzarella, tomato sauce</Text>
                <ContentBottom>
                    <Title>{pricelize(5)} $</Title>
                    {/* <Button></Button> */}
                </ContentBottom>
            </Content>
        </Wrapper>
    )

}

const Wrapper = styled.div`
    cursor: pointer;
    border-radius: 20px;
    padding: 10px;
    transition: box-shadow 0.2s;
    &:hover {
        box-shadow: 0 0 10px 5px  ${p => p.theme.color.secondary};
    }
`

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Text = styled.div`
    ${h2};
    text-transform: capitalize;
    color: ${p => p.theme.color.primary};
    margin: 0;
`

const Image = styled.img`
    max-width: 100%;
`

const Content = styled.div``

const ContentBottom = styled.div``
export default CardPizza