import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { p } from 'base/mixins/text.js'
import { Field } from 'formik'

const FieldInput = ({...props}) => {
    return (
        <Wrapper>
            <Input
                ref={props.forwardRef}
                disabled={props.disabled}
                hasError={props.hasError}
                onChange={props.onChange}
                onBlur={props.onBlur}
                placeholder={props.placeholder}
            />
            {props.error && (
                <Error className="error">{props.error}</Error>
            )}
        </Wrapper>
    )
}
const Wrapper = styled.div``
const Input = styled.input`
    ${p};
    -moz-appearance: none;
    -webkit-appearance: none;
    box-sizing: border-box;
    width: 100%;
    outline: none;
    padding: 9.5px 12px;
    border-radius: 5px;
    color: ${p => p.theme.color.black};
    border: 1px solid ${p => p.theme.color.grey_dark};
    &:active,
    &:focus {
        color: ${p => p.theme.color.black};
        border: 1px solid ${p => p.theme.color.primary};
    }
    &::placeholder {
        color: ${p => p.theme.color.grey_deepdark};
    }
    ${p =>
        p.hasError &&
        `
            border-color: ${p.theme.color.error};
            color: ${p.theme.color.error};
        `}
    ${p =>
        p.disabled &&
        `   opacity: 0.5;
            pointer-events: none;
            border-color: ${p.theme.color.grey};
            color: ${p.theme.color.black};
        `}
    ${breakpoint('xs', 'md')`
        ${p};
        padding: 11px;
    `}
`
const Error = styled.div`
    position: absolute;
    margin-left: 10px;
    margin-top: 10px;
    font-family: ${p => p.theme.fonts.primary};
    color: ${p => p.theme.color.error};
    transition: opacity 0.2s;
    ${p =>
        p.hasError &&
        `
            opacity: 1
        `};
`

export default FieldInput