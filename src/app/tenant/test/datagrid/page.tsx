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
import BaseDataGrid from "@/app/(components)/Test/DataGrid/BaseDataGrid";
import EditableGrid from "@/app/(components)/Test/DataGrid/EditableGrid"; // optional
import PaginatedTable from "@/app/(components)/Test/DataGrid/PaginatedTable"; // optional

type TabKey = "table" | "datagrid" | "editable" | "paginated";

const tabConfig: { key: TabKey; label: string }[] = [
  { key: "table", label: "Basic Table" },
  { key: "datagrid", label: "Basic DataGrid" },
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
        return <BaseDataGrid />;
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
