import React from "react";
import BasicBars from "./BasicBars";
import BarsDataset from "./BarsDataset";
import StackBars from "./StackBars";
import TickPlacementBars from "./TickPlacementBars";

const BarChart = () => {
  return (
    <div>
      BarChart
      <BasicBars />
      <BarsDataset />
      <StackBars />
      <TickPlacementBars />
    </div>
  );
};

export default BarChart;
