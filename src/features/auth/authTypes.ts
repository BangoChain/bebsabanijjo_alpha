// export interface AuthCredentials {
//   username: string;
//   password: string;
// }

// export interface JwtPayload {
//   userId: string;
//   username: string;
// }

// export interface AuthState {
//   token: string | null;
//   user: JwtPayload | null;
//   loading: boolean;
//   error: string | null;
// }

// // Add these for API request/response types:

// export interface LoginRequest {
//   username: string;
//   password: string;
// }

// export interface LoginResponse {
//   accessToken: string;
//   refreshToken: string;
// }

// export interface Role {
//   roleId: number;
//   name: string;
//   description?: string | null;
//   createdDate?: string | null;
//   approvedDate?: string | null;
//   updatedAt?: string | null;
// }

// export interface JwtPayload {
//   userId: number | string; // change to number if your userId is numeric
//   userName: string; // fix key from 'username' to 'userName' to match actual token
//   tenantId: number;
//   tenantName: string;
//   tenantDomain: string;
//   role: Role;
//   permissions: unknown[]; // you can create specific types if you want
//   services: unknown[];
//   features: unknown[];
//   iat: number;
//   exp: number;
// }
// authTypes.ts

export interface Role {
  roleId: number;
  name: string;
  description?: string | null;
  createdDate?: string | null;
  approvedDate?: string | null;
  updatedAt?: string | null;
}

export interface User {
  userId: number;
  tenantId: number;
  roleId: number;
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  phoneNumber: string;
  status: string;
  image: string;
  lastLoginDate: string;
  createdDate: string;
  createdBy?: string | null;
  approvedBy?: string | null;
  approvedDate?: string | null;
  isDeleted: boolean;
  lastUpdatedBy?: string | null;
  updatedAt: string;
  totalUpdatedCount: number;
  isPasswordResetRequired: boolean;
}

export interface Tenant {
  tenantId: number;
  name: string;
  domain: string;
  logo: string;
  address: string;
  city: string;
  state: string;
  country: string;
  phone: string;
  email: string;
  isActive: boolean;
  createdAt?: string | null;
  updatedAt?: string | null;
}

export interface JwtPayload {
  user: User;
  tenant: Tenant;
  role: Role;
  permissions: unknown[];
  services: unknown[];
  features: unknown[];
  iat: number;
  exp: number;
}

export interface AuthState {
  token: string | null;
  user: JwtPayload | null;
  loading: boolean;
  error: string | null;
}

export interface AuthCredentials {
  username: string;
  password: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}

//if you know permissions have an id and name:
//  export interface Permission {
//   id: number;
//   name: string;
// }

// export interface Service {
//   id: number;
//   title: string;
// }

// export interface Feature {
//   id: number;
//   description: string;
// }

// export interface JwtPayload {
//   // ...
//   permissions: Permission[];
//   services: Service[];
//   features: Feature[];
//   // ...
// }
