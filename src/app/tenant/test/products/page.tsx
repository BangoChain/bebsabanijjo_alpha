"use client";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ProductType } from "./ProductType";
import { CreateProductModal } from "./CreateProductModal";
import { Button, Container } from "@mui/material";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { PlusCircleIcon, PencilIcon, SearchIcon } from "lucide-react";
import { toast, Toaster } from "sonner";
import Image from "next/image";
const initialProducts: ProductType[] = [
  {
    productId: uuidv4(),
    name: "Mouse",
    category: "Electronics",
    unit: "pcs",
    vat: 0,
    reorderLevel: 10,
    purchaseRate: 15,
    price: 25,
    wholesaleRate: 20,
    stockQuantity: 30,
    rating: 4.5,
    isService: false,
    type: "Product",
    imageUrl: "/images/product/product1.png",
  },
  {
    productId: uuidv4(),
    name: "Keyboard",
    category: "Electronics",
    unit: "pcs",
    vat: 0,
    reorderLevel: 15,
    purchaseRate: 35,
    price: 55,
    wholesaleRate: 45,
    stockQuantity: 20,
    rating: 4,
    isService: false,
    type: "Product",
    imageUrl: "/images/product/product2.png",
  },
];

export default function Products() {
  const [products, setProducts] = useState<ProductType[]>(initialProducts);
  const [modalOpen, setModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<ProductType | null>(
    null
  );

  const handleAdd = () => {
    setEditingProduct(null); // ✅ Clear edit state
    setModalOpen(true);
  };

  const handleEdit = (product: ProductType) => {
    setEditingProduct(product);
    setModalOpen(true);
  };

  const handleFormSubmit = (product: ProductType) => {
    const isEditing = products.some((p) => p.productId === product.productId);
    setProducts((prev) =>
      isEditing
        ? prev.map((p) => (p.productId === product.productId ? product : p))
        : [...prev, product]
    );
    toast.success(isEditing ? "Product updated" : "Product added");
    setModalOpen(false);
  };

  // const handleFormSubmit = (product: ProductType) => {
  //   setProducts((prev) =>
  //     prev.some((p) => p.productId === product.productId)
  //       ? prev.map((p) => (p.productId === product.productId ? product : p))
  //       : [...prev, product]
  //   );
  //   setModalOpen(false);
  // };

  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 150 },
    { field: "category", headerName: "Category", width: 150 },
    {
      field: "purchaseRate",
      headerName: "Purchase Rate",
      width: 130,
      type: "number",
    },
    { field: "price", headerName: "Sales Price", width: 100, type: "number" },
    {
      field: "wholesaleRate",
      headerName: "Wholesale Rate",
      width: 130,
      type: "number",
    },
    { field: "vat", headerName: "VAT (%)", width: 100, type: "number" },
    { field: "type", headerName: "Type", width: 100 },
    { field: "unit", headerName: "Unit", width: 100 },

    {
      field: "reorderLevel",
      headerName: "Reorder Level",
      width: 130,
      type: "number",
    },

    {
      field: "stockQuantity",
      headerName: "Stock Quantity",
      width: 130,
      type: "number",
    },
    {
      field: "rating",
      headerName: "Rating",
      width: 100,
      renderCell: (params: GridRenderCellParams<ProductType>) =>
        typeof params.row.rating === "number"
          ? params.row.rating.toFixed(1)
          : "-",
    },
    {
      field: "isService",
      headerName: "Is Service?",
      width: 110,
      type: "boolean",
      renderCell: (params) => (params.value ? "Yes" : "No"),
    },

    {
      field: "imageUrl",
      headerName: "Image",
      width: 120,
      renderCell: (params) =>
        params.value ? (
          <Image
            src={params.value}
            alt="Product"
            width={40}
            height={40}
            style={{ objectFit: "contain" }}
          />
        ) : (
          "-"
        ),
    },

    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params: GridRenderCellParams<ProductType>) => (
        <Button onClick={() => handleEdit(params.row)}>
          {" "}
          <PencilIcon className="w-4 h-4 mr-1" />
          Edit
        </Button>
      ),
    },
  ];

  return (
    <Container sx={{ mt: 4 }}>
      <Toaster position="top-right" richColors />

      {/* <div className="flex items-center justify-between mb-4">
        <SearchIcon className="w-5 h-5 text-gray-500 m-2" />
        <input
          type="text"
          placeholder="Search by name or category"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 rounded px-3 py-2 w-full max-w-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div> */}
      <div className="flex items-center border-2 border-gray-200 rounded w-full sm:w-1/2">
        <SearchIcon className="w-5 h-5 text-gray-500 m-2" />
        <input
          className="w-full py-2 px-4 rounded bg-white"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Button
        variant="contained"
        color="primary"
        onClick={handleAdd}
        sx={{ mb: 2 }}
      >
        <PlusCircleIcon className="w-5 h-5 mr-2 !text-gray-200" /> Add Product
      </Button>
      {/* <DataGrid
        rows={products}
        getRowId={(row) => row.productId}
        columns={columns}
        autoHeight
        disableRowSelectionOnClick
      /> */}
      <DataGrid
        rows={filteredProducts}
        getRowId={(row) => row.productId}
        columns={columns}
        autoHeight
        disableRowSelectionOnClick
      />

      <CreateProductModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleFormSubmit}
        editProduct={editingProduct ?? undefined} // pass undefined when null
      />
    </Container>
  );
}

// ---------------------- 2nd -----------------
// "use client";

// import { useState, useMemo } from "react";
// import { PlusCircleIcon, PencilIcon, SearchIcon } from "lucide-react";
// import Header from "@/app/(components)/Test/Header";
// import Rating from "@/app/(components)/Test/Rating";
// import CreateProductModal from "./CreateProductModal";
// import Image from "next/image";
// import { v4 as uuidv4 } from "uuid";
// import { z } from "zod";
// import { toast, Toaster } from "sonner";

// export const productSchema = z.object({
//   name: z.string().min(1, "Product name is required"),
//   category: z.string().min(1, "Category is required"),
//   unit: z.string().min(1, "Unit is required"),
//   vat: z.number().nonnegative("VAT must be non-negative"),
//   reorderLevel: z
//     .number()
//     .int()
//     .nonnegative("Reorder level must be a positive integer"),
//   purchaseRate: z.number().nonnegative("Purchase rate must be non-negative"),
//   price: z.number().nonnegative("Price must be non-negative"),
//   wholesaleRate: z.number().nonnegative("Wholesale rate must be non-negative"),
//   stockQuantity: z
//     .number()
//     .int()
//     .nonnegative("Stock quantity must be a positive integer"),
//   rating: z.number().min(0).max(5),
//   isService: z.boolean(),
//   type: z.string().min(1, "Type is required"),
//   imageUrl: z.string().url({ message: "Invalid image URL" }),
// });

// export type Product = z.infer<typeof productSchema> & { productId: string };

// const initialProducts: Product[] = [
//   {
//     productId: uuidv4(),
//     name: "Mouse",
//     category: "Electronics",
//     unit: "pcs",
//     vat: 0,
//     reorderLevel: 10,
//     purchaseRate: 15,
//     price: 25,
//     wholesaleRate: 20,
//     stockQuantity: 30,
//     rating: 4.5,
//     isService: false,
//     type: "Product",
//     imageUrl: "/images/product/product1.png",
//   },
//   {
//     productId: uuidv4(),
//     name: "Keyboard",
//     category: "Electronics",
//     unit: "pcs",
//     vat: 0,
//     reorderLevel: 15,
//     purchaseRate: 35,
//     price: 55,
//     wholesaleRate: 45,
//     stockQuantity: 20,
//     rating: 4,
//     isService: false,
//     type: "Product",
//     imageUrl: "/images/product/product2.png",
//   },
// ];

// const Products = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [products, setProducts] = useState<Product[]>(initialProducts);
//   const [editingProduct, setEditingProduct] = useState<Product | null>(null);

//   const handleCreateOrEdit = (productData: Omit<Product, "productId">) => {
//     const parsed = productSchema.safeParse(productData);
//     if (!parsed.success) {
//       toast.error(parsed.error.errors[0].message);
//       return;
//     }

//     const exists = products.some(
//       (p) =>
//         p.name.toLowerCase() === productData.name.toLowerCase() &&
//         (!editingProduct || editingProduct.productId !== p.productId)
//     );
//     if (exists) {
//       toast.error("Product with this name already exists");
//       return;
//     }

//     if (editingProduct) {
//       setProducts((prev) =>
//         prev.map((p) =>
//           p.productId === editingProduct.productId
//             ? { ...p, ...productData }
//             : p
//         )
//       );
//       toast.success("Product updated successfully");
//     } else {
//       const newProduct: Product = {
//         productId: uuidv4(),
//         ...parsed.data,
//       };
//       setProducts((prev) => [...prev, newProduct]);
//       toast.success("Product created successfully");
//     }

//     setEditingProduct(null);
//     setIsModalOpen(false);
//   };

//   const filteredProducts = useMemo(() => {
//     return products.filter(
//       (p) =>
//         p.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
//         (selectedCategory ? p.category === selectedCategory : true)
//     );
//   }, [searchTerm, selectedCategory, products]);

//   const uniqueCategories = useMemo(() => {
//     return Array.from(new Set(products.map((p) => p.category)));
//   }, [products]);

//   return (
//     <div className="mx-auto pb-5 w-full">
//       <Toaster position="top-right" richColors />
//       <div className="mb-6 flex flex-col sm:flex-row gap-4 justify-between">
//         <div className="flex items-center border-2 border-gray-200 rounded w-full sm:w-1/2">
//           <SearchIcon className="w-5 h-5 text-gray-500 m-2" />
//           <input
//             className="w-full py-2 px-4 rounded bg-white"
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//         <select
//           className="border-2 border-gray-300 rounded px-3 py-2 text-gray-700"
//           value={selectedCategory}
//           onChange={(e) => setSelectedCategory(e.target.value)}
//         >
//           <option value="">All Categories</option>
//           {uniqueCategories.map((cat) => (
//             <option key={cat} value={cat}>
//               {cat}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="flex justify-between items-center mb-6">
//         <Header name="Products" />
//         <button
//           className="flex items-center bg-blue-500 hover:bg-blue-700 text-gray-200 font-bold py-2 px-4 rounded"
//           onClick={() => {
//             setEditingProduct(null);
//             setIsModalOpen(true);
//           }}
//         >
//           <PlusCircleIcon className="w-5 h-5 mr-2 !text-gray-200" /> Create
//           Product
//         </button>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-between">
//         {filteredProducts.length === 0 ? (
//           <p>No products found.</p>
//         ) : (
//           filteredProducts.map((product) => (
//             <div
//               key={product.productId}
//               className="border shadow rounded-md p-4 max-w-full w-full mx-auto"
//             >
//               <div className="flex flex-col items-center">
//                 <Image
//                   src={product.imageUrl}
//                   alt={product.name}
//                   width={150}
//                   height={150}
//                   className="mb-3 rounded-2xl w-36 h-36"
//                 />
//                 <h3 className="text-lg text-gray-900 font-semibold">
//                   {product.name}
//                 </h3>
//                 <p className="text-gray-800 font-medium">
//                   ${product.price.toFixed(2)}
//                 </p>
//                 <p className="text-sm text-gray-500">{product.category}</p>
//                 <div className="text-sm text-gray-600 mt-1">
//                   Stock: {product.stockQuantity} | Unit: {product.unit}
//                 </div>
//                 {product.rating && (
//                   <div className="flex items-center mt-2">
//                     <Rating rating={product.rating} />
//                   </div>
//                 )}
//                 <button
//                   onClick={() => {
//                     setEditingProduct(product);
//                     setIsModalOpen(true);
//                   }}
//                   className="mt-4 text-sm text-blue-600 hover:underline flex items-center"
//                 >
//                   <PencilIcon className="w-4 h-4 mr-1" />
//                   Edit
//                 </button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       <CreateProductModal
//         isOpen={isModalOpen}
//         onClose={() => {
//           setIsModalOpen(false);
//           setEditingProduct(null);
//         }}
//         onCreate={handleCreateOrEdit}
//         defaultValues={editingProduct || undefined}
//       />
//     </div>
//   );
// };

// export default Products;
//-----------------------------------------------------------    3rd -------------------------------
// "use client";

// import { useState, useMemo } from "react";
// import { PlusCircleIcon, SearchIcon } from "lucide-react";
// import Header from "@/app/(components)/Test/Header";
// import Rating from "@/app/(components)/Test/Rating";
// import CreateProductModal from "./CreateProductModal";
// import Image from "next/image";
// import { v4 as uuidv4 } from "uuid";

// export type Product = {
//   productId: string;
//   name: string;
//   price: number;
//   stockQuantity: number;
//   rating: number;
// };

// const initialProducts: Product[] = [
//   {
//     productId: uuidv4(),
//     name: "Mouse",
//     price: 25,
//     stockQuantity: 30,
//     rating: 4.5,
//   },
//   {
//     productId: uuidv4(),
//     name: "Keyboard",
//     price: 55,
//     stockQuantity: 20,
//     rating: 4.0,
//   },
//   {
//     productId: uuidv4(),
//     name: "Monitor",
//     price: 200,
//     stockQuantity: 10,
//     rating: 4.8,
//   },
// ];

// const Page = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [products, setProducts] = useState<Product[]>(initialProducts);

//   const handleCreateProduct = (productData: Omit<Product, "productId">) => {
//     const newProduct: Product = {
//       productId: uuidv4(),
//       ...productData,
//     };
//     setProducts((prev) => [...prev, newProduct]);
//   };

//   const filteredProducts = useMemo(() => {
//     return products.filter((p) =>
//       p.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   }, [searchTerm, products]);

//   return (
//     <div className="mx-auto pb-5 w-full">
//       {/* SEARCH BAR */}
//       <div className="mb-6">
//         <div className="flex items-center border-2 border-gray-200 rounded">
//           <SearchIcon className="w-5 h-5 text-gray-500 m-2" />
//           <input
//             className="w-full py-2 px-4 rounded bg-white"
//             placeholder="Search products..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//       </div>

//       {/* HEADER BAR */}
//       <div className="flex justify-between items-center mb-6">
//         <Header name="Products" />
//         <button
//           className="flex items-center bg-blue-500 hover:bg-blue-700 text-gray-200 font-bold py-2 px-4 rounded"
//           onClick={() => setIsModalOpen(true)}
//         >
//           <PlusCircleIcon className="w-5 h-5 mr-2 !text-gray-200" /> Create
//           Product
//         </button>
//       </div>

//       {/* BODY PRODUCTS LIST */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-between">
//         {filteredProducts.length === 0 ? (
//           <p>No products found.</p>
//         ) : (
//           filteredProducts.map((product) => (
//             <div
//               key={product.productId}
//               className="border shadow rounded-md p-4 max-w-full w-full mx-auto"
//             >
//               <div className="flex flex-col items-center">
//                 <Image
//                   src={`/images/product/product${
//                     Math.floor(Math.random() * 3) + 1
//                   }.png`}
//                   alt={product.name}
//                   width={150}
//                   height={150}
//                   className="mb-3 rounded-2xl w-36 h-36"
//                 />
//                 <h3 className="text-lg text-gray-900 font-semibold">
//                   {product.name}
//                 </h3>
//                 <p className="text-gray-800">${product.price.toFixed(2)}</p>
//                 <div className="text-sm text-gray-600 mt-1">
//                   Stock: {product.stockQuantity}
//                 </div>
//                 {product.rating && (
//                   <div className="flex items-center mt-2">
//                     <Rating rating={product.rating} />
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       {/* MODAL */}
//       <CreateProductModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         onCreate={handleCreateProduct}
//       />
//     </div>
//   );
// };

// export default Page;
