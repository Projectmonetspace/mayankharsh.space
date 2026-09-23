import Link from "next/link";
import { InnerPage } from "@/app/components/InnerPage";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Social Media Strategy",
  "Mayank Harsh’s approach to social media strategy: positioning, formats, hooks, audience behavior, distribution, and iteration.",
  "/expertise/social-media-strategy",
);
export default function SocialStrategy() {
  return (
    <InnerPage
      eyebrow="Expertise / 02"
      title="Social media strategy"
      intro="A social strategy connects what a person or brand wants to say with the formats people actually choose to spend time with."
    >
      <div className="prose-section">
        <h2>Positioning and format</h2>
        <div>
          <p>
            Begin with a clear point of view and the audience it serves. From
            there, choose repeatable formats and entry points that make the work
            recognizable without making every post identical.
          </p>
          <p>
            A hook invites attention; the rest of the piece has to earn it.
            Creative direction gives the format its visual and narrative
            character.
          </p>
        </div>
      </div>
      <div className="prose-section">
        <h2>Distribution and learning</h2>
        <div>
          <p>
            Publishing is part of the process, not the finish. Audience
            response, context, and what people choose to share can guide
            subsequent decisions. The goal is a coherent practice that can learn
            over time.
          </p>
          <p>
            See the <Link href="/work/sl6dl7">personal creator work</Link> for
            public context and{" "}
            <Link href="/expertise/creative-direction">creative direction</Link>{" "}
            for the craft behind the format.
          </p>
        </div>
      </div>
    </InnerPage>
  );
}
