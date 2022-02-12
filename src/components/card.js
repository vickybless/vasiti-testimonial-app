import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Chip, Stack } from "@mui/material";

const TestimonyCard = ({
  imagePath,
  name,
  isCustomer,
  location,
  testimony,
}) => {
  return (
    <Card
      sx={{ justifyContent: "center", maxWidth: "300px", fontFamily: "Inter" }}
    >
      <Avatar
        alt='Remy Sharp'
        src={imagePath}
        sx={{ width: 200, height: 200, margin: "auto" }}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {name}
        </Typography>

        <Stack direction='row'>
          <small>{location}</small>
          <Chip
            label={isCustomer ? "Customer" : "Vendor"}
            variant='outlined'
            size='small'
            sx={{
              color: isCustomer ? "#0D019A" : "#049A01",
              background: isCustomer ? "#EEF8FF" : "#F0FFEE",
              borderRadius: "4px",
              marginLeft: "5px",
            }}
          />
        </Stack>

        <Typography variant='body2' color='#474747' sx={{ marginTop: "20px" }}>
          {testimony}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TestimonyCard;
