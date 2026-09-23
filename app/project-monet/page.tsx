import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { InnerPage } from "../components/InnerPage";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Project Monet",
  "Mayank Harsh is the founder and creative director of Project Monet, a separate agency from this personal portfolio.",
  "/project-monet",
);
export default function ProjectMonet() {
  return (
    <InnerPage
      eyebrow="Founder context / Project Monet"
      title="One person. A separate agency."
      intro="Mayank Harsh is the founder and creative director of Project Monet. This site is his personal creative portfolio; Project Monet has its own services, work, and website."
    >
      <div className="prose-section">
        <h2>The relationship</h2>
        <div>
          <p>
            Mayank&apos;s creator work on this site is attributed to him
            personally. Agency campaigns and client results belong in Project
            Monet&apos;s own context unless a specific role and its evidence are
            documented here.
          </p>
          <p>
            For the agency, visit{" "}
            <a href={site.agency} target="_blank" rel="noopener noreferrer">
              projectmonet.com <ArrowUpRight size={15} aria-hidden />
            </a>
            . For Mayank&apos;s personal work,{" "}
            <Link href="/work">explore the portfolio</Link>.
          </p>
        </div>
      </div>
    </InnerPage>
  );
}
