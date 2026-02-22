# 4Jolt

Modern, minimalist blog and information-sharing website prototype for **4Jolt**.

## Included Features

- Transparent sticky top header with placeholder **4Jolt** logo and customizable menu types.
- Search panel and customizable hamburger menu.
- Rotational-style horizontal carousel with customizable images and links.
- Top/middle/bottom horizontal ad banners + left/right vertical ad spaces.
- Category grid (2 rows x 4 cards by default) and post grid cards.
- Category and post detail pages with back-linking.
- Admin panel to dynamically configure:
  - header menu items
  - hamburger items
  - carousel
  - ads
  - categories
  - posts
- Post type + category mapping per post.
- Post scheduling / auto-publish.
- User role management model (Editor, Moderator, Admin).
- Analytics summary dashboard (simple counters placeholder).
- Backup/export via JSON download.
- Google Analytics integration with `G-55J03WQV8W`.

## Run locally

```bash
python3 -m http.server 8000
```

Then open:
- `http://localhost:8000/index.html`
- `http://localhost:8000/admin.html`

## Notes

- Data is persisted in browser `localStorage` as `fourJoltData`.
- This is a frontend-focused prototype with a client-side admin panel.
