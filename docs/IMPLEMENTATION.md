# Implementation decisions

The owner’s Vantage MD, Appendix A and supplied screenshot govern this clean implementation. All twelve Notion OS pages (00–11) were read before implementation. The target main tree was empty at 2c658f3444285e05aac5c26e6876f8f3eb82b646; no prior website code was restored.

## Design

The exact supplied CloudFront video is used with a poster extracted from the footage. Reduced motion, offscreen visibility and user pause stop playback. Original Reel links open Instagram rather than claiming an on-site creator video.

Reference Display and Reference Sans had no supplied licensed assets. The documented substitutes are locally hosted Bodoni Moda 500 and Manrope, with their included Google Fonts OFL licenses. The social image uses a static Manrope 500 instance of that variable font.

Vantage geometry, vignette, glass and entrance timing are translated into React/CSS. The mobile second-line scale is .793 rather than .55 because the approved text is substantially shorter. The primary CTA uses smaller text to fit “Explore Work” in the reference width. The hero is viewport-contained while the document scrolls normally. A small motion control supports accessibility.

## Evidence

The Notion registry contained unverified placeholders. Unsupported totals, testimonials, clients, awards, sales, causal outcomes and trend claims are omitted.

Six unchanged covers come from the owner’s public Projectmonetspace/projectmonet-instagram repository. Its app/lib/reel-proof.ts and https://www.projectmonet.com/ attribute them to founder/creator @sl6dl7. This is owner-published proof, not independent verification or live Instagram analytics. Snapshot reviewed 25 September 2026:

| Original Reel | Views | Likes |
|---|---:|---:|
| C093-LuKwqW | 9.5M | 685K |
| CzuANP0K5ML | 4.2M | 236K |
| C3xkNnAoWa_ | 3.6M | 290K |
| CrodTefqiKm | 3.6M | 340K |
| CzpAg5nKgWc | 3.2M | 247K |
| CytnwFRq0c2 | 2.5M | 217K |

Each links to its original Instagram Reel. Editorial cover titles are descriptions, not campaign names. The case study distinguishes visible-work observations from claims about process or causality. Personal creator figures remain separate from agency outcomes. Expertise pages describe an approach without claiming undocumented engagements. Contact uses the public contact@mayankharsh.space email, without response-time or delivery claims.

## Architecture

Eight static public routes plus branded 404, sitemap, robots, manifest, appropriate structured data, unique metadata and social image. Small client components handle navigation, video and rail. Native gallery overflow does not cancel vertical wheel/touch events. Duplicate content is inert and hidden from assistive technology. Reduced motion disables automatic movement; hover/focus pause it and manual interaction delays resumption.

No analytics, tracking cookies, form backend or credentials. CSP allows the exact media CDN, local assets and Next inline scripts/styles; no strict nonce protection is claimed. Permissions Policy disables camera, microphone, location and payment. X-Powered-By is disabled.

## Before production cutover

Review font substitutes and continued use of the supplied reference video, or supply replacement licensed assets. Review snapshot figures and contact details. Analytics are unconfigured. The custom domain must remain untouched until explicitly approved.
