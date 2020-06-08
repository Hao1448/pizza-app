import React from 'react'
import styled from 'styled-components'
import breakpoint from 'styled-components-breakpoint'
import { p } from 'base/mixins/text.js'

const FieldInput = ({
    className,
    field,
    form: { touched, errors, setFieldValue, setFieldTouched },
    ...props
}) => {
    const customOnChange = (e, callback) => {
        if (callback) {
            setFieldValue(field.name, e.target.value.substr(0, 18))
            callback(e.target.value)
        } else {
            setFieldValue(field.name, e.target.value)
        }
    }
    const customOnBlur = (e, callback) => {
        setFieldTouched(field.name, true)
    }

    return (
        <Wrapper className={`${!className ? `field ${field.name}` : ''}`}>
            <Input
                ref={props.forwardRef}
                disabled={props.disabled}
                hasError={props.hasError}
                onChange={e => customOnChange(e, props.onChange)}
                onBlur={e => customOnBlur(e, props.onBlur)}
                placeholder={props.placeholder}
            />
            {touched[field.name] && errors[field.name] && (
                <Error className="error">{errors[field.name]}</Error>
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
