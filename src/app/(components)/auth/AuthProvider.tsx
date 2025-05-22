// src/components/AuthProvider.tsx

"use client";

import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

import { useAppDispatch } from "@/store/hooks";
import { setCredentials, logout } from "@/features/auth/authSlice";
import { getToken, removeTokens } from "@/utils/token";
import { JwtPayload } from "@/features/auth/authTypes";

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    const token = getToken();
    if (token) {
      try {
        const decoded = jwtDecode<JwtPayload & { exp: number }>(token);
        const isExpired = decoded.exp * 1000 < Date.now();

        if (isExpired) {
          dispatch(logout());
          removeTokens();
          router.push("/");
        } else {
          dispatch(setCredentials({ token, user: decoded }));
        }
      } catch (e) {
        console.error("Invalid token", e);
        removeTokens();
        dispatch(logout());
        router.push("/");
      }
    }
  }, [dispatch, router]);

  return <>{children}</>;
};

export default AuthProvider;
