import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const Container = ({ children }) => {
    return <Wrapper>{children}</Wrapper>
}

const Wrapper = styled.div`
    max-width: 1360px;
    margin: 0 auto;
    padding: 0 30px;
    ${breakpoint('xs', 'sm')`
        padding: 0 15px;
    `}
`

export default Container