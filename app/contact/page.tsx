import { ArrowUpRight } from "lucide-react";
import { InnerPage } from "../components/InnerPage";
import { site } from "@/lib/site";
import { pageMetadata } from "@/lib/metadata";
export const metadata = pageMetadata(
  "Contact",
  "Contact Mayank Harsh about creative direction, social strategy, creator work, or a collaboration.",
  "/contact",
);
export default function Contact() {
  return (
    <InnerPage
      eyebrow="Contact / Start a conversation"
      title="Let's talk."
      intro="For a project, collaboration, or a thoughtful question, write directly to Mayank."
    >
      <div className="prose-section">
        <h2>By email</h2>
        <div>
          <a className="contact-direct" href={`mailto:${site.email}`}>
            {site.email} <ArrowUpRight size={25} aria-hidden />
          </a>
          <p style={{ marginTop: 26 }}>
            Share a little about the idea and how to reach you. There is no
            tracking or contact form on this preview.
          </p>
        </div>
      </div>
      <div className="prose-section">
        <h2>Creator work</h2>
        <div>
          <p>
            You can also view the public work at{" "}
            <a href={site.instagram} target="_blank" rel="noopener noreferrer">
              @sl6dl7 on Instagram
            </a>
            .
          </p>
        </div>
      </div>
    </InnerPage>
  );
}
