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
import BarChart from "@/app/(components)/Test/Chart/BarChart/BarChart";
import PieChart from "@/app/(components)/Test/Chart/PieChart/PieChart";
import EditableGrid from "@/app/(components)/Test/DataGrid/EditableGrid"; // optional
import PaginatedTable from "@/app/(components)/Test/DataGrid/PaginatedTable"; // optional

type TabKey = "bar" | "pie" | "editable" | "paginated";

const tabConfig: { key: TabKey; label: string }[] = [
  { key: "bar", label: "Bar Chart" },
  { key: "pie", label: "Pie Chart" },
  { key: "editable", label: "Editable Grid" },
  { key: "paginated", label: "Paginated Table" },
];
const Page = () => {
  const [tabValue, setTabValue] = useState<TabKey>("bar");

  const handleChange = (_event: React.SyntheticEvent, newValue: TabKey) => {
    setTabValue(newValue);
  };

  const renderComponent = () => {
    switch (tabValue) {
      case "bar":
        return <BarChart />;
      case "pie":
        return <PieChart />;
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
