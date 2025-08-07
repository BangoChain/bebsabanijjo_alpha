"use client";

import { ShoppingBag } from "lucide-react";
import Image from "next/image";
import Rating from "./Rating";

// Mock product data
const mockPopularProducts = [
  {
    productId: "p1",
    name: "Wireless Mouse",
    price: 29.99,
    rating: 4,
    stockQuantity: 3400,
  },
  {
    productId: "p2",
    name: "Mechanical Keyboard",
    price: 89.99,
    rating: 5,
    stockQuantity: 2200,
  },
  {
    productId: "p3",
    name: "Noise Cancelling Headphones",
    price: 159.99,
    rating: 4,
    stockQuantity: 4800,
  },
  {
    productId: "p4",
    name: "USB-C Hub",
    price: 45.0,
    rating: 3,
    stockQuantity: 1500,
  },
];

const CardPopularProducts = () => {
  return (
    <div className="row-span-3 xl:row-span-6 bg-white shadow-md rounded-2xl pb-16">
      <h3 className="text-lg font-semibold px-7 pt-5 pb-2">Popular Products</h3>
      <hr />
      <div className="overflow-auto h-full">
        {mockPopularProducts.map((product, index) => (
          <div
            key={product.productId}
            className="flex items-center justify-between gap-3 px-5 py-7 border-b"
          >
            <div className="flex items-center gap-3">
              <Image
                src={`/images/product/product${(index % 3) + 1}.png`}
                alt={product.name}
                width={48}
                height={48}
                className="rounded-lg w-14 h-14 object-cover"
              />
              <div className="flex flex-col justify-between gap-1">
                <div className="font-bold text-gray-700">{product.name}</div>
                <div className="flex text-sm items-center">
                  <span className="font-bold text-blue-500 text-xs">
                    ${product.price}
                  </span>
                  <span className="mx-2">|</span>
                  <Rating rating={product.rating || 0} />
                </div>
              </div>
            </div>

            <div className="text-xs flex items-center">
              <button className="p-2 rounded-full bg-blue-100 text-blue-600 mr-2">
                <ShoppingBag className="w-4 h-4" />
              </button>
              {Math.round(product.stockQuantity / 1000)}k Sold
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardPopularProducts;
