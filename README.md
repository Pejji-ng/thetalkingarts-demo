# TheTalkingArts

Website for TheTalkingArts, a premium print studio in Lagos (delivery nationwide).

- **Live site:** https://thetalkingarts.com
- **Hosting:** Cloudflare Pages project `tta-dazzle` (production branch `main`)
- **Deploy:** automatic. Any push to `main` deploys to production via GitHub Actions
  (`.github/workflows/deploy.yml`). No manual steps.

## Working on the site

All site files live at the repo root:

- `index.html` — the main page (self-contained: inline CSS + JS)
- `wear.html` — TTA Wear, the clothing and club-jersey shop (self-contained: inline CSS + JS,
  served at `/wear`). Stock, prices and photos are edited in the `CATALOGUE` block at the top of
  its `<script>`; orders are sent as a WhatsApp message, so there is no backend.
- `wear-img/` — real TTA Wear photos (WebP), the rail video and the share image used by `wear.html`
- `privacy.html` — privacy policy
- `_headers` — Cloudflare Pages headers
- `*.jpg` — images (cards, brand kit, og, packaging, etc.)

Edit, commit, and push to `main`. The deploy workflow stages everything except
repo metadata (`.git`, `.github`, this `README.md`) and publishes it to
`thetalkingarts.com` within a minute or two.

To preview without going live, push to a different branch (it will build a
preview deployment, not production).
