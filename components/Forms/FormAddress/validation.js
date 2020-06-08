import * as Yup from 'yup'

const validation = Yup.object().shape({
    name: Yup.string().required('Required field'),
    street: Yup.string().required('Required field'),
    house: Yup.string().required('Required field'),
    phone: Yup.string()
        // .matches(
        //     /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
        //     'only digits here'
        // )
        .min(11, 'Телефон введен неправильно')
        .required('Это поле обязательное'),
    question: Yup.string().required('Это поле обязательное'),
})

export default validation
