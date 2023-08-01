import { Grid, Typography, Box } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import QuoteGeneratorForm from "../../components/QuoteGeneratorForm";

const SiteLayout = styled(Grid)(({ theme }) => ({
  background: `url('/assets/Skiing-Image-QQF.jpg')`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: '0 16px',
  [theme.breakpoints.up("sm")]: {
    padding: '0 32px',
  },
  [theme.breakpoints.up("md")]: {
    padding: '0 64px',
  },
  [theme.breakpoints.up("lg")]: {
    padding: '0 100px',
  },
}));


const BookingTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  lineHeight: "0.0",
  fontFamily: '"Nexa", "Arial", sans-serif',
  display: "block",
  margin: "0.47em 0",
  color: "#fff",
  padding: "32px",
  boxSizing: "inherit",
  fontSize: "30px",
  fontWeight: '300',
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
    padding: "16px",
  },
  [theme.breakpoints.down("xs")]: {
    fontSize: "16px",
    padding: "8px",
  },
  wordBreak: "break-word",
}));


const SiteLayoutContent = styled(Box)(({ theme }) => ({
  padding: "24px",
  margin: "16px 0",
  minHeight: "222px",
  background: "#fff",
  borderRadius: "10px",
  display: "block",
}));

export default function QuoteGenerator() {
  return (
    <SiteLayout container>
      <Grid item xs={12}>
        <BookingTitle variant="h1">
          Airport Transfers to Ski Resorts
        </BookingTitle>
      </Grid>
      <Grid item xs={12}>
        <SiteLayoutContent>
          <QuoteGeneratorForm />
        </SiteLayoutContent>
      </Grid>
    </SiteLayout>
  );
}
