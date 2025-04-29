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

"use client";

import { Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-32 px-8 md:px-24 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      {/* Left Side - Text Content */}
      {/* <motion.div
        className="w-full md:w-1/2 flex flex-col items-start text-left space-y-6"
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
        <Typography variant="h6" className=" leading-relaxed">
          The all-in-one platform to manage your customers, sales, and marketing
          efforts.
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Get Started
        </Button>
      </motion.div> */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col items-start text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h2"
          component="h1"
          className="font-bold leading-tight "
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

      {/* Right Side - Image */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-150 h-120">
          <Image
            src="/images/Capture.JPG"
            alt="SaaS Illustration"
            width={500}
            height={400}
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

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
