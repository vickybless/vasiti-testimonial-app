import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { Grid, Link, Typography, CardMedia } from "@mui/material";
import SectionOne from "./Section1";
import SectionTwo from "./Section2";

const menu = ["About us", "Stories", "Contact", "Log in"];
const submenu = [
  "Marketplace",
  "Wholesale Center",
  "Seller Center",
  "Services",
  "Internships",
  "Events",
];

const Main = () => {
  return (
    <Box>
      <Container
        maxWidth='lg'
        sx={{ paddingTop: "20px", paddingBottom: "20px" }}
      >
        <Grid container spacing={{ sm: 2 }}>
          <Grid item xs={12} sm={3}>
            <img src='/img/logo.png' alt='Logo' />
          </Grid>
          <Grid
            item
            sm={9}
            sx={{
              display: { xs: "none", sm: "flex" },
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            {menu.map((x) => (
              <Link
                underline='hover'
                href='/'
                color='#242120'
                fontSize='13px'
                textTransform='uppercase'
                sx={{
                  marginLeft: { xs: "20px", md: "40px" },
                }}
              >
                {x}
              </Link>
            ))}
            <Button
              variant='contained'
              sx={{
                textTransform: "uppercase",
                backgroundColor: "#FF5C00",
                marginLeft: "13px",
              }}
            >
              Sign up
            </Button>
          </Grid>
        </Grid>
      </Container>

      <Container
        disableGutters
        maxWidth={false}
        sx={{
          display: { xs: "none", sm: "flex" },
          borderTop: "1px solid rgba(0, 0, 0, 0.08)",
          borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
          boxShadow: "1px 4px 4px rgba(0, 0, 0, 0.04)",
          padding: "17px 0",
        }}
      >
        <Grid container spacing={{ sm: 2, md: 3 }} justifyContent='center'>
          {submenu.map((a) => (
            <Grid item>
              <Link
                underline='hover'
                color='#242120'
                href='/'
                fontSize='13px'
                textTransform='uppercase'
              >
                {a}
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>

      <SectionOne />
      <SectionTwo />
    </Box>
  );
};
export default Main;
