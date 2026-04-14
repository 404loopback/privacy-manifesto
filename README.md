# Privacy Manifesto

Blog Jekyll pour GitHub Pages avec le theme `jekyll-theme-console`.

Theme utilise: `https://github.com/b2a3e8/jekyll-theme-console`

## Structure

- `_config.yml` : configuration Jekyll
- `_posts/` : articles du blog
- `.github/workflows/pages.yml` : pipeline de build/deploiement GitHub Pages

## Lancer en local

Prerequis : Ruby + Bundler installes.

```bash
bundle install
bundle exec jekyll serve --livereload
```

Le site est ensuite disponible sur `http://127.0.0.1:4000/privacy-manifesto/`.

## Config theme

La configuration du theme est dans `_config.yml` :

- `remote_theme: b2a3e8/jekyll-theme-console`
- `plugins: [jekyll-remote-theme, jekyll-feed]`
- `style: dark` (options du theme: `dark`, `light`, `hacker`)
- `listen_for_clients_preferred_style: true`

## Ajouter un article

Creer un fichier dans `_posts/` au format :

`YYYY-MM-DD-mon-article.md`

avec un front matter minimal :

```yaml
---
title: "Titre de l'article"
date: 2026-04-14 10:00:00 +0200
---
```

## Deploiement GitHub Pages

Le workflow `.github/workflows/pages.yml` deploye automatiquement le site a chaque push sur `main`.

Dans GitHub : `Settings > Pages > Source = GitHub Actions`.

URL de production (project pages) :

`https://404loopback.github.io/privacy-manifesto/`
