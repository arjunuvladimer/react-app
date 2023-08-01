import React from 'react';
import { withStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#FCFDFD',
  },
  title: {
    textAlign: 'center',
    color: '#444',
    fontSize: '18px',
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
    textAlign: 'center',
    color: '#444',
    fontSize:'26px',
    fontFamily: 'Nexa,sans-serif',
    fontWeight: 'bold',
  },
  subtitle: {
    textAlign: 'left',
    font: '14px arial,serif',
    fontFamily: 'Nexa,sans-serif',
    color: '#444',
    marginTop: '20px',
  },
  button1: {
    backgroundColor: 'rgb(17, 137, 17)',
    color: 'rgb(255, 255, 255)',
    borderRadius: '6px',
    marginTop: '28px',
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
  spacing: {
    marginTop: '16px',
  },
});


const Login = ({ classes }) => {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
  };

  const handleContinueAsGuest = () => {
    navigate('/terms');
  };
  

  return (
    <div>
      <Grid container spacing={2} className={`${classes.root} ${classes.spacing}`} style={{ textAlign: 'center'}}>
        <Grid item xs={12} md={6} >
          <Typography variant="h2" className={`${classes.title2} ${classes.spacing}`}>
            New to Ski Lifts?
          </Typography>
          <Typography variant="h2" className={`${classes.title3} ${classes.spacing}`}>
            Please continue as a Guest
          </Typography>
          <Typography variant="p" className={`${classes.subtitle}`}>
            Don’t forget to create a Ski-Lifts account when you've finished booking to start earning loyalty points
          </Typography>
          <div style={{display:'flex', justifyContent:'center'}}>
            <Button
                type="submit"
                variant="contained"
                sx={{ mt: 3, mb: 2}}
                className={classes.button1}
                style={{display:'flex', justifyContent:'center' }}
                onClick={handleContinueAsGuest}
                >
                CONTINUE
            </Button>
          </div>
        </Grid>

        {/* SIGNIN */}
        
        <Grid item xs={12} md={6} >
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                    >
                    
                    <Typography variant="h2" className={`${classes.title2} ${classes.spacing}`}>
                       Returning Customer?
                    </Typography>
                    <Typography variant="h3" className={`${classes.title} ${classes.spacing}`}>
                        Login to use your loyalty points.
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        />
                        <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        />
                       
                        <div style={{display:'flex', justifyContent:'center'}}>
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ mt: 3, mb: 2}}
                                className={classes.button1}
                                style={{display:'flex', justifyContent:'center' }}
                                >
                                SIGN IN
                            </Button>
                        </div>
                        <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                <strong>Forgot Password?</strong>
                            </Link>
                        </Grid>
                  </Grid>
                </Box>
            </Box>
         </Container>
        </Grid>
      </Grid>
      
          
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(Login);
