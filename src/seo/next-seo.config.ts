// src/seo/next-seo.config.ts

import { DefaultSeoProps } from "next-seo";

const config: DefaultSeoProps = {
  title: "Your Website Title",
  titleTemplate: "%s | Your Brand Name",
  defaultTitle: "Your Default Title",
  description: "Your website description for search engines.",
  canonical: "https://yourwebsite.com",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    siteName: "Your Brand Name",
    images: [
      {
        url: "https://yourwebsite.com/your-og-image.png",
        width: 1200,
        height: 630,
        alt: "Your OG Image Alt",
      },
    ],
  },
  twitter: {
    handle: "@yourtwitterhandle",
    site: "@yourtwitterhandle",
    cardType: "summary_large_image",
  },
};

export default config;
