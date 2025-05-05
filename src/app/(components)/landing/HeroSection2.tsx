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

"use client";

import { Button, TextField, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "sonner";

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof schema>;

const HeroSection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await axios.post("http://localhost:3000/api/login", data);
      localStorage.setItem("token", res.data.token);
      toast.success("Login successful");
    } catch (err: unknown) {
      toast.error("Login failed");
    }
  };

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
        <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md text-gray-900">
          <Typography variant="h5" className="mb-6 font-semibold text-center">
            Login to Your Account
          </Typography>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              {...register("email")}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              {...register("password")}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <Button
              variant="contained"
              color="primary"
              size="large"
              type="submit"
            >
              Login
            </Button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
