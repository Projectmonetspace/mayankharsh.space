import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { InnerPage } from "@/app/components/InnerPage";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return [{ slug: "sl6dl7" }];
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return slug === "sl6dl7"
    ? pageMetadata(
        "@sl6dl7 — Personal Creator Practice",
        "A case study of Mayank Harsh’s personal creator work across art, literature, and emotional social storytelling.",
        "/work/sl6dl7",
      )
    : { robots: { index: false, follow: false } };
}
export default async function CaseStudy({ params }: Props) {
  const { slug } = await params;
  if (slug !== "sl6dl7") notFound();
  const data = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": `${site.url}/work/sl6dl7#work`,
    name: "@sl6dl7 — Personal Creator Practice",
    url: `${site.url}/work/sl6dl7`,
    creator: { "@id": `${site.url}/#person` },
    description:
      "Personal creator work across art, literature, and emotional social storytelling.",
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
      <InnerPage
        eyebrow="Case study / Personal creator work"
        title="@sl6dl7"
        intro="An ongoing personal creator practice where Mayank explores art, literature, and emotion through social storytelling."
      >
        <nav className="bread" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/work">Work</Link>
          <span>/</span>
          <span>@sl6dl7</span>
        </nav>
        <div className="prose-section">
          <h2>Context &amp; role</h2>
          <div>
            <p>
              <strong>Context.</strong> This is Mayank&apos;s own creator
              account, not a client campaign.
            </p>
            <p>
              <strong>Role.</strong> Personal creative direction and social
              storytelling. The public account is the primary source for the
              published work.
            </p>
          </div>
        </div>
        <div className="prose-section">
          <h2>Creative territory</h2>
          <div>
            <p>
              The practice moves between visual art, literary references, and
              the language of emotion. Its portfolio presentation centers the
              work itself and the ideas behind it.
            </p>
            <p>
              The selected media, post-level dates, production details, and
              first-hand process notes need confirmation before a frame-by-frame
              breakdown is published.
            </p>
          </div>
        </div>
        <div className="prose-section">
          <h2>Result &amp; evidence</h2>
          <div>
            <p>
              View the public{" "}
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                @sl6dl7 Instagram account
              </a>{" "}
              for the work currently online. Specific follower, view, and trend
              figures are withheld pending dated source evidence.
            </p>
            <p className="case-note">
              Evidence boundary: this case study describes a personal creator
              practice. It does not claim client outcomes or attribute growth to
              a specific tactic.
            </p>
          </div>
        </div>
        <div className="prose-section">
          <h2>Related work</h2>
          <div>
            <p>
              Explore the <Link href="/work">selected work overview</Link> or
              read about Mayank&apos;s{" "}
              <Link href="/expertise/creative-direction">
                creative direction
              </Link>{" "}
              and{" "}
              <Link href="/expertise/social-media-strategy">
                social media strategy
              </Link>
              .
            </p>
            <a
              className="text-link"
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              View the original account <ArrowUpRight size={17} aria-hidden />
            </a>
          </div>
        </div>
      </InnerPage>
    </>
  );
}
