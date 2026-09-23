import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Navigation } from "./Navigation";
const video =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204221_5339e40b-e73d-4ab0-9c65-79c18c66fd50.mp4";
export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster="/hero-poster.jpg"
        preload="metadata"
        aria-hidden="true"
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className="hero-shade" aria-hidden="true" />
      <Navigation hero />
      <div className="hero-content">
        <div className="hero-top">
          <p className="hero-label appear appear-1">
            Creative Direction &amp; Social Storytelling
          </p>
          <h1 id="hero-title" className="hero-title appear appear-2">
            Between the art
            <br />
            and the audience.
          </h1>
        </div>
        <div className="hero-bottom">
          <p className="hero-description appear appear-3">
            Creative direction and social strategy shaped by art, literature,
            music, culture, and emotion.
          </p>
          <Link
            className="button hero-button appear appear-4"
            href="#selected-work"
          >
            Explore Work <ArrowRight size={16} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}
