// "use client";

// import * as React from "react";
// import {
//   DataGrid,
//   GridColDef,
//   GridRowsProp,
//   GridRowModel,
//   GridEventListener,
// } from "@mui/x-data-grid";
// import {
//   inventoryColumns as baseColumns,
//   inventoryRows as initialRows,
//   InventoryItem,
// } from "./sampleRows";
// import Box from "@mui/material/Box";
// const PaginatedTable = () => {
//   const [rows, setRows] =
//     React.useState<GridRowsProp<InventoryItem>>(initialRows);

//   const columns: GridColDef<InventoryItem>[] = baseColumns.map((col) => ({
//     ...col,
//     editable: col.field !== "id", // make all but ID editable
//   }));

//   const handleProcessRowUpdate = (newRow: GridRowModel<InventoryItem>) => {
//     const updatedRow = { ...newRow };
//     setRows((prev) =>
//       prev.map((row) => (row.id === newRow.id ? updatedRow : row))
//     );
//     return updatedRow;
//   };

//   const handleRowEditStop: GridEventListener<"rowEditStop"> = (
//     params,
//     event
//   ) => {
//     event.defaultMuiPrevented = true;
//   };

//   return (
//     // <div style={{ height: 600, width: "100%" }}>
//     //   <DataGrid
//     //     rows={rows}
//     //     columns={columns}
//     //     editMode="row"
//     //     processRowUpdate={handleProcessRowUpdate}
//     //     onRowEditStop={handleRowEditStop}
//     //     pageSizeOptions={[5, 10, 20, 50]}
//     //     initialState={{
//     //       pagination: {
//     //         paginationModel: { pageSize: 10, page: 0 },
//     //       },
//     //     }}
//     //     pagination
//     //   />
//     // </div>
//     <Box sx={{ height: 400, width: "100%" }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         editMode="row"
//         initialState={{
//           pagination: {
//             paginationModel: {
//               pageSize: 5,
//             },
//           },
//         }}
//         pageSizeOptions={[5, 10, 20, 50]}
//         checkboxSelection
//         disableRowSelectionOnClick
//       />
//     </Box>
//   );
// };
// export default PaginatedTable;
// } from "./sampleRows";
"use client";

import * as React from "react";
import { Box, Typography } from "@mui/material";
import {
  DataGrid,
  GridRowEditStopReasons,
  // GridRowParams,
  // GridRowModel,
  GridEventListener,
} from "@mui/x-data-grid";
import { inventoryRows, inventoryColumns, InventoryItem } from "./sampleRows";

export const PaginatedTable = () => {
  const [rows, setRows] = React.useState<InventoryItem[]>(inventoryRows);

  const handleProcessRowUpdate = (updatedRow: InventoryItem): InventoryItem => {
    const updatedRows = rows.map((row) =>
      row.id === updatedRow.id ? { ...row, ...updatedRow } : row
    );
    setRows(updatedRows);
    return updatedRow;
  };

  const handleRowEditStop: GridEventListener<"rowEditStop"> = (
    params,
    event
  ) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true;
    }
  };

  return (
    <Box sx={{ height: 500, width: "100%" }}>
      <Typography variant="h5" align="center" mb={3}>
        Inventory Table
      </Typography>
      <DataGrid
        rows={rows}
        columns={inventoryColumns.map((col) => ({
          ...col,
          editable: col.field !== "id",
        }))}
        getRowId={(row) => row.id}
        checkboxSelection
        pagination
        pageSizeOptions={[5, 10, 20]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
              page: 0,
            },
          },
        }}
        editMode="row"
        processRowUpdate={handleProcessRowUpdate}
        onRowEditStop={handleRowEditStop}
      />
    </Box>
  );
};

export default PaginatedTable;
