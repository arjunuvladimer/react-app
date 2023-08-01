import QuoteGenerator from "./containers/QuoteGenerator";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from "./containers/Products";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './redux';
import BookingJourney from "./containers/BookingJourney";
import React  from 'react';
import TermsConditions from "./containers/TermsConditions";
import Payment from "./containers/Payment";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";


const theme = createTheme({
  typography: {
    fontFamily: '"Nexa", "Arial", sans-serif',
  },
});

function App() {
  
  

  return (
    <Provider store={store}>
      <PayPalScriptProvider options={{ "client-id": "AR77J9ad_W6Jndz89AujZQhFBNe15SIRivydhzTGdXrkoXhoLPtQcWk_DMIE6htUlAjfdMx_BCgSwV2w" }}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<QuoteGenerator />} />
            <Route path="/quote" element={<Products />} />
            <Route path="/booking" element={<BookingJourney />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </Router>
      </ThemeProvider>
      </PayPalScriptProvider>
    </Provider>
  );
}

export default App;
