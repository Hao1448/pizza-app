import React, { useState, useContext } from 'react'
import breakpoint from 'styled-components-breakpoint'
import styled from 'styled-components'
import { p } from 'base/mixins/text'
import {
    Grid,
    UiButton
} from 'components'
import { CardContext } from 'base/cardContext'
import { Formik } from 'formik'

import * as Yup from 'yup'

const validation = Yup.object().shape({
    street: Yup.string().required('Required field'),
    house: Yup.string().required('Required field'),
    flat: Yup.string(),
    floor: Yup.string(),
    name: Yup.string().required('Required field'),
    phone: Yup.string()
        .min(7, 'Invalid format')
        .required('Required field')
});

const FormAddress = () => {
    const { pizzas, clearPizzas } = useContext(CardContext);
    const [error, setError] = useState()
    return (
    <Wrapper>
      <Formik
        initialValues={{
            street: '',
            house: '',
            flat: '',
            floor: '',
            name: '',
            phone: '',
        }}
        validationSchema={validation}
        onSubmit={(values, actions) => {
            fetch('/api/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    address: values,
                    pizzas
                })
            })
            .then(r => r.json())
            .then(res => {
                const { success, data, message='Error' } = res
                if(success) {
                    clearPizzas(() => {location.href = `/order/${data.id}`});
                } else {
                    setError(message);
                }
            })
        }}
    >

    {props => {
 const {touched} = props
 return (
    <form onSubmit={props.handleSubmit}>
        <Grid gap="40px">
            <FieldWrap className="street">
                <input
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    name="street"
                    value={props.values.street}
                    placeholder="Street"
                />
                {props.errors.street && touched.street && <Error>{props.errors.street}</Error>}
                </FieldWrap>
            <FieldWrap className="house">
                <input
                    className='house'
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.house}
                    name="house"
                    placeholder="House"
                />
                {props.errors.house && touched.house && <Error>{props.errors.house}</Error>}
            </FieldWrap>
            <FieldWrap className="flat">
                <input
                    className='flat'
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.flat}
                    name="flat"
                    placeholder="Flat"
                />
                {props.errors.flat && touched.flat && <Error>{props.errors.flat}</Error>}
            </FieldWrap>
            <FieldWrap className="phone">
                <input
                    className='phone'
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.phone}
                    name="phone"
                    placeholder="Enter your phone number"
                />
                {props.errors.phone && touched.phone && <Error>{props.errors.phone}</Error>}
            </FieldWrap>
            <FieldWrap className="floor">
                <input
                    className='floor'
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.floor}
                    name="floor"
                    placeholder="Floor"
                />
                {props.errors.floor && touched.floor && <Error>{props.errors.floor}</Error>}
            </FieldWrap>
            <FieldWrap className="name">
                <input
                    className='name'
                    type="text"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.name}
                    name="name"
                    placeholder="Name"
                />
                {props.errors.name && touched.name && <Error>{props.errors.name}</Error>}
            </FieldWrap>
        </Grid>
        <ButtonWrap>
            <UiButton submit={true} wide >Order</UiButton>
        </ButtonWrap>
      </form>
    )
    }}
      </Formik>
      {error ? error : ''}
    </Wrapper>
  );
}
const FieldWrap = styled.div`
    &.street, &.phone {
        grid-column: span 6;
        ${breakpoint('xs', 'sm')`
            grid-column: span 12;
        `}
    }
    &.floor, &.flat, &.house, &.name {
        grid-column: span 3;
        ${breakpoint('xs', 'sm')`
            grid-column: span 6;
        `}
    }
    
`

const Error = styled.div`
    position: absolute;
    margin-left: 10px;
    margin-top: 10px;
    color: ${p => p.theme.color.error};
    transition: opacity 0.2s;
`
const ButtonWrap = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
`
const Wrapper = styled.div`
    input {
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
        ${breakpoint('xs', 'md')`
            ${p};
            padding: 11px;
        `}
    }
`

export default FormAddress