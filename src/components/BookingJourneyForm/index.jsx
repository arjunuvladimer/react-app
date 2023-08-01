import React, { useState } from 'react';
import { withStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useSelector } from 'react-redux';
import MuiPhoneNumber from 'mui-phone-number';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import InputAdornment from '@mui/material/InputAdornment';
import FlightIcon from '@mui/icons-material/Flight';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Login from '../../containers/Login';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#FCFDFD',
  },
  title: {
    textAlign: 'center',
    color: '#444',
    font: '18px arial,serif',
    fontFamily: 'Nexa,sans-serif',
    fontWeight: 'bold',
  },
  title2: {
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: '700',
    color: '#333',
    fontFamily: 'Nexa,sans-serif',
    lineHeight: '1.1',
  },
  subtitle: {
    textAlign: 'left',
    font: '14px arial,serif',
    fontFamily: 'Nexa,sans-serif',
    color: '#444',
    marginTop: '20px',
  },
  subtitle1: {
    textAlign: 'center',
    fontSize: '1em',
    fontFamily: 'Nexa,sans-serif',
    color: '#444',
    fontWeight: '700',
  },
  button: {
    display: 'flex',
    justifyContent: 'flex-end',
    textTransform: 'none',
  },
  underline: {
    position: 'relative',
    display: 'inline-block',
  },
  underlineBefore: {
    position: 'absolute',
    content: '""',
    left: 50,
    right: 0,
    bottom: -8,
    height: '4px',
    width: '40%',
    backgroundColor: '#138911',
    borderRadius: '5px',
  },
  button1: {
    backgroundColor: 'rgb(17, 137, 17)',
    color: 'rgb(255, 255, 255)',
    borderRadius: '6px',
    marginTop: '14px',
    padding: '0px 50px',
    fontFamily: '"Nexa","Arial",sans-serif!important',
    fontWeight: 'bold',
    fontSize: '1rem',
    lineHeight: '1.75',
    letterSpacing: '0.02857em',
    minWidth: '183px',
    minHeight: '50px',
    display: 'flex',
  },
  luggageSection: {
    marginTop: '20px',
  },
  luggageTitle: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  luggageInfo: {
    marginLeft: '10px',
    color: '#999',
    fontSize: '0.875rem',
    display: 'flex',
    alignItems: 'center',
  },
  luggageButton: {
    display: 'flex',
    alignItems: 'center',
  },
  luggageIcon: {
    marginRight: '5px',
  },
});

const BookingJourneyForm = ({ classes, theme }) => {
  const quoteResponse = useSelector((state) => state.quoteResponse);

  const [holdLuggageQty, setHoldLuggageQty] = useState(2);
  const [skisSnowboardsQty, setSkisSnowboardsQty] = useState(0);
  const [bikesGolfBagsQty, setBikesGolfBagsQty] = useState(0);
  const [errors, setErrors] = useState({});

  const handleIncreaseHoldLuggage = () => {
    setHoldLuggageQty((prevQty) => prevQty + 1);
  };

  const handleDecreaseHoldLuggage = () => {
    if (holdLuggageQty > 0) {
      setHoldLuggageQty((prevQty) => prevQty - 1);
    }
  };

  const handleIncreaseSkisSnowboards = () => {
    setSkisSnowboardsQty((prevQty) => prevQty + 1);
  };

  const handleDecreaseSkisSnowboards = () => {
    if (skisSnowboardsQty > 0) {
      setSkisSnowboardsQty((prevQty) => prevQty - 1);
    }
  };

  const handleIncreaseBikesGolfBags = () => {
    setBikesGolfBagsQty((prevQty) => prevQty + 1);
  };

  const handleDecreaseBikesGolfBags = () => {
    if (bikesGolfBagsQty > 0) {
      setBikesGolfBagsQty((prevQty) => prevQty - 1);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const validateForm = () => {
    const form = document.getElementById('booking-form');
    if (!form.checkValidity()) {
      form.reportValidity();
      return false;
    }

    const newErrors = {};

    if (form.firstName.value.trim() === '') {
      newErrors.firstName = 'First Name is required';
    }
    if (form.lastName.value.trim() === '') {
      newErrors.lastName = 'Last Name is required';
    }
    if (form.email.value.trim() === '') {
      newErrors.email = 'Email Address is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return (
    <div>
      <Card>
        <CardContent>
          <Grid container spacing={2} className={classes.root}>
            <Grid item xs={12} md={12}>
              <Typography variant="h5" className={classes.title}>
                Your Search
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography variant="subtitle1" className={classes.subtitle}>
                <span style={{ fontWeight: 'bold' }}>Outbound:</span> {quoteResponse.basket.transfers[0].fromDestination.name} to {quoteResponse.basket.transfers[0].toDestination.name} on {quoteResponse.basket.transfers[0].date} At
                <span> </span>
                {quoteResponse.basket.transfers[0].time} for {quoteResponse.basket.transfers[0].adults} Adults
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Grid container spacing={2} className={`${classes.root} ${classes.spacing}`}>
        <Grid item xs={12} md={12}>
          <Typography variant="h2" className={classes.title2}>
            Provide <span className={classes.underline}>Your Booking<span className={classes.underlineBefore}></span></span> Details
          </Typography>
        </Grid>
      </Grid>

      <Box component="form" id="booking-form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="given-name"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
              error={!!errors.firstName}
              helperText={errors.firstName}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="family-name"
              error={!!errors.lastName}
              helperText={errors.lastName}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              type="email"
              error={!!errors.email}
              helperText={errors.email}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <MuiPhoneNumber
              defaultCountry="fr"
              id="phone"
              label="Phone Number"
              variant="outlined"
              required
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={12}>
            <Typography variant="h5" className={classes.title} sx={{ marginTop: '20px' }}>
              Outbound Journey
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              id="flightNumber"
              label="Flight Number"
              name="flightNumber"
              autoComplete="flightNumber"
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <FlightIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              id="accommodationName"
              label="Accommodation Name"
              name="accommodationName"
              autoComplete="accommodationName"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <HomeIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              required
              fullWidth
              id="accommodationAddress"
              label="Accommodation Address"
              name="accommodationAddress"
              autoComplete="accommodationAddress"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <HomeIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I'm not traveling by plane/train."
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <Typography variant="h5" className={classes.title} sx={{ marginTop: '20px' }}>
              Luggage
            </Typography>
          </Grid>

          <Grid item xs={12} md={4} className={classes.luggageSection}>
            <div className={classes.luggageTitle}>
              <Typography variant="subtitle1" className={classes.title} component="div">
                Hold Luggage
              </Typography>
              <Typography variant="body2" className={classes.luggageInfo}>
                <InfoIcon fontSize="small" />
              </Typography>
            </div>
            <div className={classes.luggageButton}>
              <Button size="small" color="primary" onClick={handleDecreaseHoldLuggage}>
                <RemoveIcon />
              </Button>
              <Typography variant="body1">{holdLuggageQty}</Typography>
              <Button size="small" color="primary" onClick={handleIncreaseHoldLuggage}>
                <AddIcon />
              </Button>
            </div>
          </Grid>

          <Grid item xs={12} md={4} className={classes.luggageSection}>
            <div className={classes.luggageTitle}>
              <Typography variant="subtitle1" className={classes.title} component="div">
                Skis/Snowboards
              </Typography>
              <Typography variant="body2" className={classes.luggageInfo}>
                <InfoIcon fontSize="small" />
              </Typography>
            </div>
            <div className={classes.luggageButton}>
              <Button size="small" color="primary" onClick={handleDecreaseSkisSnowboards}>
                <RemoveIcon />
              </Button>
              <Typography variant="body1">{skisSnowboardsQty}</Typography>
              <Button size="small" color="primary" onClick={handleIncreaseSkisSnowboards}>
                <AddIcon />
              </Button>
            </div>
          </Grid>

          <Grid item xs={12} md={4} className={classes.luggageSection}>
            <div className={classes.luggageTitle}>
              <Typography variant="subtitle1" className={classes.title} component="div">
                Bikes/Golf Bags
              </Typography>
              <Typography variant="body2" className={classes.luggageInfo}>
                <InfoIcon fontSize="small" />
              </Typography>
            </div>
            <div className={classes.luggageButton}>
              <Button size="small" color="primary" onClick={handleDecreaseBikesGolfBags}>
                <RemoveIcon />
              </Button>
              <Typography variant="body1">{bikesGolfBagsQty}</Typography>
              <Button size="small" color="primary" onClick={handleIncreaseBikesGolfBags}>
                <AddIcon />
              </Button>
            </div>
          </Grid>

          <Grid item xs={12} md={12}>
            <Typography variant="h5" className={classes.title} sx={{ marginTop: '20px' }}>
              Notes / Special Requirements
            </Typography>
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              id="filled-multiline-static"
              multiline
              rows={4}
              fullWidth
            />
          </Grid>
        </Grid>

        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.button1}
        >
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(BookingJourneyForm);
