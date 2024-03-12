import { Button, Grid, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <div>
      <Grid
        container
        className="mt-10 bg-black text-white text-center"
        sx={{ bgcolor: "black", color: "white", py: 2 }}
      >
        <Grid container item xs={12} >
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="pb-5 text-yellow-400">
              Company
            </Typography>
            <div style={{ display: "grid", alignItems: "center" }}>
              <Button variant="h5">About</Button>
              <Button variant="h5">Blog</Button>
              <Button variant="h5">Jobs</Button>
              <Button variant="h5">Press</Button>
              <Button variant="h5">Partners</Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="pb-5 text-yellow-400">
              Solution
            </Typography>
            <div style={{ display: "grid", alignItems: "center" }}>
              <Button variant="h5">Support</Button>
              <Button variant="h5">Insights</Button>
              <Button variant="h5">Analytics</Button>
              <Button variant="h5">Marketing</Button>
              <Button variant="h5">Commerce</Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="pb-5 text-yellow-400">
              Documentation
            </Typography>
            <div style={{ display: "grid", alignItems: "center" }}>
              <Button variant="h5">Guides</Button>
              <Button variant="h5">API Status</Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" className="pb-5 text-yellow-400">
              Legal
            </Typography>
            <div style={{ display: "grid", alignItems: "center" }}>
              <Button variant="h5">Privacy</Button>
              <Button variant="h5">Terms</Button>
              <Button variant="h5">Claim</Button>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} className="py-4  border border-b-0">
          @2024 Bapugouda Biradar || Full Stack Developer, DevOps Engineer{" "}
          <br />
          Made for Learning Purposes.
        </Grid>
      </Grid>
    </div>
  );
}

export default Footer;
