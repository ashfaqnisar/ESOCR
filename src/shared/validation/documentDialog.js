import * as Yup from 'yup';

export default {
  provider: Yup.object().shape({
    healthCare: Yup.string().required('Required'),
    name: Yup.string().required('Required'),
    NPI: Yup.number()
      .required('Required')
      .typeError('NPI must be a number')
      .test(
        'len',
        'Provide a valid NPI',
        val => val && val.toString().length === 8
      ),
    // .min(8, 'Provided an valid NPI '),
    address: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    zip: Yup.number()
      .required('Required')
      .typeError('Provide a valid Zip Code'),
    number: Yup.number()
      .required('Required')
      .typeError('Provide a valid phone number'),
    faxNumber: Yup.number()
      .required('Required')
      .typeError('Provide a valid Fax Number'),
    languagePreference: Yup.string()
  }),
  order: Yup.object().shape({
    icdCode: Yup.string().required('Required'),
    dateOfOrder: Yup.string().required('Required')
  }),
  patient: Yup.object().shape({
    id: Yup.string().required('Required'),
    firstName: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    dob: Yup.string().required('Required'),
    sex: Yup.string().required('Required'),
    number: Yup.number()
      .required('Required')
      .typeError('Provide a valid phone number'),
    language: Yup.string().required('Required'),
    shippingAddress: Yup.object().shape({
      address: Yup.string().required('Required'),
      city: Yup.string().required('Required'),
      state: Yup.string().required('Required'),
      zip: Yup.number()
        .required('Required')
        .typeError('Provide a valid Zip Code')
    }),
    billingAddress: Yup.object().shape({
      address: Yup.string().required('Required'),
      city: Yup.string().required('Required'),
      state: Yup.string().required('Required'),
      zip: Yup.number()
        .required('Required')
        .typeError('Provide a valid Zip Code')
    }),
    // isHispanicLatinoOrigin: Yup.boolean(),
    race: Yup.string()
  }),
  billing: Yup.object().shape({
    // isESInsurance: Yup.boolean(),
    policyHolder: Yup.object().shape({
      name: Yup.string().required('Required'),
      dob: Yup.string().required('Required'),
      relationship: Yup.string().required('Required')
    }),
    primaryInsurance: Yup.string().required('Required'),
    primaryInsuranceType: Yup.string().required('Required'),
    claimsSubmissionAddress: Yup.string().required('Required'),
    policyNumber: Yup.string().required('Required'),
    groupNumber: Yup.string().required('Required'),
    plan: Yup.string().required('Required'),
    priorAuthorizationCode: Yup.string().required('Required')
  })
};