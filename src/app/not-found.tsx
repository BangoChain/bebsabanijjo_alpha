// "use client";

// import Link from "next/link";
// import { Button } from "@mui/material";

// export default function Custom404() {
//   return (
//     <div className="flex flex-col items-center justify-center h-screen text-center p-4">
//       <h1 className="text-4xl font-bold text-red-600 mb-4">
//         ৪০৪ - পৃষ্ঠা খুঁজে পাওয়া যায়নি
//       </h1>
//       <p className="text-gray-600 mb-6">
//         দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন তা পাওয়া যায়নি।
//       </p>
//       <Link href="/">
//         <Button>হোমপেইজে ফিরে যান</Button>
//       </Link>
//     </div>
//   );
// }

"use client";

import { Box, Typography, Button, Container } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", py: 10 }}>
      {/* Branding */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Box display="flex" alignItems="center" justifyContent="center" mb={2}>
          <Image
            src="/images/bebsabanijjo22.PNG"
            alt="Logo"
            width={40}
            height={40}
          />
          <Typography variant="h5" ml={1} fontWeight="bold">
            ব্যবসা বাণিজ্য
          </Typography>
        </Box>
      </motion.div>

      {/* Illustration */}
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Image
          src="/images/404.jpg" // Replace with your own SVG or PNG
          alt="404 Illustration"
          width={300}
          height={200}
          style={{ marginBottom: 24 }}
        />
      </motion.div> */}

      {/* Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Typography variant="h3" color="error" gutterBottom>
          ৪০৪ - পৃষ্ঠা খুঁজে পাওয়া যায়নি
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          দুঃখিত, আপনি যে পৃষ্ঠাটি খুঁজছেন তা নেই।
        </Typography>
        <Link href="/" passHref>
          <Button variant="contained" color="primary">
            হোমপেইজে ফিরে যান
          </Button>
        </Link>
      </motion.div>
    </Container>
  );
}
