import Link from "next/link";
import { InnerPage } from "../components/InnerPage";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "About",
  "Who is Mayank Harsh? A creative director and social media strategist with a personal creator practice shaped by art, literature, music, culture, and emotion.",
  "/about",
);
export default function About() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: { "@id": `${site.url}/#person` },
    url: `${site.url}/about`,
    name: "About Mayank Harsh",
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
      <InnerPage
        eyebrow="About / Mayank Harsh"
        title="A creative practice with many references."
        intro="Mayank Harsh works in creative direction, social media strategy, and personal creator work. His interests in art, literature, music, culture, and emotion shape the stories he chooses to tell."
      >
        <div className="prose-section">
          <h2>Who is Mayank?</h2>
          <div>
            <p>
              Mayank is a creative director and social media strategist. His
              personal creator work includes{" "}
              <Link href="/work/sl6dl7">@sl6dl7</Link>, an account associated
              with art, literature, and emotional storytelling.
            </p>
            <p>
              He is also the founder and creative director of{" "}
              <Link href="/project-monet">Project Monet</Link>, a separate
              agency. This site presents his personal practice and the work
              attributed to him.
            </p>
          </div>
        </div>
        <div className="prose-section">
          <h2>How he approaches work</h2>
          <div>
            <p>
              He thinks about the relationship between a creative idea, the form
              it takes, and the people who encounter it. Visual direction,
              words, pacing, and distribution each affect that relationship.
            </p>
            <p>
              Explore his approach to{" "}
              <Link href="/expertise/creative-direction">
                creative direction
              </Link>{" "}
              and{" "}
              <Link href="/expertise/social-media-strategy">
                social media strategy
              </Link>
              , or <Link href="/contact">start a conversation</Link>.
            </p>
          </div>
        </div>
      </InnerPage>
    </>
  );
}
