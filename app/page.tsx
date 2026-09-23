import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Hero } from "./components/Hero";
import { WorkRail } from "./components/WorkRail";
import { Footer } from "./components/Footer";
import { site } from "@/lib/site";
export default function Home() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      description: site.description,
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      url: site.url,
      description: site.description,
      sameAs: [site.instagram, site.agency],
    },
  ];
  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <section
        id="selected-work"
        className="section work-section"
        aria-labelledby="selected-title"
      >
        <div className="section-head">
          <div>
            <p className="eyebrow">01 / The practice</p>
            <h2 id="selected-title">Selected Work</h2>
          </div>
          <Link className="text-link" href="/work">
            View the work <ArrowUpRight size={17} aria-hidden />
          </Link>
        </div>
        <p className="section-intro">
          An evolving creator practice across art, literature, and emotion. The
          original media selection is being prepared for this preview.
        </p>
        <WorkRail />
      </section>
      <section
        className="section feature-section"
        aria-labelledby="feature-title"
      >
        <div className="feature-aside">
          <p className="eyebrow">02 / Featured case study</p>
          <span className="feature-index">@sl6dl7</span>
        </div>
        <div className="feature-body">
          <h2 id="feature-title">A space for feeling, made for the feed.</h2>
          <p>
            Mayank&apos;s personal creator account brings art, literature, and
            emotional storytelling into social formats. Read the documented
            scope of the practice and follow the primary account for the work
            itself.
          </p>
          <Link className="text-link" href="/work/sl6dl7">
            Explore the case study <ArrowRight size={17} aria-hidden />
          </Link>
        </div>
      </section>
      <section className="section about-section" aria-labelledby="about-title">
        <p className="eyebrow">03 / The person behind the work</p>
        <h2 id="about-title">Between instinct and intention.</h2>
        <div className="about-columns">
          <p>
            Mayank Harsh works across creative direction, social media strategy,
            and personal creator work. Art, literature, music, culture, and
            emotion inform the way he thinks about stories in motion.
          </p>
          <Link href="/about" className="text-link">
            More about Mayank <ArrowRight size={17} aria-hidden />
          </Link>
        </div>
      </section>
      <section
        className="section expertise-section"
        aria-labelledby="expertise-title"
      >
        <div className="section-head">
          <div>
            <p className="eyebrow">04 / Areas of practice</p>
            <h2 id="expertise-title">Expertise</h2>
          </div>
        </div>
        <div className="expertise-list">
          <Link href="/expertise/creative-direction">
            <span>01</span>
            <h3>Creative direction</h3>
            <ArrowUpRight aria-hidden />
          </Link>
          <Link href="/expertise/social-media-strategy">
            <span>02</span>
            <h3>Social media strategy</h3>
            <ArrowUpRight aria-hidden />
          </Link>
        </div>
      </section>
      <section
        className="section agency-section"
        aria-labelledby="agency-title"
      >
        <p className="eyebrow">05 / Founder context</p>
        <h2 id="agency-title">Project Monet is a separate chapter.</h2>
        <p>
          Mayank is the founder and creative director of Project Monet. This
          portfolio focuses on his personal practice; the agency has its own
          work and website.
        </p>
        <Link className="text-link" href="/project-monet">
          The relationship <ArrowRight size={17} aria-hidden />
        </Link>
      </section>
      <section
        className="section contact-section"
        aria-labelledby="contact-title"
      >
        <p className="eyebrow">06 / Contact</p>
        <h2 id="contact-title">Have a story in mind?</h2>
        <Link href="/contact" className="button">
          Let&apos;s Talk <ArrowRight size={17} aria-hidden />
        </Link>
      </section>
      <Footer />
    </main>
  );
}
