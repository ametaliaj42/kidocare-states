# Kidocare States

Every Kidocare functionality in every state, the same hub as the Claude artifact "Kidocare States".
Live at https://kidocare-states-downloads.vercel.app/ and every download button there works for anyone.

- `index.html`: the hub
- `features.js`: every functionality, component and frame
- `live/`: one HTML file per functionality, plus shared `kidocare.css`, `kidocare.js` and avatars

Placeholder data. Both children are fictional.

## Review

Every feature and every main-flow frame (the minimal path, or the whole screen when a feature has no path) plus one status per row for every other row (whole screen and each component) starts as Proposed and has three buttons: Rejected (needs a comment), Approved and Done. Tapping the active button again returns it to Proposed.
Statuses are saved through `api/review.js` in a Vercel Blob store connected to this project (env `BLOB_READ_WRITE_TOKEN`), so everyone who opens the site sees the same ones. Without that store the choices stay in the viewer's browser only, and the page says so.
