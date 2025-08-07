// import { z } from "zod";

// export const productSchema = z.object({
//   productId: z.string().optional(),
//   name: z.string().min(1, "Product name is required"),
//   category: z.string().min(1, "Category is required"),
//   unit: z.string().min(1, "Unit is required"),
//   vat: z.number().min(0),
//   reorderLevel: z.number().min(0),
//   purchaseRate: z.number().min(0),
//   price: z.number().min(0),
//   wholesaleRate: z.number().min(0),
//   stockQuantity: z.number().min(0),
//   rating: z.number().min(0).max(5).optional(),
//   isService: z.boolean(),
//   type: z.enum(["Product", "Service"]),
//   imageUrl: z.string().min(1, "Image URL is required"),
// });

// export type ProductFormType = z.infer<typeof productSchema>;

// src/schemas/productSchema.ts

import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(1, "Name is required"),
  category: z.string().min(1, "Category is required"),
  unit: z.string().min(1, "Unit is required"),
  vat: z.number().min(0, "VAT cannot be negative"),
  reorderLevel: z.number().min(0, "Reorder level cannot be negative"),
  purchaseRate: z.number().min(0, "Purchase rate is required"),
  price: z.number().min(0, "Price is required"),
  wholesaleRate: z.number().min(0, "Wholesale rate is required"),
  stockQuantity: z.number().min(0, "Stock quantity is required"),
  rating: z.number().min(0).max(5).optional(),
  isService: z.boolean(),
  type: z.enum(["Product", "Service"]),
  // imageUrl: z
  //   .string()
  //   .url("Must be a valid image URL")
  //   .optional()
  //   .or(z.literal("")),
  imageUrl: z
    .string()
    .min(1, "Image path is required")
    .optional()
    .or(z.literal("")),
});

export type ProductFormType = z.infer<typeof productSchema>;
