import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { InnerPage } from "../components/InnerPage";
import { WorkRail } from "../components/WorkRail";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Selected Work",
  "A view into Mayank Harsh’s personal creator practice and its art, literature, and social storytelling.",
  "/work",
);
export default function WorkPage() {
  return (
    <InnerPage
      eyebrow="Portfolio / Work"
      title="The work, in motion."
      intro="A documented personal creator practice. Individual reel and post media will appear here when the owner’s selection and source files are confirmed."
    >
      <section className="work-feature">
        <div className="rail-frame">
          <span className="rail-frame-top">Personal creator practice</span>
          <strong>@sl6dl7</strong>
          <span className="rail-frame-bottom">
            Original media selection pending
          </span>
        </div>
        <div>
          <p className="eyebrow">01 / Featured practice</p>
          <h2>Art, literature, emotion.</h2>
          <p>
            @sl6dl7 is Mayank&apos;s personal creator account. This case study
            describes its creative territory without treating unverified reach
            figures as current results.
          </p>
          <Link className="text-link" href="/work/sl6dl7">
            Read the case study <ArrowRight size={17} aria-hidden />
          </Link>
        </div>
      </section>
      <div className="prose-section">
        <h2>Work in progress</h2>
        <div>
          <p>
            The rail below is ready for approved reel and post frames. It
            currently shows practice themes so no unrelated imagery or invented
            projects are passed off as Mayank&apos;s work.
          </p>
          <WorkRail />
        </div>
      </div>
    </InnerPage>
  );
}
