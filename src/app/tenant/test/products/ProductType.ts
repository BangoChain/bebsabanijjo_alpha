export type ProductType = {
  productId: string;
  name: string;
  category: string;
  unit: string;
  vat: number;
  reorderLevel: number;
  purchaseRate: number;
  price: number;
  wholesaleRate: number;
  stockQuantity: number;
  rating?: number;
  isService: boolean;
  type: "Product" | "Service";
  imageUrl?: string;
};
