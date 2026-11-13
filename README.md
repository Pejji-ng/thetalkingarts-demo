# TheTalkingArts

Website for TheTalkingArts, a premium print studio in Lagos (delivery nationwide).

- **Live site:** https://thetalkingarts.com
- **Hosting:** Cloudflare Pages project `tta-dazzle` (production branch `main`)
- **Deploy:** automatic. Any push to `main` deploys to production via GitHub Actions
  (`.github/workflows/deploy.yml`). No manual steps.

## Working on the site

All site files live at the repo root:

- `index.html` — the main page (self-contained: inline CSS + JS)
- `privacy.html` — privacy policy
- `_headers` — Cloudflare Pages headers
- `*.jpg` — images (cards, brand kit, og, packaging, etc.)

Edit, commit, and push to `main`. The deploy workflow stages everything except
repo metadata (`.git`, `.github`, this `README.md`) and the separate `wear/` and `clothing/` sites, and
publishes it to `thetalkingarts.com` within a minute or two.

To preview without going live, push to a different branch (it will build a
preview deployment, not production).

## TTA Wear (separate site)

The clothing and club-jersey shop lives in `wear/` and is **not part of the print site**.
It has its own Cloudflare Pages project and its own workflow, so nothing in `wear/` is ever
published to `thetalkingarts.com`.

- **Preview address:** https://tta-wear.pages.dev
- **Hosting:** Cloudflare Pages project `tta-wear`
- **Deploy:** `.github/workflows/deploy-wear.yml` publishes the `wear/` folder whenever a file
  in it changes.
- `wear/index.html` — the whole shop (self-contained: inline CSS + JS). Stock, prices and
  photos are edited in the `CATALOGUE` block at the top of its `<script>`; orders are sent as
  a WhatsApp message, so there is no backend.
- `wear/wear-img/` — real photos (WebP), the rail video and the share image
- `wear/_headers` — Cloudflare Pages headers for the shop

To put it on a subdomain such as `wear.thetalkingarts.com`: in Cloudflare, open the
`tta-wear` Pages project, go to Custom domains, and add the subdomain (Cloudflare creates
the CNAME record). Then change the four `tta-wear.pages.dev` addresses at the top of
`wear/index.html` to the new address so link previews and search engines use it.

## TTA Clothing (separate site)

The clothing label's own site lives in `clothing/`. Like TTA Wear, it is **not part of the
print site**: it has its own Cloudflare Pages project and workflow, and is excluded from the
print site's deploy.

- **Planned address:** https://clothing.thetalkingarts.com
- **Hosting:** Cloudflare Pages project `tta-clothing`
- **Deploy:** `.github/workflows/deploy-clothing.yml` publishes the `clothing/` folder whenever a
  file in it changes.
- `clothing/index.html` — the whole site (self-contained: inline CSS + JS). Pieces, prices,
  photos and the lines the hero tee cycles through are edited in the `CATALOGUE` block at the
  top of its `<script>`. Orders are sent as a WhatsApp message, so there is no backend.
- `clothing/img/` — real photos of the cap and the share image
- `clothing/_headers` — Cloudflare Pages headers
- The bubble TTA mark in the page is a vector traced from a photo of the cap. If you have the
  original artwork, replace the path inside `<symbol id="tta">`.

To put it on the subdomain: in Cloudflare, open the `tta-clothing` Pages project, go to
Custom domains, and add `clothing.thetalkingarts.com` (Cloudflare creates the CNAME record).
