"use client";

import { Button, Container, Typography } from "@mui/material";

export default function CTASection() {
  return (
    <section className="py-20 bg-primary text-white text-center">
      <Container maxWidth="md">
        <Typography variant="h4" className="mb-6 font-bold">
          Ready to scale your business?
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Get Started Today
        </Button>
      </Container>
    </section>
  );
}
