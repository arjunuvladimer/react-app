import React from 'react';
import { withStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Card, CardContent, List, ListItem, TextField, ListItemIcon, FormControlLabel,Checkbox, Link } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from '@mui/material/Button';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from "react-router-dom";



const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#FCFDFD',
  },
  title: {
    color: '#444',
    fontSize: '24px',
    fontFamily: 'Nexa,sans-serif',
    fontWeight: '700',
    backgroundColor:'#fff',
    textAlign:'center',
    lineHeight: '1.1',
  },
  title2: {
    textAlign: 'center',
    fontSize: '1.8rem',
    fontWeight: '700',
    color: '#333',
    fontFamily: 'Nexa,sans-serif',
    lineHeight: '1.1',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: '20px',
    lineHeight: '1.1',
    fontFamily: 'Nexa,sans-serif',
    fontWeight:'500',
    color: '#265886',
    marginTop: '20px',
    backgroundColor:'#F7FBFF'
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
    left: 20,
    right: 0,
    bottom: -8,
    height: '4px',
    width: '70%',
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
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '1.75',
    letterSpacing: '0.02857em',
    minWidth: '183px',
    minHeight: '50px',
    display: 'flex',
  },
  button2:{
    backgroundColor: '#265886',
    color: 'rgb(255, 255, 255)',
    borderRadius: '6px',
    marginTop: '14px',
    padding: '0px 50px',
    fontFamily: '"Nexa","Arial",sans-serif!important',
    fontWeight: '400',
    fontSize: '16px',
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
  termsInfo: {
    color: '#265886',
    fontSize: '22px',
    marginBottom:'-5px'
  },
  luggageButton: {
    display: 'flex',
    alignItems: 'center',
  },
  luggageIcon: {
    marginRight: '5px',
  },
  tickIcon:{
    fontWeight:'bold'
  },
  terms:{
    fontSize:'16px',
    fontFamily:"Nexa,sans-serif",
    color:'#265886'
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
    marginLeft:'150px',
    marginTop:'10px'
  },
});


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14
    },
    
  }));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: "#F7FBFF",
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0
    }
}));



const TermsConditionsForm = ({ classes, theme }) => {

  const quoteResponse = useSelector((state) => state.quoteResponse);
  console.log(quoteResponse);
  const navigate = useNavigate();

 
  
  const handlePayment = () => {
    navigate('/payment');
  };


  return (
    <div>
      <Grid container spacing={2} className={`${classes.root} ${classes.spacing}`}>
        <Grid item xs={12} md={12}>
          <Typography variant="h2" className={classes.title2}>
            Your <span className={classes.underline}>Travel<span className={classes.underlineBefore}></span></span> Details
          </Typography>
        </Grid>

        {/* OUTBOUND JOURNEY */}
        <Grid item xs={12} md={6} sx={{marginTop:'15px'}}>
            <TableContainer component={Paper}>
                <Table  aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell colSpan={2} className={classes.title}>
                        Outbound Journey
                        </StyledTableCell>
                    </TableRow>
                    <TableRow>
                        <StyledTableCell colSpan={2} className={classes.subtitle}>
                        Morzine&nbsp;
                        <ChevronRightIcon style={{ fontWeight: 'bolder', verticalAlign: 'middle', marginBottom: '4px' }} />
                        &nbsp;Geneva Airport (GVA)
                        </StyledTableCell>
                    </TableRow>
                </TableHead>
                    <TableBody>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'center'}}>
                               <strong> Departing Date  </strong>
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'left'}}>
                                    7th July 2023
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'center'}}>
                               <strong> Flight Time </strong>
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'left'}}>
                                    12:00 
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'center'}}>
                               <strong> Flight No.  </strong>
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'left'}}>
                                      123
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'center'}}>
                               <strong> Adults  </strong>
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'left'}}>
                                    2
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'center'}}>
                               <strong> Children </strong>
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'left'}}>
                                    0
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'center'}}>
                               <strong> Skis/snowboards </strong>
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'left'}}>
                                    0
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'center'}}>
                               <strong> Bikes / Golf Bags </strong>
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'left'}}>
                                    0
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'center'}}>
                               <strong> Items of Hold Luggage </strong>
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'left'}}>
                                    2
                            </StyledTableCell>
                        </StyledTableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>

        {/* RETURN JOURNEY  */}

        <Grid item xs={12} md={6} sx={{marginTop:'15px'}}>
            <TableContainer component={Paper}>
                <Table  aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell colSpan={2} className={classes.title}>
                        Return Journey
                        </StyledTableCell>
                    </TableRow>
                    <TableRow>
                        <StyledTableCell colSpan={2} className={classes.subtitle}>
                        Geneva Airport (GVA)&nbsp;
                        <ChevronRightIcon style={{ fontWeight: 'bolder', verticalAlign: 'middle', marginBottom: '4px' }} />
                        &nbsp;Morzine
                        </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'center'}}>
                               <strong> Departing Date  </strong>
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'left'}}>
                                    7th July 2023
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'center'}}>
                               <strong> Flight Time </strong>
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'left'}}>
                                    12:00 
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'center'}}>
                               <strong> Flight No.  </strong>
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'left'}}>
                                      123
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'center'}}>
                               <strong> Adults  </strong>
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'left'}}>
                                    2
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'center'}}>
                               <strong> Children </strong>
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'left'}}>
                                    0
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'center'}}>
                               <strong> Skis/snowboards </strong>
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'left'}}>
                                    0
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'center'}}>
                               <strong> Bikes / Golf Bags </strong>
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'left'}}>
                                    0
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'center'}}>
                               <strong> Items of Hold Luggage </strong>
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'left'}}>
                                    2
                            </StyledTableCell>
                        </StyledTableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
       
        {/* OUTBOUND TRANSFER TYPE */}
        <Grid item xs={12} md={6} sx={{marginTop:'15px'}}>
          <Card style={{backgroundColor:'#F4FAFA', color:'#265886'}}>
            <CardContent>
              <Typography variant="h5" component="h2" sx={{textAlign:'center', fontSize:'24px'}}>
                Transfer type: <strong>Private</strong>
              </Typography>
              <List style={{fontSize:'14px', fontFamily:'Nexa,sans-serif'}}>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon style={{strokeWidth:'1'}} />
                  </ListItemIcon>
                  A direct door to door service (where accommodation can be accessed by road).
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon />
                  </ListItemIcon>
                  <strong>A vehicle just for you or your group – no sharing with, or waiting for other passengers.</strong>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon />
                  </ListItemIcon>
                  Departure pick up time tailored to your flight time, so no early departs, or wasted time at the airport, due to other people’s flights.
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon />
                  </ListItemIcon>
                  You can specify your own pick up time for the return leg of your journey when booking if you prefer.
                </ListItem>
              </List>
              <div style={{display:'flex', justifyContent:'center'}}>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ mt: 3, mb: 2}}
                                className={classes.button1}
                                style={{display:'flex', justifyContent:'center' }}
                                >
                                EXPAND FOR MORE INFO
                            </Button>
              </div>
            </CardContent>
          </Card>
        </Grid>

        {/* RETURN TRANSFER TYPE */}
        <Grid item xs={12} md={6} sx={{marginTop:'15px'}}>
          <Card style={{backgroundColor:'#F4FAFA', color:'#265886'}}>
            <CardContent>
              <Typography variant="h5" component="h2" sx={{textAlign:'center', fontSize:'24px'}}>
                Transfer type: <strong>Private</strong>
              </Typography>
              <List style={{fontSize:'14px', fontFamily:'Nexa,sans-serif'}}>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon style={{strokeWidth:'1'}} />
                  </ListItemIcon>
                  A direct door to door service (where accommodation can be accessed by road).
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon />
                  </ListItemIcon>
                  <strong>A vehicle just for you or your group – no sharing with, or waiting for other passengers.</strong>
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon />
                  </ListItemIcon>
                  Departure pick up time tailored to your flight time, so no early departs, or wasted time at the airport, due to other people’s flights.
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircleIcon />
                  </ListItemIcon>
                  You can specify your own pick up time for the return leg of your journey when booking if you prefer.
                </ListItem>
              </List>
              <div style={{display:'flex', justifyContent:'center'}}>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ mt: 3, mb: 2}}
                                className={classes.button1}
                                style={{display:'flex', justifyContent:'center' }}
                                >
                                EXPAND FOR MORE INFO
                            </Button>
              </div>
            </CardContent>
          </Card>
        </Grid>

        {/* YOUR DETAILS OUTBOUND */}
        <Grid item xs={12} md={6} sx={{marginTop:'15px'}}>
            <TableContainer component={Paper}>
                <Table  aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell colSpan={2} className={classes.title}>
                           Your Details: Outbound
                        </StyledTableCell>
                    </TableRow>
                    
                </TableHead>
                    <TableBody>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row"  style={{display:'flex',justifyContent:'center'}}>
                               <strong> First Name  </strong>
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'left'}}>
                                    Nagarjuna Naidu
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow >
                            <StyledTableCell component="th" scope="row"  style={{display:'flex',justifyContent:'center'}}>
                               <strong> Last Name  </strong>
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'left'}}>
                                    Sake
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row"  style={{display:'flex',justifyContent:'center'}}>
                               <strong> Email  </strong>
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'left'}}>
                                   arjunuvald@gmail.com
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row"  style={{display:'flex',justifyContent:'center'}}>
                               <strong> Phone  </strong>
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'left'}}>
                                    +449876543214
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row"  style={{display:'flex',justifyContent:'center'}}>
                               <strong> Accomodation Name  </strong>
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'left'}}>
                                    New Castle, 2679
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row"  style={{display:'flex',justifyContent:'center'}}>
                               <strong> Accomodation Address  </strong>
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'left'}}>
                                    Bay Area
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row"  style={{display:'flex',justifyContent:'center'}}>
                               <strong> Special Requirements </strong>
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'left'}}>
                                   Need an extra child seat
                            </StyledTableCell>
                        </StyledTableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>
        
          {/* YOUR DETAILS RETURN */}
          <Grid item xs={12} md={6} sx={{marginTop:'15px'}}>
            <TableContainer component={Paper}>
                <Table  aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell colSpan={2} className={classes.title}>
                           Your Details: Return
                        </StyledTableCell>
                    </TableRow>
                    
                </TableHead>
                  <TableBody>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row"  style={{display:'flex',justifyContent:'center'}}>
                               <strong> First Name  </strong>
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'left'}}>
                                    Nagarjuna Naidu
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow >
                            <StyledTableCell component="th" scope="row"  style={{display:'flex',justifyContent:'center'}}>
                               <strong> Last Name  </strong>
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'left'}}>
                                    Sake
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row"  style={{display:'flex',justifyContent:'center'}}>
                               <strong> Email  </strong>
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'left'}}>
                                   arjunuvald@gmail.com
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row"  style={{display:'flex',justifyContent:'center'}}>
                               <strong> Phone  </strong>
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'left'}}>
                                    +449876543214
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row"  style={{display:'flex',justifyContent:'center'}}>
                               <strong> Accomodation Name  </strong>
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'left'}}>
                                    New Castle, 2679
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row"  style={{display:'flex',justifyContent:'center'}}>
                               <strong> Accomodation Address  </strong>
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'left'}}>
                                    Bay Area
                            </StyledTableCell>
                        </StyledTableRow>
                        <StyledTableRow>
                            <StyledTableCell component="th" scope="row"  style={{display:'flex',justifyContent:'center'}}>
                               <strong> Special Requirements </strong>
                            </StyledTableCell>
                            <StyledTableCell component="th" scope="row"  style={{textAlign:'left'}}>
                                   Need an extra child seat
                            </StyledTableCell>
                        </StyledTableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>

        {/* Confirmation Card */}
       <Grid item xs={12} md={12}>
        <Card className={classes.terms}>
          <CardContent>
            <Typography variant="body1" sx={{ textAlign: 'left' }}>
              <InfoIcon className={classes.termsInfo}/> Confirmation of pick up time is sent to you by email and SMS by 17:00 (CET) the day prior to each journey.
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'left', marginTop: '20px' }}>
              Please ensure you have read and understand our Terms & Conditions, which contain more detailed information, including about Luggage Allowance, Child Seats, waiting times in case of flights landing earlier or later than scheduled and the general Conditions of Carriage. If you have any questions, please don’t hesitate to ask us.
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'left', marginTop: '20px' }}>
              Please make sure you check your junk folder for emails and add us to your safe senders list.
            </Typography>

            
            {/* Checkboxes */}
            <Grid item xs={12} md={12} sx={{ marginTop: '10px', marginLeft:'70px', color:'grey'}}>
              <Grid container alignItems="center" spacing={2}>
                <Grid item>
                  <FormControlLabel
                    control={<Checkbox />}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    I accept the rules of the transfer types and confirm that my booking details are correct
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} sx={{ marginTop: '10px', marginLeft:'70px', color:'grey'}}>
              <Grid container alignItems="center" spacing={2}>
                <Grid item>
                  <FormControlLabel
                    control={<Checkbox />}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    I accept the Ski-Lifts <Link href="#" underline="none">Booking Conditions</Link>, <Link href="#"  underline="none">Website Terms of Use</Link> and <Link href="#"  underline="none">Privacy Policy</Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={12} sx={{ marginTop: '10px', marginLeft:'70px', color:'grey'}}>
              <Grid container alignItems="center" spacing={2}>
                <Grid item>
                  <FormControlLabel
                    control={<Checkbox />}
                  />
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    I'm happy for Ski-Lifts or Sea-Lifts to send the occasional email to the Lead Passenger email address
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Grid item xs={12} md={12} style={{ textAlign: 'left', marginTop:'20px' }}>
                  <Typography variant="h2" className={classes.price1}>
                    <strong>Your Total: £485.27</strong>
                  </Typography>
                  <Typography variant="h5" className={classes.price2}>
                    £242.64 per person
                  </Typography>
        </Grid>

        <Grid item xs={12} md={12} style={{marginTop:'20px'}}>
          <Card style={{backgroundColor:'#E7F3FD'}}>
            <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    className={classes.button1}
                    onClick={handlePayment}
                    fullWidth
                  >
                    Proceed to Payment
                  </Button>
                </div>
               
               {/* Apply Code */}
                <Grid container spacing={2} alignItems="center">

                  <Grid item xs={12} md={6}>
                    <TextField sx={{backgroundColor:'white'}} label="Enter Code" fullWidth />
                  </Grid>

                  <Grid item xs={12} md={6}>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                      className={classes.button2}
                      fullWidth
                    >
                      Apply Code
                    </Button>
                  </Grid>

                  </Grid>

              </Grid>

              {/* Loyality Points */}
              <Grid item xs={12} md={6} style={{marginTop:'15px'}}>
                 <Card>
                      <CardContent style={{marginTop:'20px', textAlign:'center', color:'#265886'}}>
                            <Typography variant="h5" component="div">
                                Existing customer loyalty points
                            </Typography>
                            <Typography  color="text.secondary" style={{marginTop:'13px'}}>
                                You do not have existing loyalty points with Ski-Lifts
                            </Typography>
                      </CardContent>
                  </Card>
              </Grid>
             </Grid>
            </CardContent>
          </Card>
        </Grid>
       </Grid>
      </Grid>

       



      

    </div>
  );
};

export default withStyles(styles, { withTheme: true })(TermsConditionsForm);
