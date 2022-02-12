import * as React from "react";
import Container from "@mui/material/Container";
import { Grid, Typography, CardMedia } from "@mui/material";

const SectionOne = () => {
  return (
    <Container maxWidth='lg'>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Typography
            variant='h4'
            component='div'
            fontWeight={700}
            sx={{
              fontFamily: "Inter",
              color: "#000000",
              paddingTop: { xs: "60px", sm: "125px" },
            }}
          >
            Amazing Experiences from Our Wonderful Customers
          </Typography>
          <Typography variant='p'>
            Here is what customers and vendors are saying about us, you can
            share your stories with us too.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            backgroundImage: "url(/img/picture.png)",
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
      </Grid>
    </Container>
  );
};
export default SectionOne;
