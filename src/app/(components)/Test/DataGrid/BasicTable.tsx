"use client";

import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

type InventoryItem = {
  name: string;
  sku: string;
  category: string;
  quantity: number;
  price: number;
};

function createData(
  name: string,
  sku: string,
  category: string,
  quantity: number,
  price: number
): InventoryItem {
  return { name, sku, category, quantity, price };
}

const rows: InventoryItem[] = [
  createData("Laptop", "LT1001", "Electronics", 12, 999.99),
  createData("Keyboard", "KB2001", "Accessories", 50, 29.99),
  createData("Mouse", "MS3001", "Accessories", 80, 19.99),
  createData("Monitor", "MN4001", "Electronics", 25, 149.99),
  createData("Printer", "PR5001", "Office Equipment", 10, 199.99),
  createData("Router", "RT6001", "Networking", 30, 89.99),
  createData("USB Cable", "UC7001", "Accessories", 100, 4.99),
  createData("Chair", "CH8001", "Furniture", 15, 79.99),
  createData("Desk", "DK9001", "Furniture", 20, 129.99),
  createData("Projector", "PJ1002", "Electronics", 5, 399.99),
  createData("Tablet", "TB1101", "Electronics", 18, 299.99),
  createData("Webcam", "WC1201", "Accessories", 40, 49.99),
  createData("Headphones", "HP1301", "Accessories", 60, 39.99),
  createData("External HDD", "HD1401", "Storage", 22, 79.99),
  createData("Flash Drive", "FD1501", "Storage", 150, 9.99),
  createData("Smartphone", "SP1601", "Electronics", 14, 599.99),
  createData("Scanner", "SC1701", "Office Equipment", 8, 149.99),
  createData("Notebook", "NB1801", "Stationery", 300, 1.99),
  createData("Pen", "PN1901", "Stationery", 500, 0.99),
  createData("Label Printer", "LP2001", "Office Equipment", 6, 89.99),
];

const BasicTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="inventory table">
        <TableHead>
          <TableRow>
            <TableCell>Item Name</TableCell>
            <TableCell>SKU</TableCell>
            <TableCell>Category</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Price ($)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.sku}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.sku}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.price.toFixed(2)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
