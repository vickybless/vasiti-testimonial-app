import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Dialog,
  FormControlLabel,
  Grid,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

const TestimonyModal = ({ handleClose, open }) => {
  const [submitted, setSubmitted] = React.useState(false);
  const handleSubmit = () => setSubmitted(true);
  return (
    <div>
      <Dialog open={open} onClose={handleClose} fullWidth={true} maxWidth='sm'>
        {!submitted ? (
          <Box sx={{ p: 4 }}>
            <Typography id='modal-modal-title' variant='h6' component='h2'>
              Share your amazing story!
            </Typography>
            <Box>
              <Typography>Upload your Picture</Typography>
              <TextField
                label={"Choose Image"}
                fullWidth
                endAdornment={
                  <InputAdornment position='end'>
                    <AccountCircle />
                  </InputAdornment>
                }
              />
            </Box>
            <Grid container justifyContent='space-between' spacing='5'>
              <Grid item xs={12} sm={6}>
                <Box>
                  <Typography>First Name</Typography>
                  <TextField fullWidth />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Box>
                  <Typography>Last Name</Typography>
                  <TextField fullWidth />
                </Box>
              </Grid>
            </Grid>
            <Box>
              <Typography>Share your story</Typography>
              <TextField fullWidth />
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography sx={{ marginRight: "10px" }}>
                What did you interact with Vasiti as?
              </Typography>
              <RadioGroup
                row
                aria-labelledby='demo-row-radio-buttons-group-label'
                name='row-radio-buttons-group'
              >
                <FormControlLabel
                  value='customer'
                  control={<Radio />}
                  label='Customer'
                />
                <FormControlLabel
                  value='vendor'
                  control={<Radio />}
                  label='Vendor'
                />
              </RadioGroup>
            </Box>
            <Box>
              <Typography>City or Higher Institution (for Students)</Typography>
              <TextField fullWidth />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "70px",
              }}
            >
              <Button
                variant='contained'
                onClick={handleSubmit}
                sx={{
                  textTransform: "uppercase",
                  backgroundColor: "#FF5C00",
                }}
              >
                Share your story!
              </Button>
            </Box>
          </Box>
        ) : (
          <Box
            sx={{
              p: 4,
              justifyContent: "center",
              display: "flex",
              flexDirection: "colun",
            }}
          >
            <Avatar
              alt='Thanks'
              src='/img/thanks.png'
              sx={{ width: 200, height: 200, margin: "auto" }}
            />
            <Typography variant='h4'>
              Thank you for sharing your story!
            </Typography>

            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>

            <Button
              variant='contained'
              onClick={handleClose}
              sx={{
                textTransform: "uppercase",
                backgroundColor: "#FF5C00",
              }}
            >
              Close
            </Button>
          </Box>
        )}
      </Dialog>
    </div>
  );
};

export default TestimonyModal;
