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

//   const onSubmit = async (data: FormData) => {
//     toast.success(JSON.stringify(data, null, 2)); // pretty print

//     const resultAction = await dispatch(login(data));
//     if (login.fulfilled.match(resultAction)) {
//       toast.success("Login successful");
//       router.push("/dashboard");
//     } else {
//       toast.error((resultAction.payload as string) || "Login failed");
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

// "use client";

// import { Button, TextField, Typography } from "@mui/material";
// import { motion } from "framer-motion";

// const HeroSection = () => {
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
//           <form className="flex flex-col gap-4">
//             <TextField
//               label="Email"
//               type="email"
//               variant="outlined"
//               fullWidth
//               required
//             />
//             <TextField
//               label="Password"
//               type="password"
//               variant="outlined"
//               fullWidth
//               required
//             />
//             <Button
//               variant="contained"
//               color="primary"
//               size="large"
//               type="submit"
//             >
//               Login
//             </Button>
//           </form>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;

// "use client";

// import { Button, TextField, Typography } from "@mui/material";
// import { motion } from "framer-motion";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import axios from "axios";
// import { toast } from "sonner";
// import { useRouter } from "next/navigation";
// import { jwtDecode } from "jwt-decode";

// const schema = z.object({
//   username: z.string().min(6, "Username is required"),
//   password: z.string().min(8, "Password must be at least 8 characters"),
// });

// type JwtPayload = {
//   userId: string; // adjust based on your token's structure
//   username: string;
//   // add other fields as needed
// };

// type FormData = z.infer<typeof schema>;

// const HeroSection = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormData>({
//     resolver: zodResolver(schema),
//   });

//   const router = useRouter();

//   const onSubmit = async (data: FormData) => {
//     try {
//       const res = await axios.post(
//         `${process.env.NEXT_PUBLIC_API_URL}/api/auth/login`,
//         data
//       );
//       console.log("token:");

//       const token = res.data.accessToken;
//       console.log(token);
//       localStorage.setItem("token", token);

//       const decoded: JwtPayload = jwtDecode(token);
//       console.log("Decoded token:", decoded);

//       toast.success("Login successful");
//       router.push("/dashboard");
//     } catch (err: unknown) {
//       toast.error("Login failed");
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
//             >
//               Login
//             </Button>
//           </form>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;

//others
// "use client";
// // import { Button, Container, Typography } from "@mui/material";
// import { Button, Typography } from "@mui/material";
// import { motion } from "framer-motion";

// export default function HeroSection() {
//   return (
//     <section className="flex flex-col items-center justify-center text-center py-32 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <Typography variant="h2" component="h1" className="font-bold mb-4">
//           Grow Your SaaS Business Faster
//         </Typography>
//         <Typography variant="h6" className="mb-8 max-w-2xl mx-auto">
//           The all-in-one platform to manage your customers, sales, and marketing
//           efforts.
//         </Typography>
//         <Button variant="contained" color="secondary" size="large">
//           Get Started
//         </Button>
//       </motion.div>
//     </section>
//   );
// }

//3rd
// "use client";

// import { Button, Typography } from "@mui/material";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const HeroSection = () => {
//   return (
//     <section className="flex flex-col md:flex-row items-center justify-between py-32 px-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
//       {/* Left Side - Text Content */}
//       <motion.div
//         className="w-full md:w-1/2 text-left"
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <Typography variant="h2" component="h1" className="font-bold mb-4">
//           Grow Your SaaS Business Faster
//         </Typography>
//         <Typography variant="h6" className="mb-8 max-w-md">
//           The all-in-one platform to manage your customers, sales, and marketing
//           efforts.
//         </Typography>
//         <Button variant="contained" color="secondary" size="large">
//           Get Started
//         </Button>
//       </motion.div>

//       {/* Right Side - Image */}
//       <motion.div
//         className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0"
//         initial={{ opacity: 0, x: 50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="relative w-80 h-80">
//           <Image
//             src="/images/bebsabanijjo22.PNG" // your image file inside /public
//             alt="SaaS Illustration"
//             layout="fill"
//             objectFit="contain"
//             priority // 🔥 Faster load for LCP optimization
//           />
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;

// "use client";

// import { Button, Typography } from "@mui/material";
// import { motion } from "framer-motion";
// import Image from "next/image";

// const HeroSection = () => {
//   return (
//     <section className="flex flex-col md:flex-row items-center justify-between py-32 px-8 md:px-24 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
//       {/* Left Side - Text Content */}
//       <motion.div
//         className="w-full md:w-1/2 flex flex-col items-start text-left space-y-6"
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
//         <Typography variant="h6" className=" leading-relaxed">
//           The all-in-one platform to manage your customers, sales, and marketing
//           efforts.
//         </Typography>
//         <Button variant="contained" color="secondary" size="large">
//           Get Started
//         </Button>
//       </motion.div>
//       <motion.div
//         className="w-full md:w-1/2 flex flex-col items-start text-left"
//         initial={{ opacity: 0, x: -50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <Typography
//           variant="h2"
//           component="h1"
//           className="font-bold leading-tight "
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

//       {/* Right Side - Image */}
//       <motion.div
//         className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0"
//         initial={{ opacity: 0, x: 50 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="relative w-150 h-120">
//           <Image
//             src="/images/Capture.JPG"
//             alt="SaaS Illustration"
//             width={500}
//             height={400}
//             style={{ objectFit: "cover" }}
//             priority
//           />
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default HeroSection;

// //2nd
// "use client";

// export function HeroSection() {
//   return (
//     <section className="flex flex-col md:flex-row items-center justify-between px-10 py-20 bg-violet-500 text-white">
//       <div className="max-w-xl">
//         <h1 className="text-5xl font-extrabold mb-6">
//           This is a main header for this product
//         </h1>
//         <p className="text-lg mb-8">
//           This is introduction text describing why people should use your
//           product. Double-click anywhere on the text to edit its contents.
//         </p>
//         <button className="bg-cyan-400 text-black px-6 py-3 rounded-md hover:bg-cyan-300">
//           Get early access
//         </button>
//       </div>
//       <div className="mt-10 md:mt-0">
//         <img
//           src="/vercel.svg"
//           alt="Dashboard Preview"
//           className="rounded-xl shadow-2xl"
//         />
//       </div>
//     </section>
//   );
// }
