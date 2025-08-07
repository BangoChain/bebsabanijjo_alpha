import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import Typography from "@mui/material/Typography";
export default function BasicBars() {
  return (
    <>
      {" "}
      <Typography>Simple Bar Chart </Typography>
      <BarChart
        xAxis={[{ data: ["group A", "group B", "group C"] }]}
        series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
        height={300}
      />
    </>
  );
}
