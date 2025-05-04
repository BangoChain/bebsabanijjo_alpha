// "use client";

// import { Container, Grid, Paper, Typography } from "@mui/material";
// import { motion } from "framer-motion";

// const features = [
//   {
//     title: "Analytics",
//     description: "Understand your users and improve faster.",
//   },
//   {
//     title: "Automation",
//     description: "Save time with marketing and workflow automation.",
//   },
//   {
//     title: "Integrations",
//     description: "Connect your favorite tools seamlessly.",
//   },
// ];

// export default function FeaturesSection() {
//   return (
//     <section className="py-20 bg-gray-50">
//       <Container maxWidth="lg">
//         <Typography
//           variant="h4"
//           align="center"
//           gutterBottom
//           className="font-bold"
//         >
//           Features
//         </Typography>
//         <Grid container spacing={4} className="mt-10">
//           {features.map((feature, idx) => (
//             <Grid item xs={12} md={4} key={idx}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: idx * 0.2 }}
//                 viewport={{ once: true }}
//               >
//                 <Paper elevation={3} className="p-8 text-center rounded-lg">
//                   <Typography variant="h6" className="mb-4 text-primary">
//                     {feature.title}
//                   </Typography>
//                   <Typography variant="body1" color="textSecondary">
//                     {feature.description}
//                   </Typography>
//                 </Paper>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </section>
//   );
// }

// "use client";

// import { Container, Grid, Paper, Typography } from "@mui/material";
// import { motion } from "framer-motion";

// const features = [
//   {
//     title: "Analytics",
//     description: "Understand your users and improve faster.",
//   },
//   {
//     title: "Automation",
//     description: "Save time with marketing and workflow automation.",
//   },
//   {
//     title: "Integrations",
//     description: "Connect your favorite tools seamlessly.",
//   },
// ];

// export default function FeaturesSection() {
//   return (
//     <section className="py-20 bg-gray-50">
//       <Container maxWidth="lg">
//         <Typography
//           variant="h4"
//           align="center"
//           gutterBottom
//           className="font-bold"
//         >
//           Features
//         </Typography>
//         <Grid
//           container
//           columns={12}
//           columnSpacing={4}
//           rowSpacing={4}
//           className="mt-10"
//         >
//           {features.map((feature, idx) => (
//             <Grid key={idx} xs={12} sm={6} md={4}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: idx * 0.2 }}
//                 viewport={{ once: true }}
//               >
//                 <Paper elevation={3} className="p-8 text-center rounded-lg">
//                   <Typography variant="h6" className="mb-4 text-primary">
//                     {feature.title}
//                   </Typography>
//                   <Typography variant="body1" color="textSecondary">
//                     {feature.description}
//                   </Typography>
//                 </Paper>
//               </motion.div>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>
//     </section>
//   );
// }

"use client";

import { Container, Grid, Paper, Typography } from "@mui/material";
import { motion } from "framer-motion";

const features = [
  {
    title: "Analytics",
    description: "Understand your users and improve faster.",
  },
  {
    title: "Automation",
    description: "Save time with marketing and workflow automation.",
  },
  {
    title: "Integrations",
    description: "Connect your favorite tools seamlessly.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          className="font-bold"
        >
          Features
        </Typography>
        <Grid
          container
          columns={12}
          columnSpacing={4}
          rowSpacing={4}
          className="mt-10"
        >
          {features.map((feature, idx) => (
            <Grid
              key={idx}
              component="div"
              gridColumn={{ xs: "span 12", sm: "span 6", md: "span 4" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <Paper elevation={3} className="p-8 text-center rounded-lg">
                  <Typography variant="h6" className="mb-4 text-primary">
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {feature.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
