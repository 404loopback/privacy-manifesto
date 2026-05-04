# Privacy Manifesto
## Structure

- `_config.yml` : configuration Jekyll
- `_config.dev.yml` : override local pour le `site.url`
- `_manifestos/` : collection des manifestes
- `_posts/` : articles du blog
- `_sass/`, `css/`, `js/`, `fonts/`, `img/` : assets Leonids
- `.github/workflows/pages.yml` : pipeline de build/deploiement GitHub Pages

## Lancer en local

Prerequis : Ruby + Bundler installes.

```bash
bundle install
bundle exec jekyll serve --livereload --config _config.yml,_config.dev.yml
```

Le site est ensuite disponible sur `http://127.0.0.1:4000/`.

## Config theme

La configuration du theme est dans `_config.yml`:

- `remote_theme: renyuanz/leonids@leonids-jekyll`
- `plugins: [jekyll-polyglot, jekyll-remote-theme, jekyll-seo-tag, jekyll-feed]`
- `owner.*` pour les infos sidebar
- `header_pages` pour les pages de navigation principales

## Config multilingue (Polyglot)

Configuration active:

- `languages: ["fr", "en"]`
- `default_lang: "fr"`
- `parallel_localization: true`

Conventions:

- Ajouter `lang: fr` ou `lang: en` dans le front matter.
- Pour une traduction, garder le meme `permalink` entre versions.
- Exemple: `index.md` (fr) et `index-en.md` (en) partagent `permalink: /`.

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

## Ajouter un manifeste

Creer un fichier dans `_manifestos/` (par exemple `YYYY-MM-DD-manifeste.md`) avec:

```yaml
---
title: "Titre du manifeste"
date: 2026-04-14 21:15:00 +0200
---
```

## Deploiement GitHub Pages

Le workflow `.github/workflows/pages.yml` deploye automatiquement le site a chaque push sur `main`.

Dans GitHub : `Settings > Pages > Source = GitHub Actions`.

URL de production (project pages) :

`https://404loopback.github.io/404PrivacyManifesto/`
