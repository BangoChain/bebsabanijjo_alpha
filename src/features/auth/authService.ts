import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const loginUser = async (email: string, password: string) => {
  const res = await axios.post(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
    {
      email,
      password,
    }
  );

  const token = res.data.token;
  const user = jwtDecode(token);

  return { token, user };
};
