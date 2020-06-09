import React from 'react'
import styled, { withTheme } from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { UiButton, UiIcon } from 'components'
import bag from 'public/static/icons/icn_bag.svg'
import { h2, p } from 'base/mixins/text.js'
import Link from 'next/link';

const CardEmptyCart = ({ theme, title, text, button }) => {
    return (
        <Wrapper>
            <Top>
                <Icon
                    src={bag}
                    width="176px"
                    height="176px"
                    color={theme.color.grey_dark}
                />
                <Title>{title}</Title>
                <Text>{text}</Text>
            </Top>
            <Link href="/">
                <Button>
                    <UiButton wide>{button}</UiButton>
                </Button>
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background: #ffffff;
`

const Top = styled.div`
    position: relative;
    padding: 80px 0 90px;
    display: flex;
    align-items: center;
    flex-direction: column;
    ${breakpoint('xs', 'sm')`
        padding: 30px 0 65px;
    `}
`
const Title = styled.div`
    ${h2};
    ${breakpoint('xs', 'sm')`
        ${h2};
        text-align: center;
    `}
`

const Text = styled.div`
    ${h2};
`

const Icon = styled(UiIcon)``
const Button = styled.div`
    ${breakpoint('xs', 'sm')`
        margin: 0 -15px -20px;
    `}
`
export default withTheme(CardEmptyCart)