# Xiangju Mi — Academic Homepage

Personal academic website built with HTML, CSS, and JavaScript. No build step
or package installation is required.

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

1. Create a repository named `<username>.github.io`, using your GitHub username.
2. Push this directory's contents to the repository's `main` branch, with
   `index.html` at the repository root.
3. In **Settings → Pages**, choose **Deploy from a branch**, then **main**
   and **/(root)**.

The site will be available at `https://<username>.github.io/`.
See the [GitHub Pages publishing documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Maintenance

- Edit content and the displayed update date in `index.html`.
- Keep local asset URLs relative so the site also works under a project path.
- Preserve image dimensions when replacing publication figures.

## Third-party assets

Lato is distributed under the [SIL Open Font License](assets/fonts/OFL-Lato.txt).
Publication figures, videos, and institutional logos belong to their respective
owners. This repository does not grant additional rights to those assets.
