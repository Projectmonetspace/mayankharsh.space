export const site = {
  name: "Mayank Harsh",
  url: "https://mayankharsh.space",
  description:
    "Mayank Harsh is a creative director and social media strategist working across art, culture, emotion, and social storytelling.",
  instagram: "https://www.instagram.com/sl6dl7/",
  agency: "https://projectmonet.com",
  email: "contact@mayankharsh.space",
} as const;

export const work = [
  {
    title: "@sl6dl7",
    kind: "Personal creator practice",
    summary:
      "Art, literature and emotion expressed through short-form storytelling.",
    href: "/work/sl6dl7",
    external: site.instagram,
  },
] as const;

export const publishedRoutes = [
  "/",
  "/work",
  "/work/sl6dl7",
  "/about",
  "/expertise/creative-direction",
  "/expertise/social-media-strategy",
  "/project-monet",
  "/contact",
] as const;
