"use client";
// import { Button, Container, Typography } from "@mui/material";
import { Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography variant="h2" component="h1" className="font-bold mb-4">
          Grow Your SaaS Business Faster
        </Typography>
        <Typography variant="h6" className="mb-8 max-w-2xl mx-auto">
          The all-in-one platform to manage your customers, sales, and marketing
          efforts.
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Get Started
        </Button>
      </motion.div>
    </section>
  );
}

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
