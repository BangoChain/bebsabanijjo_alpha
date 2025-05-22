export interface AuthCredentials {
  username: string;
  password: string;
}

export interface JwtPayload {
  userId: string;
  username: string;
}

export interface AuthState {
  token: string | null;
  user: JwtPayload | null;
  loading: boolean;
  error: string | null;
}

// Add these for API request/response types:

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
}
