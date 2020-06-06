import React, { Component } from 'react'
import styled  from 'styled-components'

class UiButton extends Component {
    render() {
        const {
            className,
            type,
            isDisabled,
            children,
            onClick,
            wide = false
        } = this.props
        return (
            <Wrapper wide={wide} type={type}>
                {!type && (
                    <Button
                        onClick={onClick}
                        isDisabled={isDisabled}
                        className={className}
                    >
                        {children}
                    </Button>
                )}        
                {type === 'secondary' && (
                    <Secondary
                        onClick={onClick}
                        isDisabled={isDisabled}
                        className={className}
                    >
                        {children}
                    </Secondary>
                )}        
                {type === 'technical' && (
                    <Technical
                        onClick={onClick}
                        isDisabled={isDisabled}
                        className={className}
                    >
                        {children}
                    </Technical>
                )}
            </Wrapper>
        )
    }
}
const Wrapper = styled.div`
    position: relative;
    display: ${p => (p.wide ? 'flex' : 'inline-flex')};
    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    appearance: none !important;
`
const Button = styled.button`
    padding: 10px;
    font-family: ${p => p.theme.fonts.primary};
    font-size: 18px;
    cursor: pointer;
    border-radius: 20px;
    width: 100%;
    border-color: ${p => p.theme.color.primary};
    border-style: solid;
    border-width: 1px;
    background: ${p =>p.theme.color.primary};
    color: ${p =>p.theme.color.white};
    transition: background 0.2s, color 0.2s, border-color 0.2s, font-weight 0.2s;
     outline: none;
    user-select: none;
    -webkit-appearance: none !important;
    -moz-appearance: none !important;
    appearance: none !important; 
    &:hover,
    &:active,
    &:focus {
        background: ${p => p.theme.color.primary_dark};
        border-color: ${p => p.theme.color.primary_dark};
    }
    ${p =>
        p.isDisabled &&
        `
        opacity: 0.5;
        pointer-events: none;
    `}
`
const Secondary = styled(Button)`
    background: transparent;
    border-color: ${p => p.theme.color.primary};
    color: ${p => p.theme.color.primary};
    &:hover,
    &:active,
    &:focus {
        color: ${p => p.theme.color.white};
    }
`

const Technical = styled(Button)`
    background: transparent;
    border-color: ${p => p.theme.color.grey} ;
    color: ${p => p.theme.color.grey};
    &:hover,
    &:active,
    &:focus {
        background: ${p => p.theme.color.primary};
        border-color: ${p => p.theme.color.primary};
        color: ${p => p.theme.color.white};
    }
`
export default UiButton
