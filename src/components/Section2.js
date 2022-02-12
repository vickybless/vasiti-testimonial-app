import * as React from "react";
import Container from "@mui/material/Container";
import { Grid, Typography, Button, Chip, Stack } from "@mui/material";

const SectionTwo = () => {
  return (
    <Container
      maxWidth='false'
      sx={{ background: "#222222", color: "white", fontFamily: "Inter" }}
    >
      <Container maxWidth='lg'>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={6}
            sx={{
              backgroundImage: "url(/img/picture2.png)",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",

              // backgroundPosition: "center center",
              marginTop: "28px",
              minHeight: "460px",
            }}
          >
            {/* <CardMedia
            component="img"
            image="/img/picture.png"
            alt="hero"
            sx={{ paddingTop: "28px" }}
          /> */}
            {/* <img src="img/picture.png" alt="" height="500" width="200" /> */}
          </Grid>
          <Grid item xs={12} sm={6} textAlign={"left"}>
            <div>
              <Typography
                variant='h4'
                component='div'
                fontWeight={700}
                sx={{
                  fontFamily: "Inter",
                  paddingTop: { xs: "60px", sm: "125px" },
                }}
              >
                Tolu & Joy’s Experience
              </Typography>
            </div>

            <Chip
              label='Customer'
              variant='outlined'
              sx={{
                color: "#ffffff",
                borderRadius: "4px",
                margin: "8px 0 32px",
              }}
            />

            <div>
              <Typography variant='p'>
                I had the best experience shopping with vasiti. Usability of the
                website was great, very good customer service, an all round
                great experience. I would definately be coming back! I had the
                best experience shopping with vasiti. Usability of the website
                was great, very good customer service, an all round
              </Typography>
            </div>
            <Stack width='200px'>
              <Button
                variant='text'
                sx={{ marginTop: "48px", color: "#ffffff", padding: "0px" }}
              >
                Share your own story!
              </Button>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='12'
                viewBox='0 0 297 12'
                fill='none'
              >
                <path
                  d='M1 11.2012C71.3333 5.86791 228.8 -3.19875 296 3.20125'
                  stroke='#FF5C00'
                />
              </svg>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};
export default SectionTwo;
