import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { site } from "@/lib/site";
export function Footer() {
  return (
    <footer className="site-footer">
      <Link className="footer-name" href="/">
        Mayank Harsh
      </Link>
      <div>
        <p>Creative direction. Social storytelling.</p>
        <p>© {new Date().getUTCFullYear()} Mayank Harsh</p>
      </div>
      <nav aria-label="Footer">
        <Link href="/work">Work</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <a href={site.instagram} target="_blank" rel="noopener noreferrer">
          Instagram <ArrowUpRight size={13} aria-hidden />
        </a>
      </nav>
    </footer>
  );
}
