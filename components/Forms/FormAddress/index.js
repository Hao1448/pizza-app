import React, { Component } from 'react'
// import { withRouter } from 'next/router'
import breakpoint from 'styled-components-breakpoint'
import styled from 'styled-components'
import { h2, p } from 'base/mixins/text'
import {
    FieldInput,
    Grid,
    UiButton
} from 'components'
import MaskedInput from 'react-text-mask'
import { Formik, Form, Field } from 'formik'
import fields from './fields'
import validation from './validation'

class FormAddress extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         isSubmitting: ''
    //     }
    // }

    // handleSubmit = async (values, form) => {
    //     const {
    //         router: { asPath },
    //         store: { misc }
    //     } = this.props

    //     this.setState({
    //         isSubmitting: true
    //     })

    //     const { name, question, phone, email } = values
    // }

    render() {
        return (
            <Wrapper>
                <Formik
                    initialValues={fields}
                    validationSchema={validation}
                    onSubmit={(values, formik) => {
                        this.handleSubmit(values, formik)
                    }}
                >
                    {({ isValid, isSubmitting }) => {
                        return (
                            <Form>
                                <Row>
                                    <Title>Where to deliver?</Title>
                                </Row>
                                <Row>
                                    <Fields>
                                        <Field
                                            name="name"
                                            render={({ field, form }) => (
                                                <FieldInput
                                                    type="text"
                                                    field={field}
                                                    form={form}
                                                    placeholder="Имя"
                                                />
                                            )}
                                        />
                                        <Field
                                            name="phone"
                                            render={({ field, form }) => (
                                                <MaskedInput
                                                    mask={[
                                                        '+',
                                                        '7',
                                                        ' ',
                                                        '(',
                                                        /[1-9]/,
                                                        /\d/,
                                                        /\d/,
                                                        ')',
                                                        ' ',
                                                        /\d/,
                                                        /\d/,
                                                        /\d/,
                                                        '-',
                                                        /\d/,
                                                        /\d/,
                                                        '-',
                                                        /\d/,
                                                        /\d/
                                                    ]}
                                                    placeholder="Enter a phone number"
                                                    id="my-input-id"
                                                    field={field}
                                                    form={form}
                                                    type="tel"
                                                    placeholder="XXX XX XX"
                                                    render={(ref, props) => {
                                                        return (
                                                            <FieldInput
                                                                forwardRef={ref}
                                                                {...props}
                                                            />
                                                        )
                                                    }}
                                                />
                                            )}
                                        />
                                        <Field
                                            name="email"
                                            render={({ field, form }) => (
                                                <FieldInput
                                                    field={field}
                                                    form={form}
                                                    placeholder="Электронная почта"
                                                    size="big"
                                                />
                                            )}
                                        />
                                    </Fields>
                                </Row>
                                <Row>
                                    <UiButton
                                        wide
                                        type="submit"
                                        disabled={
                                            !isValid || this.state.isSubmitting
                                        }
                                    >
                                        Order
                                    </UiButton>
                                </Row>
                                <Row>
                                    <Error>{this.state.error}</Error>
                                </Row>
                            </Form>
                        )
                    }}
                </Formik>
            </Wrapper>
        )
    }
}
const Wrapper = styled.div``

const Title = styled.div`
    ${h2}
`
const Text = styled.div`
    ${p}
`
const Row = styled.div`
    & + & {
        margin-top: 25px;
    }
`

const Fields = styled(p => <Grid {...p} />)`
    grid-column-gap: 20px;
    grid-row-gap: 25px;
    .field {
        grid-column: span 12;
        &.name,
        &.phone {
            grid-column: span 6;
            ${breakpoint('xs', 'md')`
                grid-column: span 12;
            `}
        }
        &.comment {
            grid-row: 3 / span 7;
            height: 100%;
            ${breakpoint('xs', 'md')`
                grid-row: 3 / span 7;
            `}
        }
    }
`

const Order = styled.div`
    position: relative;
`

const OrderButton = styled.div``

const Error = styled.div`
    color: #fff;
    font-size: 16px;
    line-height: 1.55;
`

const RestorePassword = styled.div`
    grid-column: span 12;
    cursor: pointer;
    font-size: 18px;
    color: #fff;
`

export default FormAddress
