"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
const links = [
  ["Home", "/"],
  ["Work", "/work"],
  ["About", "/about"],
  ["Contact", "/contact"],
] as const;
export function Navigation({ hero = false }: { hero?: boolean }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);
  const close = () => setOpen(false);
  return (
    <header className={`site-nav ${hero ? "site-nav--hero" : ""}`}>
      <nav aria-label="Main navigation" className="nav-inner">
        <div className="nav-left">
          <Link href="/" className="wordmark" onClick={close}>
            Mayank Harsh
          </Link>
          <div className="nav-links">
            {links.map(([label, href]) => (
              <Link key={href} href={href}>
                {label}
              </Link>
            ))}
          </div>
        </div>
        <Link href="/contact" className="button button-small nav-talk">
          Let&apos;s Talk
        </Link>
        <button
          ref={toggle}
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <Menu
            aria-hidden
            className={`menu-icon ${open ? "menu-icon--hidden" : ""}`}
            size={23}
          />
          <X
            aria-hidden
            className={`menu-icon menu-icon--x ${open ? "" : "menu-icon--hidden"}`}
            size={23}
          />
        </button>
      </nav>
      <div
        id="mobile-menu"
        className={`mobile-menu ${open ? "mobile-menu--open" : ""}`}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="mobile-menu-inner">
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={close}>
              {label}
            </Link>
          ))}
          <Link className="button mobile-talk" href="/contact" onClick={close}>
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </header>
  );
}
