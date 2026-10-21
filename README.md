# Advertising & More — Client Deliverables

Work developed in phases for **Advertising & More Sdn. Bhd.**
Main website: [advertisingandmore.com](https://advertisingandmore.com)

This repository is the working source and client-preview hub for the
deliverables requested by the client. Items are completed one at a time in
the agreed delivery order, reviewed here, and merged into the main website
(or handed over) after client approval.

## Delivery schedule & status

Schedule received: **21 October 2026** · Progress: **2 of 5 completed (40%)**

| No. | Deliverable | Type | Date | Time | Status | Output |
|-----|-------------|------|------|------|--------|--------|
| 1 | Event & Party Rentals page | Web page | 21 October 2026 | TBC | ✅ Completed | [`party-services-rentals.html`](party-services-rentals.html) |
| 2 | Job Vacancy page | Web page | 21 October 2026 | TBC | ✅ Completed | [`job-vacancy-page.html`](job-vacancy-page.html) |
| 3 | Business Card design | Design | 22 October 2026 | TBC | 🗓️ Scheduled | To be added |
| 4 | Email signoff design | Design | 22 October 2026 | TBC | 🗓️ Scheduled | To be added |
| 5 | Maldives Corporate Conference brochure | Brochure | 23 October 2026 | TBC | 🗓️ Scheduled | To be added |

TBC = time to be confirmed by the client.

Full details, a timeline by date and the status guide are maintained in
[DELIVERY-SCHEDULE.md](DELIVERY-SCHEDULE.md). A visual version of this tracker
is the [preview index page](index.html).

## Repository structure

```text
advertisingandmore/
├── index.html                  Delivery tracker (visual preview index)
├── party-services-rentals.html Deliverable 1 — Event & Party Rentals page
├── job-vacancy-page.html      Deliverable 2 — Job Vacancy page
├── manifest.webmanifest       Web app manifest used by the Job Vacancy page
├── app-icon-192.png           Job Vacancy page app icon (192 × 192)
├── app-icon-512.png           Job Vacancy page app icon (512 × 512)
├── sw.js                      Service worker used by the Job Vacancy page
├── DELIVERY-SCHEDULE.md        Schedule, timeline and status tracking
├── robots.txt                  Blocks search indexing while this is a preview
├── .nojekyll                   Tells GitHub Pages to serve the files as-is
├── .gitignore
└── README.md
```

Each web page is delivered as a single HTML file with embedded CSS,
JavaScript, fonts and images. The Job Vacancy page also uses the small
manifest, icon and service-worker files listed above. There is no build step.

## Preview locally

Option A — open `index.html` in a browser.

Option B — run a small local server (recommended, closest to production):

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000/`.

> Note: several sections are rendered with JavaScript, so the pages must be
> opened in a real browser. In-app document previews (WhatsApp, mail or drive
> viewers) do not run JavaScript and will show those sections empty.

## Client preview with GitHub Pages

1. In the GitHub repository, go to **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select branch **`main`** and folder **`/(root)`**, then **Save**.
4. The preview will be published at:

```text
https://tezofy.github.io/advertisingandmore/
https://tezofy.github.io/advertisingandmore/party-services-rentals.html
https://tezofy.github.io/advertisingandmore/job-vacancy-page.html
```

Send the first link for the full delivery tracker, the second link for a
direct review of Deliverable 1, or the third link for Deliverable 2.

## Completing the next deliverable

1. Add the finished output at the repository root with a lowercase,
   hyphenated English file name, e.g. `new-page-name.html` for a web page
   or `business-card-design.png` / `.pdf` for a design output.
2. Update the status and output link in the table above and in
   [DELIVERY-SCHEDULE.md](DELIVERY-SCHEDULE.md), including the progress count
   and the "Last updated" date.
3. Update the matching card in `index.html` (status badge and, once the output
   exists, an Open/View link).
4. For web pages, test on a phone viewport (360–430 px), a tablet (768 px)
   and desktop (1280–1440 px) before committing. For design outputs, check
   the exported file at 100% zoom.
5. Commit with a short English message, e.g. `Add Business Card design`, and push.
   GitHub Pages redeploys automatically within a few minutes.

## Production notes

- GitHub Pages from this repository is a **preview/staging** environment only.
  The production website remains [advertisingandmore.com](https://advertisingandmore.com).
- `robots.txt` blocks search engines while the preview is public. Remove it
  (and the `noindex` meta tag in `index.html`) only if this repository is ever
  deployed as the production website.
- Never commit passwords, API keys, hosting credentials or client-private
  documents to this repository.

## Copyright

© Advertising & More Sdn. Bhd. All rights reserved.
This is proprietary client work. No open-source license is granted, and the
contents may not be copied or reused without written permission.
