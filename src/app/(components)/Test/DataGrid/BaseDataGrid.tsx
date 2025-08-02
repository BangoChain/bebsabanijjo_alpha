"use client";

import React from "react";

import { DataGrid } from "@mui/x-data-grid";
import { inventoryColumns, inventoryRows } from "./sampleRows";

const BaseDataGrid = () => {
  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid rows={inventoryRows} columns={inventoryColumns} />
    </div>
  );
};
export default BaseDataGrid;
