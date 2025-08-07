"use client";

import Header from "@/app/(components)/Test/Header";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

// Define the columns for the DataGrid
const columns: GridColDef[] = [
  { field: "productId", headerName: "ID", width: 90 },
  { field: "name", headerName: "Product Name", width: 200 },
  {
    field: "price",
    headerName: "Price",
    width: 110,
    type: "number",
    renderCell: (params) => `$${params.value.toFixed(2)}`,
  },
  {
    field: "rating",
    headerName: "Rating",
    width: 110,
    type: "number",
    renderCell: (params) => (params.value ? params.value : "N/A"),
  },
  {
    field: "stockQuantity",
    headerName: "Stock Quantity",
    width: 150,
    type: "number",
  },
];

// Define the interface for a product
interface ProductRow {
  productId: string;
  name: string;
  price: number;
  rating?: number;
  stockQuantity: number;
}

// Mock data for demo purposes
const mockProducts: ProductRow[] = [
  {
    productId: "1",
    name: "Wireless Mouse",
    price: 29.99,
    rating: 4.5,
    stockQuantity: 120,
  },
  {
    productId: "2",
    name: "Mechanical Keyboard",
    price: 89.99,
    rating: 4.7,
    stockQuantity: 75,
  },
  {
    productId: "3",
    name: "USB-C Hub",
    price: 45.5,
    rating: 4.2,
    stockQuantity: 40,
  },
  {
    productId: "4",
    name: "HDMI Cable",
    price: 10.99,
    stockQuantity: 200,
  },
  {
    productId: "5",
    name: "Laptop Stand",
    price: 39.0,
    rating: 4.3,
    stockQuantity: 65,
  },
];

const Page = () => {
  return (
    <div className="flex flex-col p-4">
      <Header name="Inventory" />

      <div className="h-[400px] mt-4">
        <DataGrid
          rows={mockProducts}
          columns={columns}
          getRowId={(row) => row.productId}
          checkboxSelection
          className="bg-white shadow rounded-lg border border-gray-200 !text-gray-700"
        />
      </div>
    </div>
  );
};

export default Page;
