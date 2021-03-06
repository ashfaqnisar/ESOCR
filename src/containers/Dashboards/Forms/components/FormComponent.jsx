import React from 'react';
import { Box, Grid, TextField, Typography } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import get from 'lodash.get';
import documentDialog from '../../../../shared/validation/documentDialog';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  buttonGrid: {
    marginTop: theme.spacing(1)
  }
}));

const FormComponent = ({ document, updateForm }) => {
  const classes = useStyles();
  const schema = Yup.object().shape(documentDialog);

  const { register, handleSubmit, errors, formState } = useForm({
    mode: 'onBlur',
    validationSchema: schema,
    defaultValues: document['prediction']
  });

  const { isSubmitted, isValid } = formState;

  const onSubmit = data => updateForm({ ...document, prediction: data });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        style={{
          position: 'relative',
          height: '390px',
          overflow: 'auto'
        }}
      >
        <div className="form" style={{ marginRight: '12px' }}>
          <Box mb={2} style={{ width: '100%' }}>
            <Typography variant={'subtitle1'}>Provider Information</Typography>
            <Box my={1} style={{ width: '100%' }}>
              <Grid container direction={'column'} spacing={1}>
                <Grid item container spacing={2}>
                  <Grid item xs={12} sm md lg={6} xl={6}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        Healthcare Organization Name
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          inputRef={register}
                          name={'provider.healthCare'}
                          helperText={get(
                            errors,
                            'provider.healthCare.message'
                          )}
                          error={get(errors, 'provider.healthCare')}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm md lg={6} xl={6}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        Provider Name
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant={'outlined'}
                          fullWidth
                          type="text"
                          name="provider.name"
                          inputRef={register}
                          helperText={get(errors, 'provider.name.message')}
                          error={get(errors, 'provider.name')}
                        />
                      </div>
                    </div>
                  </Grid>
                </Grid>
                <Grid item container spacing={2}>
                  <Grid item xs={12} sm md lg={6} xl={6}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        Location Address
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="provider.address"
                          required
                          inputRef={register}
                          helperText={get(errors, 'provider.address.message')}
                          error={get(errors, 'provider.address')}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm md lg={6} xl={6}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        NPI
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="provider.NPI"
                          inputRef={register}
                          helperText={get(errors, 'provider.NPI.message')}
                          error={get(errors, 'provider.NPI')}
                        />
                      </div>
                    </div>
                  </Grid>
                </Grid>
                <Grid item container spacing={2}>
                  <Grid item xs={12} sm md lg={4} xl={4}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        City
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="provider.city"
                          inputRef={register}
                          helperText={get(errors, 'provider.city.message')}
                          error={get(errors, 'provider.city')}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm md lg={4} xl={4}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        State
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="provider.state"
                          inputRef={register}
                          helperText={get(errors, 'provider.state.message')}
                          error={get(errors, 'provider.state')}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm md lg={4} xl={4}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        Zip
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="provider.zip"
                          inputRef={register}
                          helperText={get(errors, 'provider.zip.message')}
                          error={get(errors, 'provider.zip')}
                        />
                      </div>
                    </div>
                  </Grid>
                </Grid>
                <Grid item container spacing={2}>
                  <Grid item xs={12} sm md lg={6} xl={6}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        Number
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="provider.number"
                          inputRef={register}
                          helperText={get(errors, 'provider.number.message')}
                          error={get(errors, 'provider.number')}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm md lg={6} xl={6}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        Fax Number
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="provider.faxNumber"
                          inputRef={register}
                          helperText={get(errors, 'provider.faxNumber.message')}
                          error={get(errors, 'provider.faxNumber')}
                        />
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box mb={2} style={{ width: '100%' }}>
            <Typography variant={'subtitle1'}>Order Information</Typography>
            <Box my={1} style={{ width: '100%' }}>
              <Grid container direction={'column'} spacing={1}>
                <Grid item container spacing={2}>
                  <Grid item xs={12} sm md lg={6} xl={6}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        ICD Code
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="order.icdCode"
                          inputRef={register}
                          helperText={get(errors, 'order.icdCode.message')}
                          error={get(errors, 'order.icdCode')}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm md lg={6} xl={6}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        Date of Order
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="order.dateOfOrder"
                          inputRef={register}
                          helperText={get(errors, 'order.dateOfOrder.message')}
                          error={get(errors, 'order.dateOfOrder')}
                        />
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box mb={2} style={{ width: '100%' }}>
            <Typography variant={'subtitle1'}>Patient Information</Typography>
            <Box my={1} style={{ width: '100%' }}>
              <Grid container direction={'column'} spacing={1}>
                <Grid item container spacing={2}>
                  <Grid item xs={12} sm md lg={6} xl={6}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        Patient Id
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="patient.id"
                          inputRef={register}
                          helperText={get(errors, 'patient.id.message')}
                          error={get(errors, 'patient.id')}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm md lg={6} xl={6}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        DOB
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="patient.dob"
                          inputRef={register}
                          helperText={get(errors, 'patient.dob.message')}
                          error={get(errors, 'patient.dob')}
                        />
                      </div>
                    </div>
                  </Grid>
                </Grid>
                <Grid item container spacing={2}>
                  <Grid item xs={12} sm md lg={6} xl={6}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        First Name
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="patient.firstName"
                          inputRef={register}
                          helperText={get(errors, 'patient.firstName.message')}
                          error={get(errors, 'patient.firstName')}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm md lg={6} xl={6}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        Last Name
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="patient.lastName"
                          inputRef={register}
                          helperText={get(errors, 'patient.lastName.message')}
                          error={get(errors, 'patient.lastName')}
                        />
                      </div>
                    </div>
                  </Grid>
                </Grid>
                <Grid item container spacing={2}>
                  <Grid item xs={12} sm md lg={4} xl={4}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        Phone Number
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="patient.number"
                          inputRef={register}
                          helperText={get(errors, 'patient.number.message')}
                          error={get(errors, 'patient.number')}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm md lg={4} xl={4}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        Sex
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="patient.sex"
                          inputRef={register}
                          helperText={get(errors, 'patient.sex.message')}
                          error={get(errors, 'patient.sex')}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm md lg={4} xl={4}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        Language Preference
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="patient.languagePreference"
                          inputRef={register}
                          helperText={get(
                            errors,
                            'patient.languagePreference.message'
                          )}
                          error={get(errors, 'patient.languagePreference')}
                        />
                      </div>
                    </div>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm md lg={12} xl={12}>
                  <Typography variant={'subtitle2'}>
                    Shipping Address
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs sm md lg xl>
                      <div className="form__form-group">
                        <span className="form__form-group-label typography-message">
                          Line 1
                        </span>
                        <div className="form__form-group-field">
                          <TextField
                            size={'small'}
                            variant="outlined"
                            fullWidth
                            type="text"
                            name="patient.shippingAddress.line1"
                            inputRef={register}
                            helperText={get(
                              errors,
                              'patient.shippingAddress.line1.message'
                            )}
                            error={get(errors, 'patient.shippingAddress.line1')}
                          />
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs sm md lg xl>
                      <div className="form__form-group">
                        <span className="form__form-group-label typography-message">
                          Line 2
                        </span>
                        <div className="form__form-group-field">
                          <TextField
                            size={'small'}
                            variant="outlined"
                            fullWidth
                            type="text"
                            name="patient.shippingAddress.line2"
                            inputRef={register}
                            helperText={get(
                              errors,
                              'patient.shippingAddress.line2.message'
                            )}
                            error={get(errors, 'patient.shippingAddress.line2')}
                          />
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item container spacing={2}>
                  <Grid item xs={12} sm md lg={4} xl={4}>
                    <div className="form__form-group">
                      <Typography variant={'body1'}>City</Typography>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="patient.shippingAddress.city"
                          inputRef={register}
                          helperText={get(
                            errors,
                            'patient.shippingAddress.city.message'
                          )}
                          error={get(errors, 'patient.shippingAddress.city')}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm md lg={4} xl={4}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        State
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="patient.shippingAddress.state"
                          inputRef={register}
                          helperText={get(
                            errors,
                            'patient.shippingAddress.state.message'
                          )}
                          error={get(errors, 'patient.shippingAddress.state')}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm md lg={4} xl={4}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        Zip
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="patient.shippingAddress.zip"
                          inputRef={register}
                          helperText={get(
                            errors,
                            'patient.shippingAddress.zip.message'
                          )}
                          error={get(errors, 'patient.shippingAddress.zip')}
                        />
                      </div>
                    </div>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm md lg={12} xl={12}>
                  <Typography variant={'subtitle2'}>Billing Address</Typography>
                  <Grid container spacing={2}>
                    <Grid item xs sm md lg xl>
                      <div className="form__form-group">
                        <span className="form__form-group-label typography-message">
                          Line 1
                        </span>
                        <div className="form__form-group-field">
                          <TextField
                            size={'small'}
                            variant="outlined"
                            fullWidth
                            type="text"
                            name="patient.billingAddress.line1"
                            inputRef={register}
                            helperText={get(
                              errors,
                              'patient.billingAddress.line1.message'
                            )}
                            error={get(errors, 'patient.billingAddress.line1')}
                          />
                        </div>
                      </div>
                    </Grid>
                    <Grid item xs sm md lg xl>
                      <div className="form__form-group">
                        <span className="form__form-group-label typography-message">
                          Line 2
                        </span>
                        <div className="form__form-group-field">
                          <TextField
                            size={'small'}
                            variant="outlined"
                            fullWidth
                            type="text"
                            name="patient.billingAddress.line2"
                            inputRef={register}
                            helperText={get(
                              errors,
                              'patient.billingAddress.line2.message'
                            )}
                            error={get(errors, 'patient.billingAddress.line2')}
                          />
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item container spacing={2}>
                  <Grid item xs={12} sm md lg={4} xl={4}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        City
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="patient.billingAddress.city"
                          inputRef={register}
                          helperText={get(
                            errors,
                            'patient.billingAddress.city.message'
                          )}
                          error={get(errors, 'patient.billingAddress.city')}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm md lg={4} xl={4}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        State
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="patient.billingAddress.state"
                          inputRef={register}
                          helperText={get(
                            errors,
                            'patient.billingAddress.state.message'
                          )}
                          error={get(errors, 'patient.billingAddress.state')}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm md lg={4} xl={4}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        Zip
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="patient.billingAddress.zip"
                          inputRef={register}
                          helperText={get(
                            errors,
                            'patient.billingAddress.zip.message'
                          )}
                          error={get(errors, 'patient.billingAddress.zip')}
                        />
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box mb={2} style={{ width: '100%' }}>
            <Typography variant={'subtitle1'}>Patient Ethnicity</Typography>
            <Box my={1} style={{ width: '100%' }}>
              <Grid container direction={'column'} spacing={1}>
                <Grid item container spacing={2}>
                  <Grid item xs={12} sm md lg={6} xl={6}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        Is patient hispanic or latin origin
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          inputRef={register}
                          name="patient.isHispanicLatinoOrigin"
                          helperText={get(
                            errors,
                            'patient.isHispanicLatinoOrigin.message'
                          )}
                          error={get(errors, 'patient.isHispanicLatinoOrigin')}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm md lg={6} xl={6}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        Patient Race
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          inputRef={register}
                          name="patient.race"
                          helperText={get(errors, 'patient.race.message')}
                          error={get(errors, 'patient.race')}
                        />
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Box mb={2} style={{ width: '100%' }}>
            <Typography variant={'subtitle1'}>
              Patient Insurance /Billing
            </Typography>
            <Box my={1} style={{ width: '100%' }}>
              <Grid container direction={'column'} spacing={1}>
                <Grid item container spacing={2}>
                  <Grid item xs={12} sm md lg={6} xl={6}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        Policyholder Name
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="billing.policyHolder.name"
                          inputRef={register}
                          helperText={get(
                            errors,
                            'billing.policyHolder.name.message'
                          )}
                          error={get(errors, 'billing.policyHolder.name')}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm md lg={6} xl={6}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        PolicyHolder DOB
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="billing.policyHolder.dob"
                          inputRef={register}
                          helperText={get(
                            errors,
                            'billing.policyHolder.dob.message'
                          )}
                          error={get(errors, 'billing.policyHolder.dob')}
                        />
                      </div>
                    </div>
                  </Grid>
                </Grid>
                <Grid item container spacing={2}>
                  <Grid item xs={12} sm md lg={6} xl={6}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        Relationship to Patient
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="billing.policyHolder.relationship"
                          inputRef={register}
                          helperText={get(
                            errors,
                            'billing.policyHolder.relationship.message'
                          )}
                          error={get(
                            errors,
                            'billing.policyHolder.relationship'
                          )}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm md lg={6} xl={6}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        Patient wish Exact Sciences to bill their insurance?
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          inputRef={register}
                          name="patient.billing.isESInsurance"
                          helperText={get(
                            errors,
                            'billing.isESInsurance.message'
                          )}
                          error={get(errors, 'patient.billing.isESInsurance')}
                        />
                      </div>
                    </div>
                  </Grid>
                </Grid>
                <Grid item container spacing={2}>
                  <Grid item xs={12} sm md lg={6} xl={6}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        Primary Insurance Carrier
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="billing.primaryInsurance"
                          inputRef={register}
                          helperText={get(
                            errors,
                            'billing.primaryInsurance.message'
                          )}
                          error={get(errors, 'billing.primaryInsurance')}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm md lg={6} xl={6}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        Primary Insurance Carrier Type
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="billing.primaryInsuranceType"
                          inputRef={register}
                          helperText={get(
                            errors,
                            'billing.primaryInsuranceType.message'
                          )}
                          error={get(errors, 'billing.primaryInsuranceType')}
                        />
                      </div>
                    </div>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm md lg={12} xl={12}>
                  <div className="form__form-group">
                    <span className="form__form-group-label typography-message">
                      Claims Submission Address
                    </span>
                    <div className="form__form-group-field">
                      <TextField
                        size={'small'}
                        variant="outlined"
                        fullWidth
                        type="text"
                        name="billing.claimsSubmissionAddress"
                        inputRef={register}
                        helperText={get(
                          errors,
                          'billing.claimsSubmissionAddress.message'
                        )}
                        error={get(errors, 'billing.claimsSubmissionAddress')}
                      />
                    </div>
                  </div>
                </Grid>
                <Grid item container spacing={2}>
                  <Grid item xs={12} sm md lg={4} xl={4}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        Subscriber Id/ Policy Number
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          inputRef={register}
                          type="text"
                          name="billing.policyNumber"
                          helperText={get(
                            errors,
                            'billing.policyNumber.message'
                          )}
                          error={get(errors, 'billing.policyNumber')}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm md lg={4} xl={4}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        Group Number
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="billing.groupNumber"
                          inputRef={register}
                          helperText={get(
                            errors,
                            'billing.groupNumber.message'
                          )}
                          error={get(errors, 'billing.groupNumber')}
                        />
                      </div>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm md lg={4} xl={4}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        Plan
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="billing.plan"
                          inputRef={register}
                          helperText={get(errors, 'billing.plan.message')}
                          error={get(errors, 'billing.plan')}
                        />
                      </div>
                    </div>
                  </Grid>
                </Grid>
                <Grid item container spacing={2}>
                  <Grid item xs={12} sm md lg={6} xl={6}>
                    <div className="form__form-group">
                      <span className="form__form-group-label typography-message">
                        Prior-Authorization Code (Optional)
                      </span>
                      <div className="form__form-group-field">
                        <TextField
                          size={'small'}
                          variant="outlined"
                          fullWidth
                          type="text"
                          name="billing.priorAuthorizationCode"
                          inputRef={register}
                          helperText={get(
                            errors,
                            'billing.priorAuthorizationCode.message'
                          )}
                          error={get(errors, 'billing.priorAuthorizationCode')}
                        />
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </div>
      </div>
      <Divider />
      <Grid container className={classes.buttonGrid} alignItems={'center'}>
        <Grid item xs sm md lg xl>
          {isSubmitted ? (
            !isValid && (
              <Typography variant={'body2'} style={{ color: '#ed1c24' }}>
                * Please resolve all the errors in form
              </Typography>
            )
          ) : (
            <></>
          )}
        </Grid>
        <Grid item>
          <Button type={'submit'} variant={'outlined'} color={'primary'}>
            Update
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default FormComponent;
