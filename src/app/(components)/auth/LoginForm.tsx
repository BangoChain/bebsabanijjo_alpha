"use client";

import {
  Button,
  TextField,
  CircularProgress,
  Typography,
  Link,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

import { useLoginMutation } from "@/features/auth/authApi";
import { setCredentials } from "@/features/auth/authSlice";
import { useAppDispatch } from "@/store/hooks";
import { JwtPayload } from "@/features/auth/authTypes";
import { saveTokens } from "@/utils/token";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { useState } from "react";
import ForgotPassword from "@/app/(components)/auth/ForgotPassword"; // ✅ adjust the import path
const schema = z.object({
  username: z.string().min(6, "Username is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type FormData = z.infer<typeof schema>;

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [login, { isLoading }] = useLoginMutation();
  const [formError, setFormError] = useState("");
  const [forgotOpen, setForgotOpen] = useState(false); // ✅ new state
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setFormError(""); // clear previous error

    try {
      const result = await login(data).unwrap();
      saveTokens(result.accessToken, result.refreshToken);

      const decoded: JwtPayload = jwtDecode(result.accessToken);
      dispatch(setCredentials({ token: result.accessToken, user: decoded }));

      toast.success("Login successful");
      router.push("/tenant");
    } catch (error) {
      const message = getErrorMessage(error);
      setFormError(message || "Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md text-gray-900">
      <Typography variant="h5" className="mb-6 text-center">
        Login to Your Account
      </Typography>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Username"
          type="text"
          variant="outlined"
          fullWidth
          aria-label="username"
          {...register("username")}
          error={!!errors.username}
          helperText={errors.username?.message}
        />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          aria-label="password"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <Button
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          disabled={isLoading}
          startIcon={
            isLoading ? <CircularProgress size={20} color="inherit" /> : null
          }
        >
          {isLoading ? "Logging in..." : "Login"}
        </Button>
      </form>
      {formError && (
        <Typography color="error" className="mb-4 text-center">
          {formError}
        </Typography>
      )}
      <div className="flex justify-between items-center mt-4 text-sm">
        <Link
          href="#"
          onClick={() => setForgotOpen(true)} // ✅ open dialog
          underline="hover"
        >
          Forgot Password?
        </Link>
        <Link href="/registration" underline="hover">
          Don&apos;t have an account?
        </Link>
      </div>
      {/* ✅ Forgot Password Dialog */}
      <ForgotPassword
        open={forgotOpen}
        handleClose={() => setForgotOpen(false)}
      />
    </div>
  );
};

export default LoginForm;

//---------------------------------------------  2nd
// "use client";

// import { Button, TextField, CircularProgress } from "@mui/material";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { toast } from "sonner";
// import { useRouter } from "next/navigation";
// import { jwtDecode } from "jwt-decode";

// import { useLoginMutation } from "@/features/auth/authApi";
// import { setCredentials } from "@/features/auth/authSlice";
// import { useAppDispatch } from "@/store/hooks";
// import { JwtPayload } from "@/features/auth/authTypes";
// import { saveTokens } from "@/utils/token";
// import { getErrorMessage } from "@/utils/getErrorMessage";

// const schema = z.object({
//   username: z.string().min(6, "Username is required"),
//   password: z.string().min(8, "Password must be at least 8 characters"),
// });

// type FormData = z.infer<typeof schema>;

// const LoginForm = () => {
//   const dispatch = useAppDispatch();
//   const router = useRouter();
//   const [login, { isLoading }] = useLoginMutation();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormData>({
//     resolver: zodResolver(schema),
//   });

//   const onSubmit = async (data: FormData) => {
//     toast.success(JSON.stringify(data, null, 2)); // Remove in production

//     try {
//       const result = await login(data).unwrap();
//       console.log("Login result:", result);

//       saveTokens(result.accessToken, result.refreshToken);

//       const decoded: JwtPayload = jwtDecode(result.accessToken);
//       dispatch(setCredentials({ token: result.accessToken, user: decoded }));

//       toast.success("Login successful");
//       router.push("/tenant");
//     } catch (error) {
//       toast.error(getErrorMessage(error));
//     }
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md text-gray-900">
//       <h2 className="text-2xl font-semibold mb-6 text-center">
//         Login to Your Account
//       </h2>

//       <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
//         <TextField
//           label="Username"
//           type="text"
//           variant="outlined"
//           fullWidth
//           {...register("username")}
//           error={!!errors.username}
//           helperText={errors.username?.message}
//         />

//         <TextField
//           label="Password"
//           type="password"
//           variant="outlined"
//           fullWidth
//           {...register("password")}
//           error={!!errors.password}
//           helperText={errors.password?.message}
//         />

//         <Button
//           variant="contained"
//           color="primary"
//           size="large"
//           type="submit"
//           disabled={isLoading}
//           startIcon={
//             isLoading ? <CircularProgress size={20} color="inherit" /> : null
//           }
//         >
//           {isLoading ? "Logging in..." : "Login"}
//         </Button>
//       </form>
//     </div>
//   );
// };
// export default LoginForm;
