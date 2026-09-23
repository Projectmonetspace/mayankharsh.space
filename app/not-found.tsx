import Link from "next/link";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
export default function NotFound() {
  return (
    <>
      <meta name="robots" content="noindex,nofollow" />
      <Navigation />
      <main id="main" className="inner-main">
        <div className="page-header">
          <p className="eyebrow">404 / Page not found</p>
          <h1>Lost between pages.</h1>
          <p className="page-intro">
            That address has no page here. Find your way back to the work.
          </p>
          <Link className="button" href="/work" style={{ marginTop: 40 }}>
            Explore Work
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
