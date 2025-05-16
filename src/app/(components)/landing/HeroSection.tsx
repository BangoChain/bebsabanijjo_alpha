"use client";

import { motion } from "framer-motion";
import { Typography, Button } from "@mui/material";
import LoginForm from "@/app/(components)/auth/LoginForm";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-32 px-8 md:px-24 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      {/* Left Side Content */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col items-start text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h2"
          component="h1"
          className="font-bold leading-tight"
        >
          Grow Your SaaS Business Faster
        </Typography>
        <Typography variant="h6" className="leading-relaxed mb-6">
          The all-in-one platform to manage your customers, sales, and marketing
          efforts.
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Get early access
        </Button>
      </motion.div>

      {/* Right Side - Login Form */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <LoginForm />
      </motion.div>
    </section>
  );
};
export default HeroSection;
//************************************************2nd

// "use client";

// import { Button, TextField, Typography, CircularProgress } from "@mui/material";
// import { motion } from "framer-motion";
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
// import { getErrorMessage } from "@/utils/getErrorMessage";

// import { saveTokens } from "@/utils/token";

// const schema = z.object({
//   username: z.string().min(6, "Username is required"),
//   password: z.string().min(8, "Password must be at least 8 characters"),
// });

// type FormData = z.infer<typeof schema>;

// const HeroSection = () => {
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

//   // const onSubmit = async (data: FormData) => {
//   //   try {
//   //     toast.success(JSON.stringify(data, null, 2)); // pretty print
//   //     // const result = await login(data).unwrap();
//   //     const result = await login(data).unwrap();
//   //     console.log("Login result:", result);

//   //     const decoded: JwtPayload = jwtDecode(result.token);

//   //     localStorage.setItem("token", result.token);
//   //     dispatch(setCredentials({ token: result.token, user: decoded }));

//   //     toast.success("Login successful");
//   //     router.push("/tenant");
//   //   } catch (error) {
//   //     toast.error(getErrorMessage(error));
//   //   }
//   // };

//   const onSubmit = async (data: FormData) => {
//     toast.success(JSON.stringify(data, null, 2)); // i will remove in production
//     toast.success("Logging in...");

//     try {
//       const result = await login(data).unwrap();
//       console.log("Login result:", result);
//       // Store both access and refresh tokens
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
//     <section className="flex flex-col md:flex-row items-center justify-between py-32 px-8 md:px-24 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
//       {/* Left Side Content */}
//       <motion.div
//         className="w-full md:w-1/2 flex flex-col items-start text-left"
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <Typography
//           variant="h2"
//           component="h1"
//           className="font-bold leading-tight"
//         >
//           Grow Your SaaS Business Faster
//         </Typography>
//         <Typography variant="h6" className="leading-relaxed mb-6">
//           The all-in-one platform to manage your customers, sales, and marketing
//           efforts.
//         </Typography>
//         <Button variant="contained" color="secondary" size="large">
//           Get early access
//         </Button>
//       </motion.div>

//       {/* Right Side - Login Form */}
//       <motion.div
//         className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0"
//         initial={{ opacity: 0, x: 50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md text-gray-900">
//           <Typography variant="h5" className="mb-6 font-semibold text-center">
//             Login to Your Account
//           </Typography>

//           <form
//             className="flex flex-col gap-4"
//             onSubmit={handleSubmit(onSubmit)}
//           >
//             <TextField
//               label="Username"
//               type="text"
//               variant="outlined"
//               fullWidth
//               {...register("username")}
//               error={!!errors.username}
//               helperText={errors.username?.message}
//             />

//             <TextField
//               label="Password"
//               type="password"
//               variant="outlined"
//               fullWidth
//               {...register("password")}
//               error={!!errors.password}
//               helperText={errors.password?.message}
//             />

//             <Button
//               variant="contained"
//               color="primary"
//               size="large"
//               type="submit"
//               disabled={isLoading}
//               startIcon={
//                 isLoading ? (
//                   <CircularProgress size={20} color="inherit" />
//                 ) : null
//               }
//             >
//               {isLoading ? "Logging in..." : "Login"}
//             </Button>
//           </form>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;
//********************************* 3rd *********************
// "use client";

// import { Button, TextField, Typography, CircularProgress } from "@mui/material";
// import { motion } from "framer-motion";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { toast } from "sonner";
// import { useRouter } from "next/navigation";
// import { login } from "@/features/auth/authThunks";
// import { useAppDispatch, useAppSelector } from "@/store/hooks";
// import { RootState } from "@/store/index";

// const schema = z.object({
//   username: z.string().min(6, "Username is required"),
//   password: z.string().min(8, "Password must be at least 8 characters"),
// });

// type FormData = z.infer<typeof schema>;

// const HeroSection = () => {
//   const dispatch = useAppDispatch();
//   const router = useRouter();

//   const { loading, error } = useAppSelector((state: RootState) => state.auth);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormData>({
//     resolver: zodResolver(schema),
//   });

// const onSubmit = async (data: FormData) => {
//   toast.success(JSON.stringify(data, null, 2)); // pretty print

//   const resultAction = await dispatch(login(data));
//   if (login.fulfilled.match(resultAction)) {
//     toast.success("Login successful");
//     router.push("/tenant");
//   } else {
//     toast.error((resultAction.payload as string) || "Login failed");
//   }
// };

//   return (
//     <section className="flex flex-col md:flex-row items-center justify-between py-32 px-8 md:px-24 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
//       {/* Left Side Content */}
//       <motion.div
//         className="w-full md:w-1/2 flex flex-col items-start text-left"
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <Typography
//           variant="h2"
//           component="h1"
//           className="font-bold leading-tight"
//         >
//           Grow Your SaaS Business Faster
//         </Typography>
//         <Typography variant="h6" className="leading-relaxed mb-6">
//           The all-in-one platform to manage your customers, sales, and marketing
//           efforts.
//         </Typography>
//         <Button variant="contained" color="secondary" size="large">
//           Get early access
//         </Button>
//       </motion.div>

//       {/* Right Side - Login Form */}
//       <motion.div
//         className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0"
//         initial={{ opacity: 0, x: 50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md text-gray-900">
//           <Typography variant="h5" className="mb-6 font-semibold text-center">
//             Login to Your Account
//           </Typography>

//           <form
//             className="flex flex-col gap-4"
//             onSubmit={handleSubmit(onSubmit)}
//           >
//             <TextField
//               label="Username"
//               type="text"
//               variant="outlined"
//               fullWidth
//               {...register("username")}
//               error={!!errors.username}
//               helperText={errors.username?.message}
//             />

//             <TextField
//               label="Password"
//               type="password"
//               variant="outlined"
//               fullWidth
//               {...register("password")}
//               error={!!errors.password}
//               helperText={errors.password?.message}
//             />

//             {/* Show error from Redux (e.g. wrong credentials) */}
//             {error && (
//               <Typography color="error" variant="body2" className="-mt-2">
//                 {error}
//               </Typography>
//             )}

//             <Button
//               variant="contained"
//               color="primary"
//               size="large"
//               type="submit"
//               disabled={loading}
//               startIcon={
//                 loading ? <CircularProgress size={20} color="inherit" /> : null
//               }
//             >
//               {loading ? "Logging in..." : "Login"}
//             </Button>
//           </form>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;
