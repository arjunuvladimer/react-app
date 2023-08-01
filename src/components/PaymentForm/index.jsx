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
import { Card, CardContent } from '@mui/material';

import {
    PayPalButtons,
    usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import { useEffect } from "react";



// This values are the props in the UI
const amount = "2";
const style = {"layout":"vertical"};



const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#FCFDFD',
  },
  title: {
    color: '#444',
    fontSize: '22px',
    fontFamily: 'Nexa,sans-serif',
    fontWeight: '700',
    backgroundColor:'#fff',
    textAlign:'center',
    lineHeight: '1.1',
    marginBottom:'20px'
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
    left: 40,
    right: 0,
    bottom: -8,
    height: '5px',
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
  ccImg:{
    background: `url('/assets/visa-mastercard-logos.png') no-repeat center`,
    backgroundSize: '100%',
    height: '56px',
    width: '150px',
    margin: '0 auto 6px auto',
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



const PaymentForm = ({ classes, theme, currency, showSpinner }) => {

  const quoteResponse = useSelector((state) => state.quoteResponse);
  console.log(quoteResponse);


  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
      dispatch({
          type: "resetOptions",
          value: {
              ...options,
              currency: currency,
          },
      });
  }, [currency, showSpinner]);


  return (
    <div>
      <Grid container spacing={2} className={`${classes.root} ${classes.spacing}`}>
         {/* TITLE */}
        <Grid item xs={12} md={12}>
          <Typography variant="h2" className={classes.title2}>
           <span className={classes.underline}> Payment<span className={classes.underlineBefore}></span></span> 
          </Typography>
        </Grid>

        <Grid item xs={12} md={1}></Grid>
        <Grid item xs={12} md={5} sx={{ marginTop: '30px' }}>
            <Card>
              <CardContent>
                <Typography variant="h5" className={classes.title}>
                  Payment Details
                </Typography>
                <div className={classes.ccImg}></div>
                {(showSpinner && isPending) && <div className="spinner" />}
                <PayPalButtons
                  style={style}
                  disabled={false}
                  forceReRender={[amount, currency, style]}
                  fundingSource={undefined}
                  createOrder={(data, actions) => {
                    return actions.order
                      .create({
                        purchase_units: [
                          {
                            amount: {
                              currency_code: currency,
                              value: amount,
                            },
                          },
                        ],
                      })
                      .then((orderId) => {
                        // Your code here after create the order
                        return orderId;
                      });
                  }}
                  onApprove={function (data, actions) {
                    return actions.order.capture().then(function () {
                      // Your code here after capture the order
                    });
                  }}
                />
                <Typography variant='p' sx={{textAlign:'center', display:'block', color:'rgb(119, 119, 119)', fontSize:'14px', fontFamily:'Nexa,sans-serif'}}>
                  PayPal securely handle our payments. Simply select the PayPal Checkout button where you can use your debit or credit card, or you can choose to login to your PayPal account to pay for your transfer.
                </Typography>
              </CardContent>
            </Card>
        </Grid>
        {/* OUTBOUND Transfer */}
        <Grid item xs={12} md={5} sx={{marginTop:'30px'}}>
            <TableContainer component={Paper}>
                <Table  aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell colSpan={2} className={classes.title}>
                        Outbound Transfer
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
                       
                    </TableBody>
                </Table>
            </TableContainer>

            {/* RETURN TRANSFER  */}
            <TableContainer component={Paper} sx={{marginTop:'20px'}}>
                <Table  aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell colSpan={2} className={classes.title}>
                        Return Transfer
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
                                    18th July 2023
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
                       
                    </TableBody>
                </Table>
            </TableContainer>
        </Grid>

       

       
      </Grid>

       



      

    </div>
  );
};

export default withStyles(styles, { withTheme: true })(PaymentForm);
