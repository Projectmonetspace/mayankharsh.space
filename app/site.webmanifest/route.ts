import { NextResponse } from "next/server";
export function GET() {
  return NextResponse.json(
    {
      name: "Mayank Harsh",
      short_name: "Mayank",
      start_url: "/",
      display: "standalone",
      background_color: "#0b0b0d",
      theme_color: "#0b0b0d",
      icons: [
        { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
    },
    { headers: { "Content-Type": "application/manifest+json" } },
  );
}
