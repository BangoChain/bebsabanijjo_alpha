"use client";

import { Container, Typography } from "@mui/material";

export default function TestimonialsSection() {
  return (
    <section className="py-20">
      <Container maxWidth="md" className="text-center">
        <Typography variant="h4" className="mb-8 font-bold">
          What Our Customers Say
        </Typography>
        <Typography variant="h6" color="textSecondary">
          SaaSify changed the way we work. Our team productivity increased by
          40% within months!
        </Typography>
        <Typography variant="subtitle1" className="mt-4 text-primary">
          — Alex Johnson, CEO of TechCorp
        </Typography>
      </Container>
    </section>
  );
}
