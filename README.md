# Xiangju Mi — Academic Homepage

Personal academic website built with HTML, CSS, and JavaScript. No build step
or package installation is required.

Live site: [xiangju-mi.github.io](https://xiangju-mi.github.io/).

## Structure

```text
index.html        Biography, research, publications, experience, and awards
styles.css        Typography, layout, themes, and responsive styles
script.js         Theme switching and publication video previews
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

## Third-party assets

Lato is distributed under the [SIL Open Font License](assets/fonts/OFL-Lato.txt).
Publication figures, videos, and institutional logos belong to their respective
owners. This repository does not grant additional rights to those assets.
