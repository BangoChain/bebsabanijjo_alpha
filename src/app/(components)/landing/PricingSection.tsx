"use client";

import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Stack,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import CheckIcon from "@mui/icons-material/Check";
import { motion } from "framer-motion";

import CampaignIcon from "@mui/icons-material/Campaign";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
const plans = [
  {
    title: "Starter",
    monthly: 1154,
    save: 1155,
    features: [
      "Track income & expenses",
      "Send unlimited custom invoices & quotes",
      "Connect your bank",
      "Track GST and VAT",
      "Insights & reports",
      "Progress invoicing",
      "Up to 250 items in Chart of Accounts",
      "For one user, plus your accountant",
    ],
  },
  {
    title: "Essentials",
    monthly: 1701,
    save: 1702,
    features: [
      "Track income & expenses",
      "Send unlimited custom invoices & quotes",
      "Connect your bank",
      "Track GST and VAT",
      "Insights & reports",
      "Progress invoicing",
      "Up to 250 items in Chart of Accounts",
      "Manage bills & payments",
      "Track employee time",
      "Multi-currency",
      "For three users, plus your accountant",
    ],
  },
  {
    title: "Enterprise",
    monthly: 2431,
    save: 2430,
    features: [
      "Track income & expenses",
      "Send unlimited custom invoices & quotes",
      "Connect your bank",
      "Track GST and VAT",
      "Insights & reports",
      "Progress invoicing",
      "Up to 250 items in Chart of Accounts",
      "Manage bills & payments",
      "Track employee time",
      "Multi-currency",
      "Recurring transactions and bills",
      "Track inventory",
      "Manage budgets",
      "Up to 40 classes and locations",
      "For five users, plus your accountant",
    ],
  },
  {
    title: "Advanced",
    monthly: 4618,
    save: 4618,
    features: [
      "Track income & expenses",
      "Send unlimited custom invoices & quotes",
      "Connect your bank",
      "Track GST and VAT",
      "Insights & reports",
      "Progress invoicing",
      "UNLIMITED items in Chart of Accounts",
      "Manage bills & payments",
      "Track employee time",
      "Multi-currency",
      "Recurring transactions and bills",
      "Track inventory",
      "Manage budgets",
      "UNLIMITED classes and locations",
      "Data sync with Excel",
      "Customize role permissions",
      "Manage users (up to 25)",
      "Automate workflows",
      "Custom reporting fields",
    ],
  },
];
// bgcolor="#f9fafb"
const PricingSection = () => (
  <Box py={10} bgcolor="#f3f2ef">
    <Box textAlign="center" maxWidth="600px" mx="auto" mb={6}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Choose the Perfect Plan to Your Success
      </Typography>
      <Typography variant="body2" color="textSecondary" mb={2}>
        {/* <span className="text-green-600 text-3xl">
            ★★★★★ ★★★★☆⭐⭐⭐⭐<span className="opacity-50">⭐</span>
          </span> */}
        <span className="text-green-600 text-3xl">★★★★★</span>
        6,240+ reviews Capterra
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        gap={4}
        mb={3}
      >
        <Box display="flex" alignItems="center" gap={1}>
          <ChangeCircleIcon color="success" fontSize="small" />
          <Typography>Cancel anytime</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <CampaignIcon color="success" fontSize="small" />
          <Typography>Unlimited support</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <SettingsSuggestIcon color="success" fontSize="small" />
          <Typography>Free guided set up</Typography>
        </Box>
      </Box>
      {/* <Stack
        direction="row"
        justifyContent="center"
        spacing={4}
        alignItems="center"
        mb={3}
      >
        <Typography
          variant="body2"
          color="text.secondary"
          display="flex"
          alignItems="center"
          gap={0.5}
          fontSize="medium"
        >
          <ChangeCircleIcon color="success" fontSize="medium" />
          Cancel anytime
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          display="flex"
          alignItems="center"
          gap={0.5}
          fontSize="medium"
        >
          <CampaignIcon color="success" fontSize="small" />
          Unlimited support
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          display="flex"
          alignItems="center"
          gap={0.5}
          fontSize="medium"
        >
          <SettingsSuggestIcon color="success" fontSize="small" />
          Free guided setup
        </Typography>
      </Stack> */}
    </Box>

    <Grid
      container
      spacing={3}
      maxWidth="xl"
      mx="auto"
      justifyContent="center"
      px={3}
    >
      {plans.map((plan, idx) => {
        const original = plan.monthly + plan.save;
        return (
          <Grid item xs={12} md={6} xl={3} key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <Card elevation={4} sx={{ borderRadius: 3 }}>
                <CardContent>
                  <Typography variant="h6" align="center" gutterBottom>
                    {plan.title}
                  </Typography>
                  <Box textAlign="center" mb={2}>
                    <Typography
                      variant="body2"
                      sx={{
                        textDecoration: "line-through",
                        color: "text.secondary",
                      }}
                    >
                      BDT {original}
                    </Typography>
                    <Typography align="center" mb={1}>
                      <span style={{ fontSize: "0.8rem" }}>BDT </span>
                      <span style={{ fontSize: "1.75rem", fontWeight: 600 }}>
                        {plan.monthly}
                      </span>
                      <span style={{ fontSize: "0.8rem" }}>/mo</span>
                    </Typography>
                    <Typography variant="caption" color="green">
                      Save BDT {plan.save}/mo for 3 months
                    </Typography>
                  </Box>

                  <Button fullWidth variant="contained" sx={{ mb: 2 }}>
                    Select plan
                  </Button>

                  <Stack spacing={1}>
                    {plan.features.map((feature, i) => {
                      const prevFeatures =
                        idx > 0 ? plans[idx - 1].features : [];
                      const isNew = !prevFeatures.includes(feature);
                      return (
                        <Box
                          display="flex"
                          alignItems="flex-start"
                          gap={1}
                          key={i}
                        >
                          <CheckIcon fontSize="small" color="success" />
                          <Typography
                            variant="body2"
                            fontWeight={isNew ? "bold" : "normal"}
                          >
                            {feature}
                          </Typography>
                        </Box>
                      );
                    })}
                  </Stack>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        );
      })}
    </Grid>
  </Box>
);

export default PricingSection;

// with year and month ***************************************************************************************************************************
// "use client";

// import { useState } from "react";
// import {
//   Card,
//   CardContent,
//   Typography,
//   Grid,
//   Button,
//   Switch,
//   Tooltip,
//   FormControlLabel,
//   Box,
//   Stack,
// } from "@mui/material";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import { motion } from "framer-motion";

// const plans = [
//   {
//     title: "Simple Start",
//     monthly: 1154,
//     yearly: 2309,
//     save: 1155,
//     features: [
//       "Track income & expenses",
//       "Send unlimited custom invoices & quotes",
//       "Connect your bank",
//       "Track GST and VAT",
//       "Insights & reports",
//       "Progress invoicing",
//       "Up to 250 items in Chart of Accounts",
//       "For one user, plus your accountant",
//     ],
//   },
//   {
//     title: "Essentials",
//     monthly: 1701,
//     yearly: 3403,
//     save: 1702,
//     features: [
//       "Track income & expenses",
//       "Send unlimited custom invoices & quotes",
//       "Connect your bank",
//       "Track GST and VAT",
//       "Insights & reports",
//       "Progress invoicing",
//       "Up to 250 items in Chart of Accounts",
//       "Manage bills & payments",
//       "Track employee time",
//       "Multi-currency",
//       "For three users, plus your accountant",
//     ],
//   },
//   {
//     title: "Plus",
//     monthly: 2431,
//     yearly: 4861,
//     save: 2430,
//     features: [
//       "Track income & expenses",
//       "Send unlimited custom invoices & quotes",
//       "Connect your bank",
//       "Track GST and VAT",
//       "Insights & reports",
//       "Progress invoicing",
//       "Up to 250 items in Chart of Accounts",
//       "Manage bills & payments",
//       "Track employee time",
//       "Multi-currency",
//       "Recurring transactions and bills",
//       "Track inventory",
//       "Manage budgets",
//       "Up to 40 classes and locations",
//       "For five users, plus your accountant",
//     ],
//   },
//   {
//     title: "Advanced",
//     monthly: 4618,
//     yearly: 9236,
//     save: 4618,
//     features: [
//       "Track income & expenses",
//       "Send unlimited custom invoices & quotes",
//       "Connect your bank",
//       "Track GST and VAT",
//       "Insights & reports",
//       "Progress invoicing",
//       "UNLIMITED items in Chart of Accounts",
//       "Manage bills & payments",
//       "Track employee time",
//       "Multi-currency",
//       "Recurring transactions and bills",
//       "Track inventory",
//       "Manage budgets",
//       "UNLIMITED classes and locations",
//       "Data sync with Excel",
//       "Customise role permissions",
//       "Manage users (up to 25)",
//       "Automate workflows",
//       "Custom reporting fields",
//     ],
//   },
// ];

// const PricingSection = () => {
//   const [isYearly, setIsYearly] = useState(false);

//   return (
//     <Box py={10} bgcolor="#f9fafb">
//       <Box textAlign="center" maxWidth="600px" mx="auto" mb={6}>
//         <Typography variant="h4" fontWeight="bold" gutterBottom>
//           Find a plan that's right for you
//         </Typography>
//         <Typography variant="body2" color="textSecondary" mb={2}>
//           6,240+ reviews Capterra
//         </Typography>
//         <Stack
//           direction="row"
//           justifyContent="center"
//           spacing={3}
//           color="text.secondary"
//           mb={3}
//         >
//           <span>Cancel anytime</span>
//           <span>Unlimited support</span>
//           <span>Free guided setup</span>
//         </Stack>

//         <Stack
//           direction="row"
//           justifyContent="center"
//           alignItems="center"
//           spacing={2}
//         >
//           <Typography variant="body2">Monthly</Typography>
//           <Tooltip title="Save up to 50% when billed yearly">
//             <FormControlLabel
//               control={
//                 <Switch
//                   checked={isYearly}
//                   onChange={() => setIsYearly(!isYearly)}
//                 />
//               }
//               label="Yearly"
//               labelPlacement="end"
//             />
//           </Tooltip>
//         </Stack>
//       </Box>

//       <Grid container spacing={3} maxWidth="xl" mx="auto" px={3}>
//         {plans.map((plan, idx) => {
//           const price = isYearly ? plan.yearly : plan.monthly;
//           const original = isYearly ? plan.yearly : plan.monthly + plan.save;
//           const saveText = isYearly
//             ? ""
//             : `Save BDT${plan.save}/mo for 3 months`;

//           return (
//             <Grid item xs={12} md={6} xl={3} key={idx}>
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: idx * 0.2 }}
//                 viewport={{ once: true }}
//               >
//                 <Card elevation={4} sx={{ borderRadius: 3 }}>
//                   <CardContent>
//                     <Typography variant="h6" align="center" gutterBottom>
//                       {plan.title}
//                     </Typography>
//                     <Box textAlign="center" mb={2}>
//                       <Typography
//                         variant="body2"
//                         sx={{
//                           textDecoration: "line-through",
//                           color: "text.secondary",
//                         }}
//                       >
//                         BDT {original}
//                       </Typography>
//                       <Typography variant="h4" fontWeight="bold">
//                         <small>BDT</small> {price}
//                         <small>/mo</small>
//                       </Typography>
//                       {!isYearly && (
//                         <Typography variant="caption" color="green">
//                           {saveText}
//                         </Typography>
//                       )}
//                     </Box>

//                     <Button fullWidth variant="contained" sx={{ mb: 2 }}>
//                       Select plan
//                     </Button>

//                     <Stack spacing={1}>
//                       {plan.features.map((feature, i) => {
//                         const prevFeatures =
//                           idx > 0 ? plans[idx - 1].features : [];
//                         const isNew = !prevFeatures.includes(feature);
//                         return (
//                           <Box
//                             display="flex"
//                             alignItems="flex-start"
//                             gap={1}
//                             key={i}
//                           >
//                             <CheckCircleIcon fontSize="small" color="success" />
//                             <Typography
//                               variant="body2"
//                               fontWeight={isNew ? "bold" : "normal"}
//                             >
//                               {feature}
//                             </Typography>
//                           </Box>
//                         );
//                       })}
//                     </Stack>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             </Grid>
//           );
//         })}
//       </Grid>
//     </Box>
//   );
// };

// export default PricingSection;
