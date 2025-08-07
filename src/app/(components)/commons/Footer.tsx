"use client";
import { useEffect, useState } from "react";
import { Typography, Link, IconButton } from "@mui/material";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);
  return (
    <footer className="bg-gray-100 pt-10">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 pb-10 items-center">
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-2">
            <Image
              src="/images/bebsabanijjo22.PNG"
              alt="bebsabanijjo Logo"
              width={50}
              height={50}
            />
            <Typography variant="h5" className="font-bold">
              ব্যবসা বাণিজ্য
            </Typography>
          </div>
          <Typography variant="subtitle1" color="textSecondary">
            We are the solution, you can trust.
          </Typography>
        </div>

        {/* Right: Contact + Social Media */}
        <div className="flex flex-col items-start md:items-end gap-2">
          <Typography variant="h5" className="font-bold">
            Contact Us
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Email: query@bangochain.com
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Phone: +8801784285243
          </Typography>

          {/* Social Media Icons */}
          <div className="flex gap-3 pt-2">
            <Link href="https://facebook.com" target="_blank">
              <IconButton color="primary">
                <FacebookIcon />
              </IconButton>
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <IconButton color="primary">
                <TwitterIcon />
              </IconButton>
            </Link>
            <Link href="https://linkedin.com" target="_blank">
              <IconButton color="primary">
                <LinkedInIcon />
              </IconButton>
            </Link>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300"></div>
      <div className="text-center py-6 text-gray-500 text-sm">
        <Typography variant="body2" color="textSecondary">
          © {year} Bangochain Labs. All rights reserved.
        </Typography>
      </div>
    </footer>
  );
}
