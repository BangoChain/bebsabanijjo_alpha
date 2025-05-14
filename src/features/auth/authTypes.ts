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
