# MayankHarsh.space

Personal portfolio built from the owner’s Vantage brief using Next.js App Router, React, TypeScript and bespoke CSS.

Use Node 24 and pnpm 11.19.0:

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm lint
pnpm typecheck
pnpm build
pnpm test
pnpm audit --prod --audit-level high
```

Tests start an isolated production server on port 4174. Set TEST_BASE_URL to check an existing preview. No secrets or database are required. Vercel previews are noindex; canonical URLs intentionally use https://mayankharsh.space.

Deploy the PR branch as a preview in the existing mayankharsh-space Vercel project for Projectmonetspace/mayankharsh.space. Keep the PR unmerged for review. Do not attach, transfer, redirect or move the custom domain without separate owner approval. Rollback means deploying the desired prior commit as another preview.

See [implementation decisions](docs/IMPLEMENTATION.md).
