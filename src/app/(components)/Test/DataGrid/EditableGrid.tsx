"use client";

import * as React from "react";
import {
  DataGrid,
  GridColDef,
  GridRowsProp,
  GridRowModel,
  GridEventListener,
} from "@mui/x-data-grid";
import {
  inventoryColumns as baseColumns,
  inventoryRows as initialRows,
  InventoryItem,
} from "./sampleRows";

const EditableGrid = () => {
  const [rows, setRows] =
    React.useState<GridRowsProp<InventoryItem>>(initialRows);

  const columns: GridColDef<InventoryItem>[] = baseColumns.map((col) => ({
    ...col,
    editable: col.field !== "id", // Disable editing for ID field
  }));

  // Optional: prevent save if invalid
  const handleProcessRowUpdate = (newRow: GridRowModel<InventoryItem>) => {
    const updatedRow = { ...newRow, isNew: false };
    setRows((prevRows) =>
      prevRows.map((row) => (row.id === newRow.id ? updatedRow : row))
    );
    return updatedRow;
  };

  const handleRowEditStop: GridEventListener<"rowEditStop"> = (
    params,
    event
  ) => {
    event.defaultMuiPrevented = true;
  };
  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        editMode="row"
        processRowUpdate={handleProcessRowUpdate}
        onRowEditStop={handleRowEditStop}
        pagination
      />
    </div>
  );
};

export default EditableGrid;
