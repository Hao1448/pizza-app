import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { FormAddress, Container, Grid } from 'components'
import { h1 } from 'base/mixins/text.js'

const AddAddressPage = () => {
    return (
        <Wrapper>
        <Container>
            <Grid>
                <Title>Where to deliver</Title>
                    <Form>
                        <Top>
                            <FormAddress/>
                        </Top>
                    </Form>
                </Grid>
            </Container>
        </Wrapper>
    )
}
const Wrapper = styled.div`
     margin: 10px 0 100px;
    ${breakpoint('xs', 'sm')`
        margin: 50px 0;
    `}
`

const Top = styled.div`
    position: relative;
    padding: 40px 20px 100px;
    ${breakpoint('xs', 'sm')`
        padding: 20px 15px 80px;
    `}
`
const Title = styled.div`
    ${h1};
    margin-bottom: 0;
    grid-column: 3 / span 8;
    ${breakpoint('xs', 'sm')`
        grid-column: span 12;
    `}
`
const Form = styled.div`
    border-radius: 20px;
    background: ${p => p.theme.color.white};
    grid-column: 3 / span 8;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.05);
    ${breakpoint('xs', 'sm')`
        padding: 0;
        grid-column: span 12;
    `}
`


export default AddAddressPage