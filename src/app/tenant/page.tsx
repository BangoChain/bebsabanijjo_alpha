"use client";

import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import type { JwtPayload } from "@/features/auth/authTypes"; // Adjust path as needed

const Page = () => {
  const [user, setUser] = useState<JwtPayload | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded = jwtDecode<JwtPayload>(token);
        setUser(decoded);
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Tenant Dashboard</h1>
      {user ? (
        <pre className="bg-gray-100 p-4 rounded">
          {JSON.stringify(user, null, 2)}
        </pre>
      ) : (
        <p>No user info found in token.</p>
      )}
    </div>
  );
};

export default Page;
