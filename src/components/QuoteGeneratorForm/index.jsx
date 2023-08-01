import * as React from 'react';
import { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { setQuoteResponse } from '../../redux/actions';
import {
  Typography,
  TextField,
  Button,
  Popover,
  MenuItem,
  ListItemIcon,
  DialogTitle,
  DialogContent,
  Paper,
  CircularProgress,
  IconButton,
} from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BoyIcon from '@mui/icons-material/Boy';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import FlightIcon from '@mui/icons-material/Flight';
import BusinessIcon from '@mui/icons-material/Business';
import TrainIcon from '@mui/icons-material/Train';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import Link from '@mui/material/Link';
import { Link as RouterLink, useNavigate } from 'react-router-dom'; // Add these imports


const QuoteGeneratorForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [selectedOption, setSelectedOption] = React.useState({
    label: 'Journey Type',
    value: 'Return',
  });
  const [pickupValue, setPickupValue] = React.useState(null);
  const [pickupOptions, setPickupOptions] = React.useState([]);
  const [dropoffValue, setDropoffValue] = React.useState(null);
  const [dropoffOptions, setDropoffOptions] = React.useState([]);
  const [loading, setLoading] = React.useState(true); // Loading state
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElPassengers, setAnchorElPassengers] = React.useState(null); // Separate anchorEl for Passengers popover
  const [adultsCount, setAdultsCount] = React.useState(1);
  const [childrenCount, setChildrenCount] = React.useState(0);
  const [infantsCount, setInfantsCount] = React.useState(0);

  const [outboundDate, setOutboundDate] = React.useState(null);
  const [outboundTime, setOutboundTime] = React.useState(null);
  const preventDefault = (event) => event.preventDefault();

  useEffect(() => {
    fetch('https://transfers.ski-lifts.com/api/destination/getDestinations')
      .then((response) => response.json())
      .then((data) => {
        // Map the data to the required format
        const mappedOptions = data.map((item) => ({
          label: item.destination,
          subtitle: item.country,
          value: item.IATA_code,
          type: item.destination_type_code,
          id: item.id,
        }));
        setPickupOptions(mappedOptions);
        setLoading(false); // Set loading state to false after data is fetched
      })
      .catch((error) => {
        console.log('Error fetching pickup options:', error);
        setLoading(false); // Set loading state to false if there's an error
      });
  }, []);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClosePassengers = () => {
    setAnchorElPassengers(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickPassengers = (event) => {
    setAnchorElPassengers(event.currentTarget);
  };

  const handleMenuItemClick = (option) => {
    setSelectedOption(option);
    handleClose();
  };

  const handlePickupChange = (event, value) => {
    setPickupValue(value);
    setDropoffValue(null);
    setDropoffOptions([]);
    if (value) {
      fetchDropoffOptions(value.value);
    }
  };

  const handleDropoffChange = (event, value) => {
    setDropoffValue(value);
  };

  const handleDropoffInputChange = (event, newInputValue) => {
    if (newInputValue) {
      fetchDropoffOptions(newInputValue);
    } else {
      setDropoffOptions([]);
    }
  };

  const fetchDropoffOptions = (pickupValue) => {
    const formData = new FormData();
    formData.append('filter', pickupValue);
    formData.append('company_id', 1); // Update with the desired company_id value

    fetch('https://transfers.ski-lifts.com/api/destination/searchDestinations', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const mappedOptions = data.map((item) => ({
            label: item.destination,
            subtitle: item.country,
            value: item.id,
            type: item.type,
            id: item.id
          }));
          setDropoffOptions(mappedOptions);
        } else {
          console.log('Invalid drop-off options data:', data);
        }
      })
      .catch((error) => {
        console.log('Error fetching drop-off options:', error);
      });
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const getIcon = (type) => {
    switch (type) {
      case 'AIR':
        return <FlightIcon style={{ color: '#9a9a9a', marginRight: '8px' }} />;
      case 'RES':
        return <BusinessIcon style={{ color: '#9a9a9a', marginRight: '8px' }} />;
      case 'TRBU':
        return <TrainIcon style={{ color: '#9a9a9a', marginRight: '8px' }} />;
      case 'GOLF':
        return <GolfCourseIcon style={{ color: '#9a9a9a', marginRight: '8px' }} />;
      default:
        return null;
    }
  };

  const getIconColor = (option) => {
    return selectedOption.value === option ? '#242529' : '#9a9a9a';
  };

  const loadingAdornment = useMemo(() => {
    return loading ? <CircularProgress color="inherit" size={20} /> : null;
  }, [loading]);

  const handleSwap = () => {
    const tempPickup = pickupValue;
    const tempDropoff = dropoffValue;
    setPickupValue(tempDropoff);
    setDropoffValue(tempPickup);
    setPickupOptions(dropoffOptions);
    setDropoffOptions(pickupOptions);
  };

  const isOptionEqualToValue = (option, value) => option.value === value.value;

  const handleDecreaseAdults = () => {
    setAdultsCount((prevCount) => Math.max(prevCount - 1, 1));
  };

  const handleIncreaseAdults = () => {
    setAdultsCount((prevCount) => prevCount + 1);
  };

  const handleDecreaseChildren = () => {
    setChildrenCount((prevCount) => Math.max(prevCount - 1, 0));
  };

  const handleIncreaseChildren = () => {
    setChildrenCount((prevCount) => prevCount + 1);
  };

  const handleDecreaseInfants = () => {
    setInfantsCount((prevCount) => Math.max(prevCount - 1, 0));
  };

  const handleIncreaseInfants = () => {
    setInfantsCount((prevCount) => prevCount + 1);
  };

  const handleOutboundDateTimeChange = (dateTime) => {
    const formattedDate = dateTime.format('YYYY-MM-DD');
    const formattedTime = dateTime.format('HH:mm');
  
    setOutboundDate(formattedDate);
    setOutboundTime(formattedTime);
  };
  

  const handleGetQuote = () => {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE2Njg3ODI5NzEsImV4cCI6MTgyNjQ2Mjk3MSwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoidGVzdC5nb2xmZHJpdmVzLmNsaWVudC51c2VyIn0.Jbr8q4-PElc8CT64VOSrDKgihOA4qqhSR1Sl-75aWGokOeNViJJ-n6Q5BT-JrO6Ew3CqBdw72EzDhhsgj3gfTg4VPpTHCb5WTPElQfAA90EGKnK_ABW5XHcr_Fnfus8Y-DUzd1wpCy7GvOFO1-_tnRBTWC5CwKxKn_3eDNiU_KzoVekMfUkD1Y3ZMmdIXCesXRdxRcRmgymd7U1tR8QPGujHRjiGoaCN3WkNzHwUGkkBngX1UKyTWsZPVwkbpcW-jnSFFB9SGffjYDhFuc24BQwi2RuG5To8liF_LUK6UjwYtOrtDQ7oZWGvA5fb1HSiBVBjF69CF9JOJnfathSBFw',
      'Accept-Version': '2'
    };

  console.log("check3")
  console.log(pickupValue.id)
  console.log(dropoffValue.id)
  console.log(outboundDate)
  console.log(outboundTime)
  console.log(adultsCount)
  console.log("end check")
   
    const quoteData = `[
      {
        "from_destination": "${pickupValue.id}",
        "to_destination": "${dropoffValue.id}",
        "travel_date": "${outboundDate}",
        "pickup_time": "${outboundTime}",
        "adults": ${adultsCount}
      }
  ]`

  
    fetch('https://api-proxy.qa.lifts.to/api/booking/quote', {
      method: 'POST',
      headers: headers,
      body: quoteData,
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(setQuoteResponse(data.data));
        console.log("check 1")
        navigate('/quote');
      })
      .catch((error) => {
        console.log('Error fetching quote:', error);
        console.log('Full error object:', error.response);
      });
  };
  
  
  
  

 
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={3}>
            <Button
              onClick={handleClick}
              aria-describedby={id}
              variant="contained"
              style={{
                backgroundColor: '#fff',
                color: '#242529',
                display: 'flex',
                alignItems: 'center',
                border: '1px solid #cccccc',
                width: '100%',
                height: '57px',
                borderRadius: '6px',
                textTransform: 'none',
                textAlign: 'left',
                marginTop: '12px',
              }}
            >
              <ListItemIcon
                style={{
                  fontSize: '40px',
                  color: 'rgb(154, 154, 154)',
                  display: 'inline-block',
                }}
              >
                {selectedOption.value === 'Return' ? (
                  <SwapHorizIcon style={{fontSize:'30px'}} onClick={handleSwap} />
                ) : (
                  <ArrowRightAltIcon style={{fontSize:'30px'}} onClick={handleSwap} />
                )}
              </ListItemIcon>
              <div style={{ width: '100%' }}>
                <Typography variant="body1">
                  <span
                    style={{
                      color: '#9a9a9a',
                      display: 'block',
                      fontSize: '0.75em',
                      marginTop: '4px',
                      fontWeight: 'normal',
                      lineHeight: '0.7',
                      fontFamily: '"Nexa", Arial, sans-serif',
                    }}
                  >
                    {selectedOption ? selectedOption.label : 'Open Dropdown'}
                  </span>
                  <span
                    style={{
                      fontFamily: '"Nexa", Arial, sans-serif',
                      fontWeight: 'bold',
                      fontSize: '1em',
                    }}
                  >
                    {selectedOption ? selectedOption.value : ''}
                  </span>
                </Typography>
              </div>
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <Paper>
                <DialogTitle>Booking Type</DialogTitle>
                <DialogContent>
                  <MenuItem
                    selected={selectedOption.value === 'One Way'}
                    onClick={() =>
                      handleMenuItemClick({
                        label: 'Journey Type',
                        value: 'One Way',
                      })
                    }
                  >
                    <ListItemIcon>
                      <ArrowRightAltIcon
                        style={{ fontSize:'30px', color: getIconColor('One Way') }}
                      />
                    </ListItemIcon>
                    One Way
                  </MenuItem>
                  <MenuItem
                    selected={selectedOption.value === 'Return'}
                    onClick={() =>
                      handleMenuItemClick({
                        label: 'Journey Type',
                        value: 'Return',
                      })
                    }
                  >
                    <ListItemIcon>
                      <SwapHorizIcon
                        style={{ fontSize:'30px', color: getIconColor('Return') }}
                      />
                    </ListItemIcon>
                    Return
                  </MenuItem>
                </DialogContent>
              </Paper>
            </Popover>
          </Grid>
          <Grid item xs={12} md={4}>
            <Autocomplete
              value={pickupValue}
              onChange={handlePickupChange}
              options={pickupOptions}
              getOptionLabel={(option) => option.label}
              renderOption={(props, option) => (
                <li {...props} style={{ display: 'flex', alignItems: 'center' }}>
                  {getIcon(option.type)}
                  <div>
                    <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                      {option.label}
                    </Typography>
                    <Typography variant="body2" style={{ color: '#9a9a9a' }}>
                      {option.subtitle}
                    </Typography>
                  </div>
                </li>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Pickup"
                  variant="outlined"
                  margin="normal"
                  placeholder="Search..."
                  style={{
                    height: '50px',
                    borderRadius: '6px',
                    fontSize: '1em',
                    fontFamily: '"Nexa", Arial, sans-serif',
                  }}
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <ListItemIcon>
                        <LocationOnIcon style={{ color: '#9a9a9a' }} />
                      </ListItemIcon>
                    ),
                    endAdornment: (
                      <React.Fragment>
                        {loadingAdornment}
                        {params.InputProps.endAdornment}
                      </React.Fragment>
                    ),
                  }}
                />
              )}
              isOptionEqualToValue={isOptionEqualToValue}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={1}
            sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
          >
            <div
              style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: '#0099cc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
              onClick={handleSwap}
            >
              <SwapHorizIcon 
                style={{ 
                  color: 'white', 
                  fontSize:'37px',
                  width: '1em',
                  height: '1em',
                  display: 'inline-block',
                  transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
                  flexShrink: '0',
                  userSelect: 'none',
                  verticalAlign: 'middle', 
                  fontFamily: '"Nexa", Arial, sans-serif',
                  fontWeight:'800'
                }} 
              />
            </div>
          </Grid>
          <Grid item xs={12} md={4}>
            <Autocomplete
              value={dropoffValue}
              onChange={handleDropoffChange}
              onInputChange={handleDropoffInputChange}
              options={dropoffOptions}
              getOptionLabel={(option) => option.label}
              renderOption={(props, option) => (
                <li {...props} style={{ display: 'flex', alignItems: 'center' }}>
                  {getIcon(option.type)}
                  <div>
                    <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                      {option.label}
                    </Typography>
                    <Typography variant="body2" style={{ color: '#9a9a9a' }}>
                      {option.subtitle}
                    </Typography>
                  </div>
                </li>
              )}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Drop off"
                  variant="outlined"
                  margin="normal"
                  placeholder="Search..."
                  style={{
                    height: '50px',
                    borderRadius: '6px',
                    fontSize: '1em',
                    fontFamily: '"Nexa", Arial, sans-serif',
                  }}
                  InputProps={{
                    ...params.InputProps,
                    startAdornment: (
                      <ListItemIcon>
                        <LocationOnIcon style={{ color: '#9a9a9a' }} />
                      </ListItemIcon>
                    ),
                  }}
                />
              )}
              isOptionEqualToValue={isOptionEqualToValue}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DateTimePicker
                label="Outbound Date"
                slotProps={{ textField: { fullWidth: true } }}
                defaultValue={dayjs().add(4, 'day')}
                onChange={handleOutboundDateTimeChange}
                renderInput={(props) => (
                  <TextField
                    {...props}
                    InputProps={{
                      ...props.InputProps,
                      startAdornment: (
                        <ListItemIcon>
                          <CalendarTodayIcon />
                        </ListItemIcon>
                      ),
                    }}
                  />
                )}
                ampm={false} // 24 hour clock
              />
            </LocalizationProvider>
          </Grid>
          
          {selectedOption.value !== 'One Way' && (
            <Grid item xs={12} md={5}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="Return Date"
                  slotProps={{ textField: { fullWidth: true } }}
                  defaultValue={dayjs().add(5, 'day')}
                  renderInput={(props) => (
                    <TextField
                      {...props}
                      InputProps={{
                        ...props.InputProps,
                        startAdornment: (
                          <ListItemIcon>
                            <CalendarTodayIcon />
                          </ListItemIcon>
                        ),
                      }}
                    />
                  )}
                  ampm={false} // 24 hour clock
                />
              </LocalizationProvider>
            </Grid>
          )}

          {/* Passengers Button */}
          <Grid item xs={12} md={2}>
            <Button
              onClick={handleClickPassengers}
              aria-describedby={id}
              variant="contained"
              style={{
                backgroundColor: '#fff',
                color: '#242529',
                display: 'flex',
                alignItems: 'center',
                border: '1px solid #cccccc',
                width: '100%',
                height: '57px',
                borderRadius: '6px',
                textTransform: 'none',
                textAlign: 'left',
              }}
            >
              <ListItemIcon
                style={{
                  fontSize: '40px',
                  color: 'rgb(154, 154, 154)',
                  display: 'inline-block',
                }}
              >
                <BoyIcon />
              </ListItemIcon>
              <div style={{ width: '100%' }}>
                <Typography variant="body1">
                  <span
                    style={{
                      color: '#9a9a9a',
                      display: 'block',
                      fontSize: '0.75em',
                      fontWeight: 'normal',
                      lineHeight: '0.7',
                      fontFamily: '"Nexa", Arial, sans-serif',
                    }}
                  >
                    Passengers
                  </span>
                  <span
                    style={{
                      fontFamily: '"Nexa", Arial, sans-serif',
                      fontWeight: 'bold',
                      fontSize: '1em',
                    }}
                  >
                    {adultsCount + childrenCount}{' '}
                    {infantsCount > 0 && `(+ ${infantsCount} infant${infantsCount > 1 ? 's' : ''})`}
                  </span>
                </Typography>
              </div>
            </Button>
            <Popover
              id={id}
              open={Boolean(anchorElPassengers)}
              anchorEl={anchorElPassengers}
              onClose={handleClosePassengers}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              <Paper>
                <DialogTitle>Passengers</DialogTitle>
                <DialogContent>
                  <Typography variant="body1" style={{ fontWeight: 'bold' }}>
                    Adults
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton
                      onClick={handleDecreaseAdults}
                      style={{ marginRight: '8px' }}
                      disabled={adultsCount === 1}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography variant="body1">{adultsCount}</Typography>
                    <IconButton onClick={handleIncreaseAdults} style={{ marginLeft: '8px' }}>
                      <AddIcon />
                    </IconButton>
                  </Box>
                  <Typography variant="body1" style={{ fontWeight: 'bold', marginTop: '16px' }}>
                    Children
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton
                      onClick={handleDecreaseChildren}
                      style={{ marginRight: '8px' }}
                      disabled={childrenCount === 0}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography variant="body1">{childrenCount}</Typography>
                    <IconButton onClick={handleIncreaseChildren} style={{ marginLeft: '8px' }}>
                      <AddIcon />
                    </IconButton>
                  </Box>
                  <Typography variant="body1" style={{ fontWeight: 'bold', marginTop: '16px' }}>
                    Infants
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton
                      onClick={handleDecreaseInfants}
                      style={{ marginRight: '8px' }}
                      disabled={infantsCount === 0}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography variant="body1">{infantsCount}</Typography>
                    <IconButton onClick={handleIncreaseInfants} style={{ marginLeft: '8px' }}>
                      <AddIcon />
                    </IconButton>
                  </Box>
                </DialogContent>
              </Paper>
            </Popover>
          </Grid>


          <Grid item xs={12} md={10} sx={{ textAlign: 'left' }}>
            <Box
              sx={{
                typography: 'body2',
                '& > :not(style) + :not(style)': {
                  ml: 2,
                },
                fontSize:'1.1428571428571428rem',
                fontWeight: '400',
                lineHeight: '1',
                fontFamily:'"Nexa","Arial",sans-serif!important',
                color:'#265885',
                textDecoration:'none',
                display: 'block',
                marginBlockStart: '1em',
                marginBlockEnd: '1em',
                marginInlineStart: '0px',
                marginInlineEnd: '0px'
              }}
              onClick={preventDefault}
            >
             <Link href="#" style={{ textDecoration: 'none' ,  color: '#265885',}} className="link">
                Can’t find what you are looking for? <span style={{fontWeight:'bold'}}>Get in touch</span>
              </Link>

              
            </Box>
          </Grid>    
          <Grid item xs={12} md={2} sx={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              style={{
                backgroundColor:'rgb(17, 137, 17)',
                color: 'rgb(255, 255, 255)',
                width: '150px',
                height: '40px',
                borderRadius: '6px',
                textTransform: 'none',
                marginTop: '24px',
                padding: '0px 50px',
                fontFamily: '"Nexa","Arial",sans-serif!important',
                fontWeight: 'bold',
                fontSize: '1rem',
                lineHeight: '1.75',
                letterSpacing: '0.02857em',
                minWidth: '183px',
                minHeight: '50px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#265885';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgb(17, 137, 17)';
              }}
              onClick={handleGetQuote}
              fullWidth
            >
              <SearchIcon />
              Search
            </Button>
          </Grid>
        </Grid>
      </Box>
           
    </div>
  );
}


export default QuoteGeneratorForm
