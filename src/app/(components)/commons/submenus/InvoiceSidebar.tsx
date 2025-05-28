"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, ShoppingCart } from "lucide-react";

const invoiceLinks = [
  { href: "/tenant/invoice/sales", icon: FileText, label: "Sales Invoice" },
  {
    href: "/tenant/invoice/purchase",
    icon: ShoppingCart,
    label: "Purchase Invoice",
  },
];

export default function InvoiceSidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col p-4 space-y-2">
      {invoiceLinks.map(({ href, icon: Icon, label }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`flex items-center gap-3 p-2 rounded-md hover:bg-blue-100 ${
              isActive ? "bg-blue-200 text-blue-700" : "text-gray-700"
            }`}
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </Link>
        );
      })}
    </div>
  );
}
