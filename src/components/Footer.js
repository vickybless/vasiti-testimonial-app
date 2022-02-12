import * as React from "react";
import Container from "@mui/material/Container";
import { Grid, Typography, Button } from "@mui/material";
import Input from "@mui/material/Input";
import FooterSpan from "./FooterSpan";

const SectionTwo = () => {
  return (
    <Container
      maxWidth='false'
      sx={{ background: "#25201D;", color: "white", fontFamily: "Inter" }}
    >
      <Container maxWidth='lg'>
        <Grid container width='200'>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              backgroundImage: "url(/img/picture6.png)",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",

              // backgroundPosition: "center center",

              marginTop: "-50px",
              minHeight: "460px",
            }}
          ></Grid>
          <Grid item xs={12} sm={6}>
            <div>
              <Typography
                variant='h4'
                component='div'
                fontWeight='bold'
                sx={{
                  fontFamily: "Inter",
                  paddingTop: { xs: "60px", sm: "125px" },
                }}
              >
                Be a member of our community 🎉{" "}
              </Typography>
            </div>

            <div width='368px'>
              <Typography
                variant='p'
                fontWeight='normal'
                sx={{
                  fontFamily: "Roboto",
                  marginTop: "48px",
                  paddingTop: { xs: "60px", sm: "125px" },
                }}
              >
                We’d make sure you’re always first to know what’s happening on
                Vasiti—thus, the world.
              </Typography>
            </div>
            <div>
              <Input
                placeholder='Enter your email address'
                sx={{
                  position: "absolute",
                  border: "1px solid #ffffff",
                  color: "white",
                  width: "450px",
                  padding: "8px",
                  left: { xs: "50%", sm: "50%" },
                }}
              />
              <span>
                <Button
                  variant='outlined'
                  sx={{
                    color: "black",
                    borderRadius: "4px",
                    margin: "8px 0 32px",
                    width: "1500",
                    left: "90px",
                    background: " #FFFFFF",
                  }}
                >
                  subsscribe
                </Button>
              </span>
            </div>
          </Grid>
        </Grid>
      </Container>

      <FooterSpan />
    </Container>
  );
};
export default SectionTwo;
