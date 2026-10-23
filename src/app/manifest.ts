import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Zyntaverse Technologies — Full-Stack Technology Partner",
    short_name: "Zyntaverse",
    description:
      "Innovate • Build • Scale. Top-tier web & app development, AI chatbots, data analytics, and cloud solutions based in Mumbai, India.",
    start_url: "/",
    display: "standalone",
    background_color: "#080b11",
    theme_color: "#080b11",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
