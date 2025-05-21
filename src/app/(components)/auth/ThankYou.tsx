"use client";
import React from "react";
import { Box, Button, Typography, Paper, Divider } from "@mui/material";
import { useRouter } from "next/navigation";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

interface ThankYouProps {
  username?: string;
  password?: string;
}

const ThankYou: React.FC<ThankYouProps> = ({ username, password }) => {
  const router = useRouter();

  const handleGoToDashboard = () => {
    router.push("/"); // Update path as needed
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2,
      }}
    >
      <Paper
        elevation={4}
        sx={{
          maxWidth: 500,
          width: "100%",
          textAlign: "center",
          p: 5,
          borderRadius: 4,
          bgcolor: "white",
        }}
      >
        <CheckCircleIcon sx={{ fontSize: 60, color: "#4caf50", mb: 2 }} />

        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Thank You for Registering!
        </Typography>

        <Typography variant="body1" sx={{ color: "gray.700", mb: 3 }}>
          Your account has been successfully created. Please save your login
          credentials below.
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Box
          sx={{
            bgcolor: "#f9fafb",
            p: 2,
            borderRadius: 2,
            border: "1px solid #e0e0e0",
            textAlign: "left",
            mb: 3,
          }}
        >
          <Typography variant="subtitle1">
            <strong>Username:</strong> {username || "N/A"}
          </Typography>
          <Typography variant="subtitle1">
            <strong>Password:</strong> {password || "N/A"}
          </Typography>
        </Box>

        <Button
          variant="contained"
          color="primary"
          onClick={handleGoToDashboard}
          fullWidth
          sx={{ mt: 2, py: 1.5 }}
        >
          🚀 Login to Your Account
        </Button>
      </Paper>
    </Box>
  );
};

export default ThankYou;
