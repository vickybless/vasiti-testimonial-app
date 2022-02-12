import * as React from "react";
import Container from "@mui/material/Container";
import {
  Grid,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Stack,
} from "@mui/material";
import FooterSpan from "./FooterSpan";

const Footer = () => {
  return (
    <Container
      maxWidth='false'
      sx={{ background: "#25201D;", color: "white", fontFamily: "Inter" }}
    >
      <Container maxWidth='lg'>
        <Grid
          container
          width='200'
          sx={{ flexDirection: { xs: "column-reverse", sm: "row" } }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              backgroundImage: "url(/img/picture6.png)",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "top center",
              marginTop: { xs: "0px", sm: "-50px" },
              minHeight: { xs: "260px", sm: "460px" },
            }}
          ></Grid>
          <Grid item xs={12} sm={6}>
            <Stack sx={{ maxWidth: "452px", margin: "auto" }}>
              <Typography
                variant='h4'
                component='div'
                fontWeight='bold'
                sx={{
                  fontFamily: "Inter",
                  paddingTop: { xs: "60px", sm: "125px" },
                }}
              >
                Be a member of our community
              </Typography>

              <Stack>
                <Typography
                  variant='p'
                  fontWeight='normal'
                  sx={{
                    fontFamily: "Roboto",
                  }}
                >
                  We’d make sure you’re always first to know what’s happening on
                  Vasiti—thus, the world.
                </Typography>
                <TextField
                  placeholder='Enter your email address'
                  hiddenLabel
                  sx={{
                    background: "rgba(255, 255, 255, 0.2)",
                    border: "1px solid #ffffff",
                    borderRadius: "6px",
                    color: "white",
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <Button
                          variant='outlined'
                          sx={{
                            color: "black",
                            background: " #FFFFFF",
                          }}
                        >
                          subscribe
                        </Button>
                      </InputAdornment>
                    ),
                  }}
                />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <FooterSpan />
    </Container>
  );
};
export default Footer;
