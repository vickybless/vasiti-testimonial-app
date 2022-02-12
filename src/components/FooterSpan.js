import * as React from "react";
import Container from "@mui/material/Container";
import { Grid, Typography } from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const FooterSpan = () => {
  return (
    <Container maxWidth='lg' sx={{ marginTop: "20px" }}>
      <Grid container justifyContent='space-around'>
        <Grid item xs={6} sm={2}>
          <div>
            <Typography variant='p'>
              <ul
                style={{
                  listStyleType: "none",
                  padding: "0px",
                }}
              >
                <li>
                  <h3>Company</h3>
                </li>

                <li>About Us</li>
                <li>Term of Use</li>
                <li>Privacy Policy</li>
                <li>Press & Media</li>
                <li></li>
              </ul>
            </Typography>
          </div>
        </Grid>
        <Grid item xs={6} sm={2}>
          <div>
            <Typography variant='p'>
              <ul
                style={{
                  listStyleType: "none",
                  padding: "0px",
                }}
              >
                <li>
                  <h3>Products</h3>
                </li>

                <li>Market Place</li>
                <li>Magazine</li>
                <li>Seller</li>
                <li>Whole Seller</li>
                <li>Services</li>
                <li></li>
              </ul>
            </Typography>
          </div>
        </Grid>
        <Grid item xs={6} sm={2}>
          <div>
            <Typography variant='p'>
              <ul
                style={{
                  listStyleType: "none",
                  padding: "0px",
                }}
              >
                <li>
                  <h3>Careers</h3>
                </li>

                <li>Become a Campus Rep</li>
                <li>Become a Vasiti Influencer</li>
                <li>Become a Campus Writer</li>
                <li>Become an Affliaite</li>
                <li></li>
              </ul>
            </Typography>
          </div>
        </Grid>
        <Grid item xs={6} sm={2}>
          <div>
            <Typography variant='p'>
              <ul
                style={{
                  listStyleType: "none",
                  padding: "0px",
                }}
              >
                <li>
                  <h3>Get in Touch</h3>
                </li>

                <li>Contact Us</li>
                <li>Advertise with Us</li>
                <li>Partner with Us</li>
                <li>Privacy Policy</li>
                <li>Help/FAQs</li>
              </ul>
            </Typography>
          </div>
        </Grid>
        <Grid item xs={6} sm={3}>
          <div>
            <Typography variant='p'>
              <ul
                style={{
                  listStyleType: "none",
                  padding: "0px",
                }}
              >
                <li>
                  <h3>Join Our Community</h3>
                </li>
                <div>
                  <FacebookRoundedIcon />
                  <InstagramIcon />
                  <TwitterIcon />
                  <LinkedInIcon />
                </div>

                <li>Email Newsletter</li>

                <li></li>
              </ul>
            </Typography>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
export default FooterSpan;
