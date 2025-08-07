import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { dataset, valueFormatter } from "./weather";
import Typography from "@mui/material/Typography";
const chartSetting = {
  yAxis: [
    {
      label: "rainfall (mm)",
      width: 60,
    },
  ],
  height: 300,
};

export default function BarsDataset() {
  return (
    <>
      {" "}
      <Typography>Using a dataset </Typography>
      <BarChart
        dataset={dataset}
        xAxis={[{ dataKey: "month" }]}
        series={[
          { dataKey: "london", label: "London", valueFormatter },
          { dataKey: "paris", label: "Paris", valueFormatter },
          { dataKey: "newYork", label: "New York", valueFormatter },
          { dataKey: "seoul", label: "Seoul", valueFormatter },
        ]}
        {...chartSetting}
      />
    </>
  );
}
