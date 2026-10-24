# Xiangju Mi — Academic Homepage

Personal academic website built with HTML, CSS, and JavaScript. No build step
or package installation is required.

Live site: [xiangju-mi.github.io](https://xiangju-mi.github.io/).

## Structure

```text
index.html        Biography, research, publications, experience, and awards
styles.css        Typography, layout, themes, and responsive styles
script.js         Theme switching and publication video previews
visitors.js       MapMyVisitors loading, local-preview exclusion, and fallback
assets/
  images/         Portrait, publication figures, and institutional logos
  videos/         Publication demo clips
  fonts/          Lato fonts and their license
.nojekyll         Serve the site as plain static files
```

## Local preview

Run from the repository root:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open [localhost:8000](http://127.0.0.1:8000/).

## GitHub Pages

GitHub Pages publishes the repository root from `main`. Commit changes and
run `git push origin main` to update the site.

## Maintenance

- Edit content and the displayed update date in `index.html`.
- Keep local asset URLs relative so the site also works under a project path.
- Preserve image dimensions when replacing publication figures.

## Publishing privacy

- `.gitignore` is an explicit allowlist of this website's source and assets.
  New files stay ignored until deliberately added to that list.
- Never force-add chat/session exports, private documents, credentials, local
  paths, screenshots, or working/cache directories. Do not upload these through
  releases, issues, attachments, or other GitHub features either.
- Review staged filenames and content before every commit. Keep API tokens and
  other private credentials out of all public website files.
- Use a GitHub-provided `noreply` address for commit author and committer metadata.
  A fresh clone must configure its Git identity separately.

## Visitor map

The Visitors section uses [MapMyVisitors](https://mapmyvisitors.com/), the same
provider as the reference homepage. The public embed ID is configured in
`data-map-id` on `#visitors` in `index.html`; the statistics page is
[mapmyvisitors.com/web/1c928](https://mapmyvisitors.com/web/1c928).
To replace or reconfigure it:

1. Open [Create Widget](https://mapmyvisitors.com/add), enter
   `https://xiangju-mi.github.io/`, and sign in or register.
2. Choose the flat **Map** widget and copy the public `d` value from its embed
   URL. Set only `data-map-id` to that value. Do not paste a second script tag.
3. Publish to GitHub Pages and verify that the map links to statistics for
   **xiangju-mi.github.io**, with a real total pageview count.

The public section stays hidden until configured. Localhost previews show only
an empty map and an explicit preview label; they never load the tracking script.
Tracking loads asynchronously once per production page load, without requiring
a scroll to the footer. Theme changes and viewport resizes do not reload it.
The map uses the site's fonts and light/dark palette. Network failures display
an unavailable message instead of a false zero. No API keys are needed in this
public repository; the embed ID is public.

The widget uses `t=tt` for **Total Pageviews** since activation; detailed time
ranges are available by following the map or the View statistics link.
Keep the provider's exact count label: pageviews are not unique
people, and daily IP-based counts are not lifetime unique visitors. Data starts
at activation and cannot recover prior visits. Locations are approximate and
may reflect a VPN or proxy. See the provider's
[counting definitions](https://mapmyvisitors.com/b/visitor-counting-metrics) and
[privacy policy](https://mapmyvisitors.com/b/policy). The service receives IP,
browser, page/referrer, and visit metadata. The on-page provider link points to
that policy.

## Third-party assets

Lato is distributed under the [SIL Open Font License](assets/fonts/OFL-Lato.txt).
Publication figures, videos, and institutional logos belong to their respective
owners. This repository does not grant additional rights to those assets.
