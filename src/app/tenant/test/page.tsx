"use client";

import React, { useState } from "react";
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Container,
  Box,
  Divider,
} from "@mui/material";

// Components to switch between
import BasicTable from "@/app/(components)/Test/DataGrid/BasicTable";
import InventoryDataGrid from "@/app/(components)/Test/DataGrid/BaseDataGrid";
import EditableGrid from "@/app/(components)/Test/DataGrid/EditableGrid"; // optional
import PaginatedTable from "@/app/(components)/Test/DataGrid/PaginatedTable"; // optional

type TabKey = "table" | "datagrid" | "editable" | "paginated";

const tabConfig: { key: TabKey; label: string }[] = [
  { key: "table", label: "Basic Table" },
  { key: "datagrid", label: "DataGrid" },
  { key: "editable", label: "Editable Grid" },
  { key: "paginated", label: "Paginated Table" },
];
const Page = () => {
  const [tabValue, setTabValue] = useState<TabKey>("table");

  const handleChange = (_event: React.SyntheticEvent, newValue: TabKey) => {
    setTabValue(newValue);
  };

  const renderComponent = () => {
    switch (tabValue) {
      case "table":
        return <BasicTable />;
      case "datagrid":
        return <InventoryDataGrid />;
      case "editable":
        return <EditableGrid />;
      case "paginated":
        return <PaginatedTable />;
      default:
        return null;
    }
  };
  return (
    <Box>
      <AppBar
        position="static"
        color="default"
        sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        <Tabs
          value={tabValue}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          {tabConfig.map((tab) => (
            <Tab key={tab.key} label={tab.label} value={tab.key} />
          ))}
        </Tabs>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          {tabConfig.find((tab) => tab.key === tabValue)?.label}
        </Typography>
        <Divider sx={{ mb: 2 }} />
        {renderComponent()}
      </Container>
    </Box>
  );
};

export default Page;

// "use client";
// import * as React from "react";
// import Box from "@mui/material/Box";
// import { DataGrid, GridColDef } from "@mui/x-data-grid";

// const columns: GridColDef<(typeof rows)[number]>[] = [
//   { field: "id", headerName: "ID", width: 90 },
//   {
//     field: "firstName",
//     headerName: "First name",
//     width: 150,
//     editable: true,
//   },
//   {
//     field: "lastName",
//     headerName: "Last name",
//     width: 150,
//     editable: true,
//   },
//   {
//     field: "age",
//     headerName: "Age",
//     type: "number",
//     width: 110,
//     editable: true,
//   },
//   {
//     field: "fullName",
//     headerName: "Full name",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 160,
//     valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
//   { id: 10, lastName: "Snow", firstName: "Jon", age: 14 },
//   { id: 11, lastName: "Snow", firstName: "Jon", age: 14 },
//   { id: 12, lastName: "Lannister", firstName: "Cersei", age: 31 },
//   { id: 13, lastName: "Lannister", firstName: "Jaime", age: 31 },
//   { id: 14, lastName: "Stark", firstName: "Arya", age: 11 },
//   { id: 15, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 16, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 17, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 18, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 19, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

// const Page = () => {
//   return (
//     <Box sx={{ width: "100%" }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         autoHeight // ✅ this enables dynamic height
//         initialState={{
//           pagination: {
//             paginationModel: {
//               pageSize: 10,
//               page: 0,
//             },
//           },
//         }}
//         pageSizeOptions={[10]}
//         checkboxSelection
//         disableRowSelectionOnClick
//       />
//     </Box>
//   );
// };

// export default Page;
