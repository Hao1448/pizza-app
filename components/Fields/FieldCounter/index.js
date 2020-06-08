import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'

const FieldCounter = ({ count, handleIncrement, handleDecrement }) => {
    return (
        <Wrapper>
            <CounterMinus onClick={handleDecrement}>–</CounterMinus>
            <CounterNum>{count}</CounterNum>
            <CounterElem onClick={handleIncrement}>+</CounterElem>
        </Wrapper>
    )
}
const Wrapper = styled.div`
    display: inline-flex;
    background: ${p => p.theme.color.grey};
    border-radius: 10px;
    justify-content: space-between;
    font-family: ${p => p.theme.fonts.primary};
    font-weight: bold;
    font-size: 18px;
    color: ${p => p.theme.color.grey_dark};
    overflow: hidden;
`
const CounterNum = styled.div`
    display: flex;
    align-items: center;
    user-select: text;
    margin: 0 12px;
`
const CounterElem = styled.div`
    padding: 15px;
    cursor: pointer;
    user-select: none;
    transition: background 0.2s;
    &:hover {
        background: ${p => p.theme.color.primary};
        color: ${p => p.theme.color.white};
    }

    ${breakpoint('xs', 'sm')`
        padding: 15px 10px;
    `}
`
const CounterMinus = styled(CounterElem)`
    opacity: 0.5;
`

export default FieldCounter
