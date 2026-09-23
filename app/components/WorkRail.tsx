"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
const frames = [
  {
    number: "01",
    label: "Art",
    detail: "A visual language for the personal creator practice.",
  },
  {
    number: "02",
    label: "Literature",
    detail: "Writing and literary references in social storytelling.",
  },
  {
    number: "03",
    label: "Emotion",
    detail: "The human feeling at the center of the work.",
  },
] as const;
function Frame({
  item,
  clone = false,
}: {
  item: (typeof frames)[number];
  clone?: boolean;
}) {
  return (
    <div className="rail-card" aria-hidden={clone || undefined}>
      <div
        className="rail-frame"
        role={clone ? undefined : "img"}
        aria-label={
          clone
            ? undefined
            : `${item.label} category, approved work image pending selection`
        }
      >
        <span className="rail-frame-top">@sl6dl7</span>
        <strong>{item.label}</strong>
        <span className="rail-frame-bottom">Approved frame to be added</span>
      </div>
      {!clone && (
        <div className="rail-caption">
          <div>
            <span>{item.number} / Personal creator practice</span>
            <p>{item.detail}</p>
          </div>
          <Link
            href="/work/sl6dl7"
            aria-label={`Read @sl6dl7 case study: ${item.label}`}
          >
            <ArrowUpRight size={20} aria-hidden />
          </Link>
        </div>
      )}
    </div>
  );
}
export function WorkRail() {
  const [paused, setPaused] = useState(false);
  return (
    <div
      className="rail-window"
      role="region"
      aria-label="Selected work themes. Scroll horizontally to explore."
      tabIndex={0}
      onPointerDown={() => setPaused(true)}
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
      }}
      onWheel={() => setPaused(true)}
    >
      <div className={`rail-track ${paused ? "rail-track--paused" : ""}`}>
        <div className="rail-group">
          {frames.map((f) => (
            <Frame key={f.number} item={f} />
          ))}
        </div>
        <div className="rail-group" aria-hidden="true">
          {frames.map((f) => (
            <Frame key={f.number} item={f} clone />
          ))}
        </div>
      </div>
    </div>
  );
}
