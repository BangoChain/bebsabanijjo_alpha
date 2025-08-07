import React from "react";
import BasicPie from "./BasicPie";
import DonutChart from "./DonutChart";
import PieArcLabel from "./PieArcLabel";
import { Box, Grid, Paper, Typography } from "@mui/material";

const PieChart = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Pie Chart Overview
      </Typography>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="subtitle1" gutterBottom>
              Basic Pie
            </Typography>
            <BasicPie />
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="subtitle1" gutterBottom>
              Donut Chart
            </Typography>
            <DonutChart />
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="subtitle1" gutterBottom>
              Pie with Arc Labels
            </Typography>
            <PieArcLabel />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PieChart;
