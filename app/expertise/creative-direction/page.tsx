import Link from "next/link";
import { InnerPage } from "@/app/components/InnerPage";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Creative Direction",
  "Mayank Harsh’s approach to creative direction: concept, visual language, narrative coherence, and format.",
  "/expertise/creative-direction",
);
export default function CreativeDirection() {
  return (
    <InnerPage
      eyebrow="Expertise / 01"
      title="Creative direction"
      intro="Creative direction gives a body of work a recognizable point of view. It connects an idea to its imagery, words, motion, and rhythm."
    >
      <div className="prose-section">
        <h2>From reference to form</h2>
        <div>
          <p>
            The starting point can be a feeling, an image, a piece of writing,
            or a cultural reference. The work is to decide what belongs in the
            story and how each choice strengthens its central idea.
          </p>
          <p>
            That direction carries through visual language, copy, pacing, and
            the way a series feels from one piece to the next.
          </p>
        </div>
      </div>
      <div className="prose-section">
        <h2>In social formats</h2>
        <div>
          <p>
            Small screens and short attention spans make clarity matter. A
            frame, a first line, a cut, or a pause can determine how a story is
            understood. Format decisions should follow the idea and the
            audience.
          </p>
          <p>
            Mayank&apos;s{" "}
            <Link href="/work/sl6dl7">personal creator practice</Link> is the
            documented public example on this site. For the distribution side,
            read{" "}
            <Link href="/expertise/social-media-strategy">
              social media strategy
            </Link>
            .
          </p>
        </div>
      </div>
    </InnerPage>
  );
}
