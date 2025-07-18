//2nd ****************************************************************************************************
"use client";

import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Tooltip,
  Switch,
  FormControlLabel,
} from "@mui/material";
import { useState } from "react";
import { motion } from "framer-motion";
import CheckIcon from "@mui/icons-material/Check";
// import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CampaignIcon from "@mui/icons-material/Campaign";
// import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

const plans = [
  {
    name: "Simple Start",
    price: { monthly: 2309, yearly: 1154 },
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
    name: "Essentials",
    price: { monthly: 3403, yearly: 1701 },
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
    name: "Plus",
    price: { monthly: 4861, yearly: 2431 },
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
    name: "Advanced",
    price: { monthly: 9236, yearly: 4618 },
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
      "Customise role permissions",
      "Manage users (up to 25)",
      "Automate workflows",
      "Custom reporting fields",
    ],
  },
];

export default function PricingSection() {
  const [yearly, setYearly] = useState(false);

  return (
    <Box py={12} bgcolor="#f9fafb">
      <Container>
        <Typography variant="h4" align="center" fontWeight={700} gutterBottom>
          Find a plan that&apos;s right for you
        </Typography>
        <Typography align="center" mb={3}>
          ⭐⭐⭐⭐⭐ 6,240+ reviews Capterra
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
            <Typography>Free guided setupa</Typography>
          </Box>
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          gap={2}
          mb={5}
        >
          <Tooltip title="Save up to 50% when billed yearly!">
            <Typography color="textSecondary">Monthly</Typography>
          </Tooltip>
          <FormControlLabel
            control={
              <Switch checked={yearly} onChange={() => setYearly(!yearly)} />
            }
            label={yearly ? "Yearly" : "Monthly"}
          />
        </Box>

        <Grid container spacing={4}>
          {plans.map((plan, idx) => (
            <Grid size={{ xs: 12, md: 3 }} key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <Box p={4} bgcolor="#fff" borderRadius={2} boxShadow={2}>
                  <Typography
                    variant="h6"
                    align="center"
                    fontWeight={600}
                    gutterBottom
                  >
                    {plan.name}
                  </Typography>
                  <Typography
                    align="center"
                    sx={{
                      textDecoration: "line-through",
                      color: "gray",
                      fontSize: "0.85rem",
                    }}
                  >
                    BDT {plan.price.monthly}
                  </Typography>
                  <Typography align="center" mb={1}>
                    <span style={{ fontSize: "0.8rem" }}>BDT </span>
                    <span style={{ fontSize: "1.75rem", fontWeight: 600 }}>
                      {plan.price[yearly ? "yearly" : "monthly"]}
                    </span>
                    <span style={{ fontSize: "0.8rem" }}>/mo</span>
                  </Typography>
                  <Typography align="center" fontSize="0.8rem" color="green">
                    Save BDT{plan.save}/mo for 3 months
                  </Typography>
                  <Box mt={2} mb={2} display="flex" justifyContent="center">
                    <Button variant="contained" color="success">
                      Select plan
                    </Button>
                  </Box>
                  <Box>
                    {plan.features.map((feature, i) => (
                      <Box
                        display="flex"
                        alignItems="start"
                        gap={1}
                        key={i}
                        mb={1}
                      >
                        <CheckIcon fontSize="small" color="success" />
                        <Typography variant="body2">{feature}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
