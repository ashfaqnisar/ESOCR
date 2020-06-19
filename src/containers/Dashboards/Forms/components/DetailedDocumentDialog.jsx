import React, { useState } from 'react';
import {
  AppBar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Paper,
  Tab,
  Tabs,
  TextField,
  Tooltip,
  Typography
} from '@material-ui/core';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined';
import { makeStyles } from '@material-ui/core/styles';

import ReactJson from 'react-json-view';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  root: {}
}));

const DetailedDocumentDialog = props => {
  const { open, toggleDialog, document } = props;

  const handleTheNewExam = async () => {
    console.log('clicked on create button');
  };

  const jsonViewStyles = {
    base00: 'white',
    base01: '#ddd',
    base02: '#ddd',
    base03: '#444',
    base04: '#794dff',
    base05: '#444',
    base06: '#444',
    base07: '#444',
    base08: '#444',
    base09: '#794dff',
    base0A: '#794dff',
    base0B: '#794dff',
    base0C: '#794dff',
    base0D: '#794dff',
    base0E: '#794dff',
    base0F: '#794dff'
  };

  const [view, setView] = useState(0);
  const handleViewChange = (event, newView) => setView(newView);
  const classes = useStyles();
  const [tooltip, setTooltip] = useState(false);
  const closeTooltip = () => {
    if (tooltip) {
      setTooltip(!tooltip);
    }
  };
  const openTooltip = () => {
    if (!tooltip) {
      setTooltip(!tooltip);
    }
  };

  const copyObjectToClipboard = () => {
    navigator.clipboard
      .writeText(JSON.stringify(document['prediction']))
      .then(() => openTooltip());
  };

  return (
    <Dialog open={open} onClose={toggleDialog} fullWidth={true} maxWidth="lg">
      <DialogTitle>
        <Typography variant="h6">
          Document: {document['uploadedFile']}
        </Typography>
      </DialogTitle>
      <DialogContent dividers>
        <Grid
          container
          alignItems={'flex-start'}
          justify={'center'}
          direction={'row'}
          spacing={3}
        >
          <Grid
            item
            xs={12}
            sm
            md
            lg={4}
            xl={5}
            container
            justify={'center'}
            alignItems="center"
          >
            <Grid item>
              <Paper variant={'outlined'}>
                <LazyLoadImage
                  alt={document['fileId']}
                  effect={'blur'}
                  src={`https://nanonets.imgix.net/uploadedfiles/56766bad-b6f8-4e0a-9036-28c6d831fbf4/ImageSets/${document['fileId']}.jpeg?or=0&w=380`}
                  // src={`https://esocr.imgix.net/${uid}/${doc['fileId']}?fm=jpg&or=0&w=380`}
                />
              </Paper>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm
            md
            lg={8}
            xl={7}
            container
            direction={'column'}
            spacing={2}
          >
            <Grid item xs sm lg={12} md={12} xl={12}>
              <AppBar position="sticky" color="default">
                <Tabs
                  value={view}
                  onChange={handleViewChange}
                  textColor={'primary'}
                  indicatorColor="primary"
                  variant="fullWidth"
                >
                  <Tab label={'Form'} />
                  <Tab label={'Table'} />
                  <Tab label={'JSON'} />
                </Tabs>
              </AppBar>
            </Grid>
            <Grid
              item
              xs
              sm
              lg={12}
              md={12}
              xl={12}
              style={{ marginRight: '10px !important' }}
            >
              {view === 0 ? (
                <FormComponent document={document} />
              ) : view === 1 ? (
                <div
                  style={{
                    position: 'relative',
                    height: '425px',
                    overflow: 'auto'
                  }}
                >
                  Table
                </div>
              ) : (
                <Grid container direction={'column'} spacing={1}>
                  <Grid
                    item
                    xs
                    sm
                    lg
                    md
                    xl
                    container
                    alignItems={'center'}
                    spacing={1}
                  >
                    <Grid item>
                      <h4>Response: </h4>
                    </Grid>
                    <Grid item>
                      <Tooltip
                        title={'Copied'}
                        open={tooltip}
                        onClose={closeTooltip}
                        interactive
                      >
                        <IconButton onClick={copyObjectToClipboard}>
                          <FileCopyIcon color={'primary'} fontSize={'small'} />
                        </IconButton>
                      </Tooltip>
                    </Grid>
                  </Grid>
                  <Grid item xs sm lg md xl>
                    <div
                      style={{
                        position: 'relative',
                        height: '375px',
                        overflow: 'auto'
                      }}
                    >
                      <ReactJson
                        src={document['prediction']}
                        name={'prediction'}
                        enableClipboard={false}
                        iconStyle={'square'}
                        style={{ fontSize: '0.9rem' }}
                        collapsed={false}
                        collapseStringsAfterLength={10}
                        displayDataTypes={false}
                        displayObjectSize={false}
                        theme={jsonViewStyles}
                      />
                    </div>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button autoFocus color="primary" onClick={handleTheNewExam}>
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const FormComponent = ({ document }) => {
  const [formData, setFormData] = useState({});
  const prediction = document['prediction'];

  const handleTheFormChange = event => {
    const object = { [event.target.name]: event.target.value };
    setFormData({ ...formData, ...object });
  };

  return (
    <div
      style={{
        position: 'relative',
        height: '425px',
        overflow: 'auto'
      }}
    >
      <div className="form" style={{ marginRight: '12px' }}>
        <Box mb={2} style={{ width: '100%', marginRight: '20px !important' }}>
          <h4>Provider Information</h4>
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
                        name="provider.name"
                        required
                        value={prediction.provider.healthCare}
                        onChange={handleTheFormChange}
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
                        variant="outlined"
                        fullWidth
                        type="text"
                        name="examType"
                        required
                        value={prediction.provider.name}
                        onChange={handleTheFormChange}
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
                        name="provider.name"
                        required
                        value={prediction.provider.address}
                        onChange={handleTheFormChange}
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
                        name="examType"
                        required
                        value={prediction.provider.NPI}
                        onChange={handleTheFormChange}
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
                        name="examType"
                        required
                        value={prediction.provider.city}
                        onChange={handleTheFormChange}
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
                        name="provider.name"
                        required
                        value={prediction.provider.state}
                        onChange={handleTheFormChange}
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
                        name="provider.name"
                        required
                        value={prediction.provider.zip}
                        onChange={handleTheFormChange}
                      />
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Box mb={2} style={{ width: '100%' }}>
          <h4>Patient Information</h4>
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
                        name="provider.name"
                        required
                        value={prediction.patient.id}
                        onChange={handleTheFormChange}
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
                        name="examType"
                        required
                        value={prediction.patient.dob}
                        onChange={handleTheFormChange}
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
                        name="provider.name"
                        required
                        value={prediction.patient.firstName}
                        onChange={handleTheFormChange}
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
                        name="provider.name"
                        required
                        value={prediction.patient.lastName}
                        onChange={handleTheFormChange}
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
                        name="provider.name"
                        required
                        value={prediction.patient.number}
                        onChange={handleTheFormChange}
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
                        name="examType"
                        required
                        value={prediction.patient.sex}
                        onChange={handleTheFormChange}
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
                        name="examType"
                        required
                        value={prediction.patient.languagePreference}
                        onChange={handleTheFormChange}
                      />
                    </div>
                  </div>
                </Grid>
              </Grid>

              <Grid item xs={12} sm md lg={12} xl={12}>
                <div className="form__form-group">
                  <span className="form__form-group-label typography-message">
                    Shipping Address
                  </span>
                  <div className="form__form-group-field">
                    <TextField
                      size={'small'}
                      variant="outlined"
                      fullWidth
                      type="text"
                      name="examType"
                      required
                      value={prediction.patient.shippingAddress.address}
                      onChange={handleTheFormChange}
                    />
                  </div>
                </div>
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
                        name="examType"
                        required
                        value={prediction.patient.shippingAddress.city}
                        onChange={handleTheFormChange}
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
                        name="provider.name"
                        required
                        value={prediction.patient.shippingAddress.state}
                        onChange={handleTheFormChange}
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
                        name="provider.name"
                        required
                        value={prediction.patient.shippingAddress.zip}
                        onChange={handleTheFormChange}
                      />
                    </div>
                  </div>
                </Grid>
              </Grid>

              <Grid item xs={12} sm md lg={12} xl={12}>
                <div className="form__form-group">
                  <span className="form__form-group-label typography-message">
                    Billing Address
                  </span>
                  <div className="form__form-group-field">
                    <TextField
                      size={'small'}
                      variant="outlined"
                      fullWidth
                      type="text"
                      name="examType"
                      required
                      value={prediction.patient.billingAddress.address}
                      onChange={handleTheFormChange}
                    />
                  </div>
                </div>
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
                        name="examType"
                        required
                        value={prediction.patient.billingAddress.city}
                        onChange={handleTheFormChange}
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
                        name="provider.name"
                        required
                        value={prediction.patient.billingAddress.state}
                        onChange={handleTheFormChange}
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
                        name="provider.name"
                        required
                        value={prediction.patient.billingAddress.zip}
                        onChange={handleTheFormChange}
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
  );
};

export default DetailedDocumentDialog;
