import * as React from "react";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import TestimonyCard from "./card";

const SectionTestimony = ({ testimony }) => {
  return (
    <Container maxWidth='lg' sx={{ marginTop: "75px", marginBottom: "75px" }}>
      <Grid container spacing={2}>
        {testimony.map((t) => (
          <Grid item xs={12} sm={6} md={4}>
            <TestimonyCard {...t}></TestimonyCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
export default SectionTestimony;
