// utils/token.ts
// export const saveToken = (token: string) =>
//   localStorage.setItem("token", token);
// export const getToken = () => localStorage.getItem("token");
// export const removeToken = () => localStorage.removeItem("token");

// export const saveTokens = (accessToken: string, refreshToken: string) => {
//   localStorage.setItem("token", accessToken);
//   localStorage.setItem("refreshToken", refreshToken);
// };

// export const getToken = () => localStorage.getItem("token");
// export const getRefreshToken = () => localStorage.getItem("refreshToken");

// export const removeToken = () => {
//   localStorage.removeItem("token");
//   localStorage.removeItem("refreshToken");
// };

export const saveTokens = (accessToken: string, refreshToken: string) => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
};

export const getToken = () => localStorage.getItem("accessToken");
export const getRefreshToken = () => localStorage.getItem("refreshToken");

export const removeAccessToken = () => localStorage.removeItem("accessToken");
export const removeRefreshToken = () => localStorage.removeItem("refreshToken");

export const removeTokens = () => {
  removeAccessToken();
  removeRefreshToken();
};
