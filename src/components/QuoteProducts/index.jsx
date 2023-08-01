import React, { useState } from 'react';
import { withStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InfoIcon from '@mui/icons-material/Info';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// SVG IMPORTS 

import { ReactComponent as BUS } from './images/travelOptions/BUS.svg';
import { ReactComponent as COAC } from './images/travelOptions/COAC.svg';
import { ReactComponent as DSHU } from './images/travelOptions/DSHU.svg';
import { ReactComponent as EC } from './images/travelOptions/EC1.svg';
import { ReactComponent as ECON } from './images/travelOptions/ECON.svg';
import { ReactComponent as EIGHTLIM } from './images/travelOptions/EIGHTLIM.svg';
import { ReactComponent as EXEC } from './images/travelOptions/EXEC.svg';
import { ReactComponent as HELI } from './images/travelOptions/HELI.svg';
import { ReactComponent as LIMO } from './images/travelOptions/LIMO.svg';
import { ReactComponent as LSUV } from './images/travelOptions/LSUV.svg';
import { ReactComponent as PRIO } from './images/travelOptions/PRIO.svg';
import { ReactComponent as PRIV } from './images/travelOptions/PRIV.svg';
import { ReactComponent as SCHD } from './images/travelOptions/SCHD.svg';
import { ReactComponent as SHAR } from './images/travelOptions/SHAR.svg';
import { ReactComponent as SHPL } from './images/travelOptions/SHPL.svg';

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
  title3: {
    fontSize: '24px',
    fontFamily: 'Nexa,sans-serif',
    color: '#265886',
    lineHeight: '1.5',
    fontWeight: '700',
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
  info: {
    fontSize: '12px',
    color: '#444',
    fontFamily: 'Nexa,sans-serif',
    cursor: 'pointer',
  },
  button: {
    display: 'flex',
    justifyContent: 'flex-end',
    textTransform: 'none',
  },
  button1: {
    backgroundColor: 'rgb(17, 137, 17)',
    color: 'rgb(255, 255, 255)',
    width: '150px',
    height: '40px',
    borderRadius: '6px',
    textTransform: 'none',
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
    justifyContent: 'flex-end',
  },
  spacing: {
    marginTop: '16px',
  },
  underline: {
    position: 'relative',
    display: 'inline-block',
  },
  underlineBefore: {
    position: 'absolute',
    content: '""',
    left: 0,
    right: 0,
    bottom: -1,
    height: '4px',
    backgroundColor: '#138911',
    borderRadius: '5px',
  },
  selectContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  select: {
    textAlign: 'center',
    backgroundColor: '#138911',
    color: 'white',
    '& .MuiSelect-icon': {
      color: 'white',
    },
  },
  icon: {
    marginTop: '20px',
    width: '70px',
    height: '70px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconSvg: {
    width: '100%',
    height: '100%',
  },
  price1: {
    fontFamily: '"Nexa","Arial",sans-serif!important',
    fontSize: '30px',
    color: '#265886',
  },
  price2: {
    fontFamily: '"Nexa","Arial",sans-serif!important',
    fontSize: '17px',
    color: '#265886',
  },
  dialog: {
    backgroundColor: '#ededed',
    padding: '20px 20px 10px',
    color: '#265886',
    minWidth: '400px',
  },
  dialogFont: {
    fontFamily: '"Nexa","Arial",sans-serif!important',
    fontSize: '16px',
    fontWeight: '500',
  },
  closeIcon: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    cursor: 'pointer',
    color: '#999',
  },
  noWait:{
    fontFamily: '"Nexa","Arial",sans-serif!important',
    fontSize: '17px',
    fontWeight: '500',
    color: '#265886',
    marginTop:'40px',
  },
});

const QuoteProducts = ({ classes, theme }) => {
  const quoteResponse = useSelector(state => state.quoteResponse);
  console.log("check"+ quoteResponse.status_code)

  const [isDialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/booking');
  };


  const getIcon = (type) => {
    switch (type) {
      case 'PRIV':
        return <PRIV className={classes.iconSvg} />;
      case 'BUS':
        return <BUS className={classes.iconSvg} />;
      case 'COAC':
        return <COAC className={classes.iconSvg} />;
      case 'DSHU':
        return <DSHU className={classes.iconSvg} />;
      case 'EC':
        return <EC className={classes.iconSvg} />;
      case 'ECON':
        return <ECON className={classes.iconSvg} />;
      case 'EIGHTLIM':
        return <EIGHTLIM className={classes.iconSvg} />;
      case 'EXEC':
        return <EXEC className={classes.iconSvg} />;
      case 'HELI':
        return <HELI className={classes.iconSvg} />;
      case 'LIMO':
        return <LIMO className={classes.iconSvg} />;
      case 'LSUV':
        return <LSUV className={classes.iconSvg} />;
      case 'PRIO':
        return <PRIO className={classes.iconSvg} />;
      case 'SCHD':
        return <SCHD className={classes.iconSvg} />;
      case 'SHAR':
        return <SHAR className={classes.iconSvg} />;
      case 'SHPL':
        return <SHPL className={classes.iconSvg} />;
      default:
        return null;
    }
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
            <Grid item xs={12} md={12}>
              <Typography variant="subtitle1" className={classes.subtitle}>
                <span style={{ fontWeight: 'bold' }}>Outbound:</span> {quoteResponse.basket.transfers[0].fromDestination.name} to {quoteResponse.basket.transfers[0].toDestination.name} on {quoteResponse.basket.transfers[0].date} At 
                 <span> </span>{quoteResponse.basket.transfers[0].time} for {quoteResponse.basket.transfers[0].adults} Adults
              </Typography>
            </Grid>
            
          </Grid>
        </CardContent>
      </Card>

      <Grid container spacing={2} className={`${classes.root} ${classes.spacing}`}>
        <Grid item xs={12} md={12}>
          <Typography variant="h2" className={classes.title2}>
            Choose <span className={classes.underline}>Your<span className={classes.underlineBefore}></span></span> Transfer
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <Typography variant="subtitle1" className={classes.subtitle1}>
            Free Cancellation up to 7 days prior. No hidden fees.
          </Typography>
        </Grid>
        <Grid item xs={12} md={12} className={classes.selectContainer}>
          <Select
            className={classes.select}
            value="GBP"
            variant="outlined"
          >
            <MenuItem value="GBP">GBP</MenuItem>
            <MenuItem value="USD">USD</MenuItem>
            <MenuItem value="EUR">EUR</MenuItem>
            {/* Add more currency options here */}
          </Select>
        </Grid>
      </Grid>

      {quoteResponse.basket.options.map((response, index) => (
         <div key={index}>
          <Card className={classes.spacing}>
            <CardContent>
              <Grid container spacing={2} className={classes.root}>
                <Grid item xs={12} md={5} style={{ display: 'flex', alignItems: 'center' }}>
                  <div className={classes.icon}>
                      {getIcon(response.transferTypeCode)}
                  </div>
                  <div style={{ marginLeft: '16px', marginTop: '14px' }}>
                    <Typography className={classes.title3} variant="h6" component="div">
                      {response.transferType}
                    </Typography>
                    <div
                      style={{ display: 'flex', alignItems: 'center' }}
                      className={classes.info}
                      onClick={openDialog}
                    >
                      <InfoIcon fontSize="small" />
                      <Typography
                        variant="subtitle2"
                        style={{ marginLeft: '8px', fontWeight: '540', fontSize: '14px', marginTop: '4px' }}
                      >
                        More Info...
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={12} md={5}>
                  <Typography className={classes.noWait} dangerouslySetInnerHTML={{ __html: response.description[0] }}></Typography>
                </Grid>
                <Grid item xs={12} md={2} style={{ textAlign: 'right' }}>
                  <Typography variant="h2" className={classes.price1}>
                    <strong>£{response.optionCost.totalCost}</strong>
                  </Typography>
                  <Typography variant="h5" className={classes.price2}>
                    £{response.optionCost.costPerPerson} per person
                  </Typography>
                  <Button variant="contained" className={classes.button1} onClick={handleBookNow}>
                    Book now
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Dialog open={isDialogOpen} onClose={closeDialog} fullWidth maxWidth="md">
            <div className={classes.dialog}>
              <DialogTitle disableTypography>
                <Typography variant="h6" className={classes.dialogFont}>
                  More Information
                </Typography>
                <CloseIcon className={classes.closeIcon} onClick={closeDialog} />
              </DialogTitle>
              <DialogContent>
              <Typography className={classes.dialogFont} dangerouslySetInnerHTML={{ __html: response.description[1] }}></Typography>
              <Typography className={classes.dialogFont} dangerouslySetInnerHTML={{ __html: response.description[2] }}></Typography>
              <Typography className={classes.dialogFont} dangerouslySetInnerHTML={{ __html: response.description[3] }}></Typography>
              </DialogContent>
            </div>
          </Dialog>
         </div>
      ))}
      
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(QuoteProducts);
