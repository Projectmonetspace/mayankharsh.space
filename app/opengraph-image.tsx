import { ImageResponse } from "next/og";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: "linear-gradient(125deg,#0b0b0d 45%,#17353a)",
        color: "#f5f2ec",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ fontSize: 30, fontWeight: 600 }}>Mayank Harsh</div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 92,
          lineHeight: 1.05,
          letterSpacing: -4,
        }}
      >
        <span>Between the art</span>
        <span>and the audience.</span>
      </div>
      <div style={{ fontSize: 22, color: "#bac5c2" }}>
        Creative Direction &amp; Social Storytelling
      </div>
    </div>,
    size,
  );
}
